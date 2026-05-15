import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { fadeUpBlurVariant } from '../lib/animations';

export function NotFoundView({ navigateTo }) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpBlurVariant}
        className="glass-card p-12 max-w-lg border-brand/20 shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)]"
      >
        <div className="text-8xl font-heading text-brand mb-6">404</div>
        <h1 className="text-3xl font-heading text-[#e5e6e6] mb-4">Page Not Found</h1>
        <p className="text-[#e5e6e6]/70 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved to a different URL.
        </p>
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center gap-2 bg-[#e5e6e6] text-background px-8 py-3 rounded-full font-bold hover:bg-brand hover:text-[#e5e6e6] transition-all group mx-auto"
        >
          <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
          Navigate Home
        </button>
      </motion.div>
    </div>
  );
}
