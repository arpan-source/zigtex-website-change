/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Linkedin, Github, Menu, X, ChevronDown } from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant } from './lib/animations';

import { LightRays } from './components/LightRays';
import { CustomCursor } from './components/CustomCursor';
import { LeadFormModal } from './components/LeadFormModal';
import { HomeView } from './views/HomeView';
import { ProductView } from './views/ProductView';
import { UseCasesView } from './views/UseCasesView';
import { PricingView } from './views/PricingView';
import { ResourcesView } from './views/ResourcesView';
import { CompanyView } from './views/CompanyView';
import { SEO } from './components/SEO';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  // Map pathname to "currentPage" logic for active states
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    const path = page === 'home' ? '/' : `/${page}`;
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleCTA = (e) => {
    if (e) e.preventDefault();
    setIsLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-[#e5e6e6] font-body selection:bg-brand/30 flex flex-col relative overflow-hidden md:cursor-none">
      <CustomCursor />
      <ScrollToTop />
      
      {/* GLOBAL STYLES & FONTS INJECTION */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&display=swap');

        .font-heading { 
          font-family: 'Satoshi', sans-serif; 
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .font-body { 
          font-family: 'Satoshi', sans-serif; 
          font-weight: 400; /* HIG readability standard */
        }

        .glass-card {
          background: rgba(10, 6, 28, 0.6); /* Ultra-dark Russian Violet base */
          backdrop-filter: blur(20px);
          border: 1px solid rgba(229, 230, 230, 0.05); /* Very subtle Platinum border */
          border-radius: 24px;
        }

        .glass-card-lg { 
          border-radius: 48px; 
          background: rgba(10, 6, 28, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(229, 230, 230, 0.05);
        }

        .text-accent-glow {
          color: #3b82f6; /* Brand blue for maximum contrast */
        }

        /* Accessibility: High Contrast Focus Rings */
        button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 4px !important;
          border-radius: 4px;
        }

        /* Accessibility: Respect Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
          .md\:cursor-none {
            cursor: auto !important;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 12s ease-in-out infinite 3s;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .transition-cubic {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}} />

      {/* Floating Orbs (Background) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={1.2}
          lightSpread={1.2}
          rayLength={1.8}
          followMouse={true}
          mouseInfluence={0.4}
          noiseAmount={0.03}
          distortion={0.08}
          className="opacity-40"
        />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-dark/20 blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand/15 blur-[120px] animate-float-delay" />
      </div>

      {/* Cinematic Frame / Depth Effect */}
      <div className="fixed inset-4 md:inset-12 pointer-events-none rounded-[32px] md:rounded-[48px] shadow-[0_0_80px_rgba(0,0,0,0.4)] border border-[#e5e6e6]/5 z-50 mix-blend-overlay opacity-30" />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Main Navigation" 
        className={`fixed z-50 transition-all duration-500 transition-cubic left-1/2 -translate-x-1/2 w-[95%] max-w-6xl ${
          isScrolled ? 'top-4' : 'top-6 md:top-8'
        }`}
      >
        <div className={`w-full rounded-full transition-all duration-500 flex items-center justify-between px-6 py-3 md:px-8 md:py-3.5 ${
          isScrolled 
            ? 'bg-surface/80 backdrop-blur-xl border border-[#e5e6e6]/10 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)]' 
            : 'bg-surface/30 backdrop-blur-md border border-[#e5e6e6]/5'
        }`}>
          <button onClick={() => navigateTo('home')} aria-label="Go to homepage" className="flex items-center group min-h-[44px]">
            <span className="text-2xl font-heading text-[#e5e6e6] group-hover:text-brand transition-colors mt-0.5">
              ZIGTEX
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button whileHover={{ y: -2 }} aria-current={currentPage === 'product' ? 'page' : undefined} onClick={() => navigateTo('product')} className={`transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${currentPage === 'product' ? 'text-[#e5e6e6]' : 'text-[#e5e6e6]/70 hover:text-[#e5e6e6]'}`}>Product</motion.button>
            <motion.button whileHover={{ y: -2 }} aria-current={currentPage === 'use-cases' ? 'page' : undefined} onClick={() => navigateTo('use-cases')} className={`transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${currentPage === 'use-cases' ? 'text-[#e5e6e6]' : 'text-[#e5e6e6]/70 hover:text-[#e5e6e6]'}`}>Use Cases</motion.button>
            <motion.button whileHover={{ y: -2 }} aria-current={currentPage === 'pricing' ? 'page' : undefined} onClick={() => navigateTo('pricing')} className={`transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${currentPage === 'pricing' ? 'text-[#e5e6e6]' : 'text-[#e5e6e6]/70 hover:text-[#e5e6e6]'}`}>Pricing</motion.button>
            <motion.button whileHover={{ y: -2 }} aria-current={currentPage === 'resources' ? 'page' : undefined} onClick={() => navigateTo('resources')} className={`transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${currentPage === 'resources' ? 'text-[#e5e6e6]' : 'text-[#e5e6e6]/70 hover:text-[#e5e6e6]'}`}>Resources</motion.button>
            
            {/* Company Dropdown */}
            <div className="relative group">
              <motion.button 
                whileHover={{ y: -2 }}
                id="company-dropdown-button"
                aria-expanded="false"
                aria-haspopup="true"
                aria-controls="company-dropdown-menu"
                onMouseEnter={(e) => e.currentTarget.setAttribute('aria-expanded', 'true')}
                onMouseLeave={(e) => e.currentTarget.setAttribute('aria-expanded', 'false')}
                onFocus={(e) => e.currentTarget.setAttribute('aria-expanded', 'true')}
                onBlur={(e) => e.currentTarget.setAttribute('aria-expanded', 'false')}
                onClick={() => navigateTo('company')} 
                className={`flex items-center gap-1.5 transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${(currentPage === 'company' || currentPage === 'case-studies') ? 'text-[#e5e6e6]' : 'text-[#e5e6e6]/70 hover:text-[#e5e6e6]'}`}
              >
                Company <ChevronDown aria-hidden="true" className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </motion.button>
              
              <div 
                id="company-dropdown-menu"
                role="menu"
                aria-labelledby="company-dropdown-button"
                className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-300 w-44"
              >
                <div className="glass-card p-2 flex flex-col gap-1 border-brand-dark/20 shadow-[0_15px_40px_-10px_rgba(59,130,246,0.3)] bg-surface/95 backdrop-blur-2xl">
                  <button 
                    role="menuitem"
                    aria-current={currentPage === 'company' ? 'page' : undefined}
                    onClick={() => navigateTo('company')} 
                    className={`text-left px-4 py-3 rounded-xl font-body text-[11px] uppercase tracking-[0.1em] font-bold transition-colors min-h-[44px] ${currentPage === 'company' ? 'bg-[#e5e6e6]/10 text-brand' : 'text-[#e5e6e6] hover:bg-[#e5e6e6]/5'}`}
                  >
                    About Us
                  </button>
                  <button 
                    role="menuitem"
                    aria-current={currentPage === 'use-cases' ? 'page' : undefined}
                    onClick={() => navigateTo('use-cases')} 
                    className={`text-left px-4 py-3 rounded-xl font-body text-[11px] uppercase tracking-[0.1em] font-bold transition-colors min-h-[44px] ${currentPage === 'use-cases' ? 'bg-[#e5e6e6]/10 text-brand' : 'text-[#e5e6e6] hover:bg-[#e5e6e6]/5'}`}
                  >
                    Use Cases
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="font-body text-[11px] uppercase tracking-[0.2em] font-medium text-[#e5e6e6]/70 hover:text-[#e5e6e6] transition-colors min-h-[44px]">Log In</button>
            <button 
              onClick={handleCTA}
              className="font-body text-[11px] uppercase tracking-[0.1em] font-bold bg-[#e5e6e6] text-[#020108] px-6 py-2.5 rounded-full hover:bg-[#e5e6e6]/90 transition-all transition-cubic shadow-[0_0_20px_rgba(229,230,230,0.1)] min-h-[44px]"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden text-[#e5e6e6] relative z-50 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X aria-hidden="true" className="w-6 h-6" /> : <Menu aria-hidden="true" className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 pt-28 px-6 md:hidden backdrop-blur-2xl overflow-y-auto">
          <div className="flex flex-col space-y-6 text-lg font-medium items-center pb-20">
            <button aria-current={currentPage === 'product' ? 'page' : undefined} onClick={() => navigateTo('product')} className={`transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${currentPage === 'product' ? 'text-brand' : 'text-[#e5e6e6]'}`}>Product</button>
            <button aria-current={currentPage === 'use-cases' ? 'page' : undefined} onClick={() => navigateTo('use-cases')} className={`transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${currentPage === 'use-cases' ? 'text-brand' : 'text-[#e5e6e6]'}`}>Use Cases</button>
            <button aria-current={currentPage === 'pricing' ? 'page' : undefined} onClick={() => navigateTo('pricing')} className={`transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${currentPage === 'pricing' ? 'text-[#e5e6e6]' : 'text-[#e5e6e6]/70 hover:text-[#e5e6e6]'}`}>Pricing</button>
            <button aria-current={currentPage === 'resources' ? 'page' : undefined} onClick={() => navigateTo('resources')} className={`transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${currentPage === 'resources' ? 'text-[#e5e6e6]' : 'text-[#e5e6e6]/70 hover:text-[#e5e6e6]'}`}>Resources</button>
            
            <div className="w-8 h-px bg-[#e5e6e6]/20 my-2" />
            <span className="font-body text-[9px] uppercase tracking-[0.3em] font-bold text-[#e5e6e6]/70">Company</span>
            
            <button aria-current={currentPage === 'use-cases' ? 'page' : undefined} onClick={() => navigateTo('use-cases')} className={`transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${currentPage === 'use-cases' ? 'text-brand-dark' : 'text-[#e5e6e6]'}`}>Use Cases</button>
            <button aria-current={currentPage === 'company' ? 'page' : undefined} onClick={() => navigateTo('company')} className={`transition-colors font-body text-[11px] uppercase tracking-[0.2em] font-medium min-h-[44px] ${currentPage === 'company' ? 'text-brand-dark' : 'text-[#e5e6e6]'}`}>About Us</button>
            
            <div className="w-12 h-px bg-[#e5e6e6]/20 my-4" />
            <button className="font-body text-[11px] uppercase tracking-[0.2em] font-medium text-[#e5e6e6] min-h-[44px]">Log In</button>
            <button 
              onClick={handleCTA}
              className="font-body text-[11px] uppercase tracking-[0.1em] font-bold bg-[#e5e6e6] text-[#020108] px-8 py-4 rounded-full w-full max-w-[200px] min-h-[44px]"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="relative z-10 flex-grow font-body">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <HomeView navigateTo={navigateTo} onCTA={handleCTA} />
              </motion.div>
            } />
            <Route path="/product" element={
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <ProductView navigateTo={navigateTo} onCTA={handleCTA} />
              </motion.div>
            } />
            <Route path="/use-cases" element={
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <UseCasesView navigateTo={navigateTo} onCTA={handleCTA} />
              </motion.div>
            } />
            <Route path="/pricing" element={
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <PricingView navigateTo={navigateTo} onCTA={handleCTA} />
              </motion.div>
            } />
            <Route path="/resources" element={
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <ResourcesView navigateTo={navigateTo} onCTA={handleCTA} />
              </motion.div>
            } />
            <Route path="/company" element={
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <CompanyView navigateTo={navigateTo} onCTA={handleCTA} />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>

      <LeadFormModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
      />

      {/* GLOBAL FOOTER */}
      <footer role="contentinfo" className="border-t border-[#e5e6e6]/10 bg-[#020108] pt-24 pb-12 px-6 md:px-12 relative z-10 mt-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainerVariant}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20"
        >
          <motion.div variants={fadeUpBlurVariant} className="col-span-1 md:col-span-1">
            <button onClick={() => navigateTo('home')} aria-label="Go to homepage" className="flex items-center mb-6 min-h-[44px]">
              <span className="text-2xl font-heading text-[#e5e6e6]">ZIGTEX</span>
            </button>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="w-11 h-11 rounded-full border border-[#e5e6e6]/20 flex items-center justify-center hover:border-brand hover:text-brand transition-colors focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand">
                <Twitter aria-hidden="true" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-full border border-[#e5e6e6]/20 flex items-center justify-center hover:border-brand hover:text-brand transition-colors focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand">
                <Linkedin aria-hidden="true" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="GitHub" className="w-11 h-11 rounded-full border border-[#e5e6e6]/20 flex items-center justify-center hover:border-brand hover:text-brand transition-colors focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-brand">
                <Github aria-hidden="true" className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUpBlurVariant}>
            <h2 className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-[#e5e6e6] mb-6">Product</h2>
            <ul className="space-y-4 font-body text-sm text-[#e5e6e6]/90">
              <li><button onClick={() => navigateTo('product')} className="hover:text-brand transition-colors min-h-[32px] block">Infrastructure</button></li>
              <li><button onClick={() => navigateTo('product')} className="hover:text-brand transition-colors min-h-[32px] block">Smart Quota</button></li>
              <li><button onClick={() => navigateTo('product')} className="hover:text-brand transition-colors min-h-[32px] block">Bounce Memory</button></li>
              <li><button onClick={() => navigateTo('pricing')} className="hover:text-brand transition-colors min-h-[32px] block">Pricing</button></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUpBlurVariant}>
            <h2 className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-[#e5e6e6] mb-6">Resources</h2>
            <ul className="space-y-4 font-body text-sm text-[#e5e6e6]/90">
              <li><button onClick={() => navigateTo('resources')} className="hover:text-brand transition-colors min-h-[32px] block">Blog</button></li>
              <li><button onClick={() => navigateTo('resources')} className="hover:text-brand transition-colors min-h-[32px] block">Playbooks</button></li>
              <li><button onClick={() => navigateTo('use-cases')} className="hover:text-brand transition-colors min-h-[32px] block">Use Cases</button></li>
              <li><button onClick={() => navigateTo('use-cases')} className="hover:text-brand transition-colors min-h-[32px] block">Case Studies</button></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUpBlurVariant}>
            <h2 className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-[#e5e6e6] mb-6">Company</h2>
            <ul className="space-y-4 font-body text-sm text-[#e5e6e6]/90">
              <li><button onClick={() => navigateTo('company')} className="hover:text-brand transition-colors min-h-[32px] block">About Us</button></li>
              <li><button onClick={() => navigateTo('company')} className="hover:text-brand transition-colors min-h-[32px] block">Careers</button></li>
              <li><button className="hover:text-brand transition-colors min-h-[32px] block">Contact Sales</button></li>
            </ul>
          </motion.div>

        </motion.div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#e5e6e6]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.1em] text-[#e5e6e6]/70 font-medium">
          <p>© 2026 Zigtex. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-brand transition-colors min-h-[44px]">Terms</button>
            <button className="hover:text-brand transition-colors min-h-[44px]">Privacy</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
