import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const PORT = 3000;

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  let vite;
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());
    app.use((await import('serve-static')).default(path.resolve(__dirname, 'dist/client'), {
      index: false
    }));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template;
      let render;
      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        // 2. Apply Vite HTML transforms. This injects Vite HMR client, and
        //    also applies HTML transforms from Vite plugins, e.g. global preambles
        //    from @vitejs/plugin-react
        template = await vite.transformIndexHtml(url, template);
        // 3. Load the server entry. vite.ssrLoadModule automatically transforms
        //    your ESM source code to be usable in Node.js!
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('./dist/server/entry-server.js')).render;
      }

      // 4. render the app HTML.
      const helmetContext: any = {};
      const { html: appHtml, helmetContext: renderedContext } = render(url, helmetContext);
      const helmet = (renderedContext || helmetContext).helmet;

      // 5. Inject the app-rendered HTML into the template.
      const headTags = helmet ? `
        ${helmet.title ? helmet.title.toString() : ''}
        ${helmet.meta ? helmet.meta.toString() : ''}
        ${helmet.link ? helmet.link.toString() : ''}
        ${helmet.script ? helmet.script.toString() : ''}
        ${helmet.style ? helmet.style.toString() : ''}
      ` : '';

      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`</head>`, `${headTags}</head>`);

      // 6. Send the rendered HTML back.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      !isProd && vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

createServer();
