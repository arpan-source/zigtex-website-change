import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import express from 'express';
import compression from 'compression';
import serveStatic from 'serve-static';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();
  const PORT = 3000;

  const isProd = process.env.NODE_ENV === 'production';
  const root = process.cwd();
  let vite: any;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    app.use(serveStatic(path.resolve(root, 'dist/client'), {
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
        template = fs.readFileSync(path.resolve(root, 'index.html'), 'utf-8');
        // 2. Apply Vite HTML transforms
        template = await vite.transformIndexHtml(url, template);
        // 3. Load the server entry
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(root, 'dist/client/index.html'), 'utf-8');
        // Load the SSR bundle as a file URL for robust ESM import in CJS context
        const bundlePath = path.resolve(root, 'dist/server/entry-server.js');
        render = (await import(pathToFileURL(bundlePath).href)).render;
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
