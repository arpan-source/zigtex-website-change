import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, XCircle, Target, CheckCircle2, Quote 
} from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant } from '../lib/animations';
import { SEO } from '../components/SEO';

export const CompanyView = ({ navigateTo, onCTA }) => (
  <div className="w-full relative pt-32 px-6 max-w-5xl mx-auto pb-32">
    <SEO 
      title="About Zigtex" 
      description="The mission behind Zigtex: Giving B2B teams the infrastructure to land in inboxes and scale with confidence."
      canonical="https://zigtex.com/company"
    />
    
    {/* Hero Section */}
    <motion.section 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainerVariant}
      aria-labelledby="company-heading" 
      className="text-center mb-32 relative z-10 pt-8"
    >
      <motion.h1 variants={fadeUpBlurVariant} id="company-heading" className="font-heading text-6xl md:text-8xl text-[#e5e6e6] mb-10 leading-[0.95]">
        Pipeline is Life. <br/>
        <span className="text-brand block mt-4">We Built the Engine.</span>
      </motion.h1>
      <motion.p variants={fadeUpBlurVariant} className="font-body text-xl md:text-3xl text-[#e5e6e6]/70 max-w-4xl mx-auto leading-tight font-medium">
        Zigtex exists because outbound is broken. We’ve combined world-class <span className="text-brand">inbox technology</span> with the hunters to run it.
      </motion.p>
    </motion.section>

    {/* Integrated Timeline */}
    <div className="relative z-10 w-full mb-32">
      {/* The Central Track Line */}
      <div aria-hidden="true" className="absolute top-0 bottom-0 left-[27px] md:left-1/2 w-px bg-gradient-to-b from-transparent via-[#e5e6e6]/20 to-transparent md:-translate-x-1/2 -z-10" />

      {/* Section 1: How this started */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-labelledby="how-it-started-heading" 
        className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-32 group"
      >
        {/* Node */}
        <motion.div variants={fadeUpBlurVariant} aria-hidden="true" className="absolute left-[12px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-surface border border-brand/50 flex items-center justify-center md:-translate-x-1/2 z-20 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-shadow duration-500">
          <div className="w-2 h-2 rounded-full bg-brand" />
        </motion.div>

        {/* Text Left */}
        <motion.div variants={fadeUpBlurVariant} className="w-full md:w-1/2 md:pr-16 md:text-right pl-16 md:pl-0 pt-2 md:pt-0">
          <div className="font-body text-[11px] uppercase tracking-[0.3em] font-bold text-[#e5e6e6]/60 mb-5">The Mission</div>
          <h2 id="how-it-started-heading" className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-6 leading-tight">Outbound shouldn't be <br/><span className="text-brand">a guessing game.</span></h2>
          <p className="font-body text-lg text-[#e5e6e6]/80 leading-relaxed">
            I've watched too many founders burn capital on tools and reps that never deliver. Zigtex is the engine I wish I had: a guaranteed lever for B2B growth.
          </p>
        </motion.div>

        {/* Visual Right */}
        <motion.div variants={fadeUpBlurVariant} className="w-full md:w-1/2 md:pl-16 pl-16 md:pl-0">
          <div className="glass-card p-10 border-brand/20 group-hover:border-brand/40 transition-colors bg-surface/80">
            <div className="font-body text-base text-[#e5e6e6] font-medium mb-8">Because the system underneath it was broken:</div>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 font-body text-sm md:text-base text-[#e5e6e6]/90"><TrendingDown aria-hidden="true" className="w-5 h-5 text-red-400 opacity-80 shrink-0 mt-0.5" /> Emails landing in spam without warning</li>
              <li className="flex items-start gap-4 font-body text-sm md:text-base text-[#e5e6e6]/90"><TrendingDown aria-hidden="true" className="w-5 h-5 text-red-400 opacity-80 shrink-0 mt-0.5" /> Domains getting damaged without visibility</li>
              <li className="flex items-start gap-4 font-body text-sm md:text-base text-[#e5e6e6]/90"><TrendingDown aria-hidden="true" className="w-5 h-5 text-red-400 opacity-80 shrink-0 mt-0.5" /> Campaign performance dropping randomly</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 2: The Real Problem */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-labelledby="real-problem-heading" 
        className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-0 mb-32 group"
      >
        {/* Node */}
        <motion.div variants={fadeUpBlurVariant} aria-hidden="true" className="absolute left-[12px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-surface border-red-500/50 flex items-center justify-center md:-translate-x-1/2 z-20 shadow-[0_0_20px_rgba(248,113,113,0.3)] group-hover:shadow-[0_0_30px_rgba(248,113,113,0.6)] transition-shadow duration-500">
          <div className="w-2 h-2 rounded-full bg-red-400" />
        </motion.div>

        {/* Text Right */}
        <motion.div variants={fadeUpBlurVariant} className="w-full md:w-1/2 md:pl-16 md:text-left pl-16 md:pl-0 pt-2 md:pt-0">
          <div className="font-body text-[11px] uppercase tracking-[0.3em] font-bold text-[#e5e6e6]/60 mb-5">The Real Problem</div>
          <h2 id="real-problem-heading" className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-6 leading-tight">Focusing on <br/><span className="text-red-400">the wrong things.</span></h2>
          <p className="font-body text-lg text-[#e5e6e6]/80 leading-relaxed">
            Most platforms focus entirely on the top layer of outreach. That gap in the infrastructure is where everything breaks.
          </p>
        </motion.div>

        {/* Visual Left */}
        <motion.div variants={fadeUpBlurVariant} className="w-full md:w-1/2 md:pr-16 pl-16 md:pl-0">
          <div className="glass-card p-1.5 border-[#e5e6e6]/10 bg-surface/90 flex flex-col overflow-hidden">
             <div className="p-8 bg-red-500/10 border-b border-red-500/20">
               <div className="font-body text-[11px] font-bold uppercase tracking-widest text-[#e5e6e6]/70 mb-5">Most tools optimize for:</div>
               <ul className="space-y-4">
                 <li className="font-body text-base text-[#e5e6e6]/60 flex items-center gap-4 line-through"><XCircle aria-hidden="true" className="w-5 h-5 text-red-400/50 shrink-0" /> Writing email copy</li>
                 <li className="font-body text-base text-[#e5e6e6]/60 flex items-center gap-4 line-through"><XCircle aria-hidden="true" className="w-5 h-5 text-red-400/50 shrink-0" /> Managing automated sequences</li>
                 <li className="font-body text-base text-[#e5e6e6]/60 flex items-center gap-4 line-through"><XCircle aria-hidden="true" className="w-5 h-5 text-red-400/50 shrink-0" /> Increasing daily volume</li>
               </ul>
             </div>
             <div className="p-8 bg-brand-dark/20">
               <div className="font-body text-[11px] font-bold uppercase tracking-widest text-[#e5e6e6] mb-5">Almost none focus on:</div>
               <ul className="space-y-4">
                 <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-4"><Target aria-hidden="true" className="w-5 h-5 text-brand shrink-0" /> How emails are actually sent</li>
                 <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-4"><Target aria-hidden="true" className="w-5 h-5 text-brand shrink-0" /> How volume is distributed safely</li>
                 <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-4"><Target aria-hidden="true" className="w-5 h-5 text-brand shrink-0" /> How reputation is built or destroyed</li>
               </ul>
             </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 3: What We Built */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-labelledby="solution-heading" 
        className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-16 group"
      >
        {/* Node */}
        <motion.div variants={fadeUpBlurVariant} aria-hidden="true" className="absolute left-[12px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-surface border-brand-dark/50 flex items-center justify-center md:-translate-x-1/2 z-20 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-shadow duration-500">
          <div className="w-2 h-2 rounded-full bg-brand" />
        </motion.div>

        {/* Text Left */}
        <motion.div variants={fadeUpBlurVariant} className="w-full md:w-1/2 md:pr-16 md:text-right pl-16 md:pl-0 pt-2 md:pt-0">
          <div className="font-body text-[11px] uppercase tracking-[0.3em] font-bold text-[#e5e6e6]/60 mb-5">The Outcome</div>
          <h2 id="solution-heading" className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-6 leading-tight">The Zigtex <br/><span className="text-brand">Outcome Engine.</span></h2>
          <p className="font-body text-lg text-[#e5e6e6]/80 leading-relaxed">
            We aren’t selling software. We’re providing a managed sales engine. That means the automation, the infrastructure, and the human hunter to run it.
          </p>
        </motion.div>

        {/* Visual Right */}
        <motion.div variants={fadeUpBlurVariant} className="w-full md:w-1/2 md:pl-16 pl-16 md:pl-0">
          <div className="glass-card p-10 border-brand-dark/30 group-hover:border-brand-dark/50 transition-colors bg-surface/80">
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4 font-body text-base text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-brand shrink-0 mt-0.5" /> How emails are sent</li>
              <li className="flex items-start gap-4 font-body text-base text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-brand shrink-0 mt-0.5" /> How sending volume is distributed</li>
              <li className="flex items-start gap-4 font-body text-base text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-brand shrink-0 mt-0.5" /> How bounce behavior is handled</li>
              <li className="flex items-start gap-4 font-body text-base text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-6 h-6 text-brand shrink-0 mt-0.5" /> How domain reputation is protected</li>
            </ul>
            <div className="font-body text-[12px] uppercase tracking-[0.2em] text-brand font-bold border-t border-[#e5e6e6]/10 pt-6">
              Every single day.
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>

    {/* Section 4: What I Believe (Anchor Breakout) */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-labelledby="belief-heading" 
      className="text-center py-32 mb-40 border-y border-[#e5e6e6]/10 bg-[#e5e6e6]/[0.02] relative overflow-hidden"
    >
       <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(135,115,255,0.08),transparent_60%)] pointer-events-none" />
       <motion.div variants={fadeUpBlurVariant}>
         <Quote aria-hidden="true" className="w-20 h-20 text-[#e5e6e6]/20 mx-auto mb-10" />
       </motion.div>
       <motion.h3 variants={fadeUpBlurVariant} id="belief-heading" className="font-heading text-5xl md:text-7xl text-[#e5e6e6] mb-16 leading-[1.05] max-w-4xl mx-auto px-6">
         "The only metric that matters <br/><span className="text-brand block mt-4">is qualified meetings."</span>
       </motion.h3>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left px-6">
         <motion.div variants={fadeUpBlurVariant} className="p-10 rounded-3xl bg-[#e5e6e6]/[0.03] border border-[#e5e6e6]/10 hover:border-[#e5e6e6]/20 transition-colors shadow-lg">
           <h4 className="font-body text-lg text-[#e5e6e6] font-bold mb-4">Copy is irrelevant</h4>
           <p className="font-body text-base text-[#e5e6e6]/80 leading-relaxed">Copy, targeting, and personalization: none of it matters if you’re in spam.</p>
         </motion.div>
         <motion.div variants={fadeUpBlurVariant} className="p-10 rounded-3xl bg-[#e5e6e6]/[0.03] border border-[#e5e6e6]/10 hover:border-[#e5e6e6]/20 transition-colors shadow-lg">
           <h4 className="font-body text-lg text-[#e5e6e6] font-bold mb-4">Automation is risky</h4>
           <p className="font-body text-base text-[#e5e6e6]/80 leading-relaxed">Scaling without understanding deliverability is how domains get burned.</p>
         </motion.div>
         <motion.div variants={fadeUpBlurVariant} className="p-10 rounded-3xl bg-[#e5e6e6]/[0.03] border border-[#e5e6e6]/10 hover:border-[#e5e6e6]/20 transition-colors shadow-lg">
           <h4 className="font-body text-lg text-[#e5e6e6] font-bold mb-4">Outbound must be predictable</h4>
           <p className="font-body text-base text-[#e5e6e6]/80 leading-relaxed">It should behave like a system you can trust. No more guessing what broke.</p>
         </motion.div>
       </div>
    </motion.section>

    {/* Section 6 & 7: What I care about / Where we're going */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-label="Our Vision" 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40 max-w-6xl mx-auto px-6"
    >
       <motion.div variants={fadeUpBlurVariant} className="glass-card p-12 md:p-16 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] hover:border-brand-dark/30 transition-all duration-500 flex flex-col bg-brand-dark/10">
          <h3 className="font-heading text-4xl text-[#e5e6e6] mb-8">What I Care About</h3>
          <p className="font-body text-[#e5e6e6]/90 mb-10 text-xl leading-relaxed">I don’t care about sending more emails. I care about:</p>
          <ul className="space-y-6 flex-1">
             <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-5"><div aria-hidden="true" className="w-2 h-2 rounded-full bg-brand shrink-0"/> Whether your emails reach the inbox</li>
             <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-5"><div aria-hidden="true" className="w-2 h-2 rounded-full bg-brand shrink-0"/> Whether your domain stays healthy</li>
             <li className="font-body text-base text-[#e5e6e6] font-medium flex items-center gap-5"><div aria-hidden="true" className="w-2 h-2 rounded-full bg-brand shrink-0"/> Whether your outbound works consistently</li>
          </ul>
          <div className="pt-8 mt-10 border-t border-[#e5e6e6]/10 font-body text-[12px] uppercase tracking-[0.2em] text-[#e5e6e6]/70 font-bold">
            If those three are solved, everything else is easy.
          </div>
       </motion.div>

       <motion.div variants={fadeUpBlurVariant} className="glass-card p-12 md:p-16 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] hover:border-brand/30 transition-all duration-500 bg-surface flex flex-col relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-bl from-brand/10 to-transparent pointer-events-none" />
          <h3 className="font-heading text-4xl text-[#e5e6e6] mb-8 relative z-10">Where We’re Going</h3>
          <p className="font-body text-[#e5e6e6]/90 mb-8 text-xl leading-relaxed flex-1 relative z-10">
            Outbound is still evolving, but one thing is clear: The companies that win won’t be the ones sending the most.
            <br/><br/>
            <span className="text-[#e5e6e6] font-bold">They’ll be the ones with the most reliable systems behind their outreach.</span>
          </p>
          <div className="pt-8 border-t border-[#e5e6e6]/20 font-body text-[12px] uppercase tracking-[0.2em] text-brand font-bold relative z-10">
            That’s what we’re building toward.
          </div>
       </motion.div>
    </motion.section>

    {/* Section 8: If You're Reading This */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-labelledby="reading-heading" 
      className="max-w-4xl mx-auto text-center mb-32 relative z-10 glass-card p-16 md:p-20 border-[#e5e6e6]/20 bg-surface/90 px-6"
    >
      <motion.h2 variants={fadeUpBlurVariant} id="reading-heading" className="font-heading text-5xl md:text-6xl text-[#e5e6e6] mb-8">If you're reading this...</motion.h2>
      <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/80 mb-12">You’re probably dealing with one of these:</motion.p>
      
      <motion.div variants={fadeUpBlurVariant} className="flex flex-col md:flex-row gap-5 justify-center items-center mb-14">
        <span className="px-8 py-4 rounded-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 font-body text-sm md:text-base text-[#e5e6e6] shadow-sm font-medium w-full md:w-auto">Inconsistent campaign performance</span>
        <span className="px-8 py-4 rounded-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 font-body text-sm md:text-base text-[#e5e6e6] shadow-sm font-medium w-full md:w-auto">Deliverability issues you can’t diagnose</span>
        <span className="px-8 py-4 rounded-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 font-body text-sm md:text-base text-[#e5e6e6] shadow-sm font-medium w-full md:w-auto">Fear of damaging your domain</span>
      </motion.div>
      
      <motion.div variants={fadeUpBlurVariant} className="inline-block px-8 py-3 rounded-xl border-brand/40 bg-brand/10">
        <span className="font-body text-base text-brand font-bold uppercase tracking-widest">Zigtex exists to remove that uncertainty.</span>
      </motion.div>
    </motion.section>

    {/* Subtle Sign-off */}
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={fadeUpBlurVariant}
      className="text-center font-heading text-3xl md:text-4xl text-[#e5e6e6]/40 mb-32 relative z-10 px-6"
    >
      "Love God, Love People, Love what we do."
    </motion.div>

    {/* Enterprise CTA Section */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUpBlurVariant}
      className="mb-32 relative z-10"
    >
      <div className="glass-card p-10 md:p-16 border-brand/20 bg-gradient-to-br from-brand-dark/10 to-surface/90 flex flex-col md:flex-row items-center justify-between gap-8 group">
        <div className="text-center md:text-left">
          <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-4">Enterprise Inquiries</h2>
          <p className="font-body text-lg text-[#e5e6e6]/70 max-w-xl">
            Looking for custom infrastructure at scale? Contact us to discuss tailored outbound solutions for large-scale operations.
          </p>
        </div>
        <button
          onClick={onCTA}
          className="font-body text-[12px] uppercase tracking-[0.2em] font-bold bg-brand text-[#e5e6e6] px-10 py-5 rounded-full hover:bg-brand/90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.2)] min-h-[44px] shrink-0"
        >
          Contact Us
        </button>
      </div>
    </motion.section>

    {/* Final CTA */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-label="Fix your system" 
      className="glass-card p-16 md:p-24 flex flex-col items-center relative overflow-hidden group klein-glow-strong border-brand/30 text-center z-10 mx-6 md:mx-auto max-w-5xl my-32"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />
      <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-5xl md:text-7xl text-[#e5e6e6] mb-8 max-w-4xl leading-[1.05] relative z-10">
        If outbound feels unpredictable, <br/>
        <span className="text-brand">the system behind it needs fixing.</span>
      </motion.h2>
      
      <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
        Zigtex gives you total control over your deliverability. Scale with confidence, knowing your system is actually working for you.
      </motion.p>

      <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
        <button onClick={onCTA} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]">
          Start Free Trial
        </button>
        <button onClick={onCTA} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/10 hover:border-[#e5e6e6]/50 transition-all duration-300 min-h-[44px]">
          Talk to Sales
        </button>
      </motion.div>
    </motion.section>

  </div>
);
