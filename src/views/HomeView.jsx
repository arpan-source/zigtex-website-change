import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Server, Activity, Layers, TrendingUp, ArrowDownRight, MessageSquare, Users, ShieldCheck, Play 
} from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant, fadeBlurVariant } from '../lib/animations';
import { SEO } from '../components/SEO';

export const HomeView = ({ navigateTo, onCTA }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zigtex",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": "Enterprise email infrastructure for B2B outreach that improves inbox placement and domain reputation.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zigtex",
      "logo": "https://zigtex.com/logo.png"
    }
  };

  return (
    <div className="w-full relative">
      <SEO 
        title="Outbound Success at Scale" 
        description="The infrastructure for B2B email outreach that controls how emails are sent, distributed, and delivered. Scale your outbound with 99.9% system delivery."
        canonical="https://zigtex.com/"
        schema={schema}
      />
      
      {/* Interactive Hero Section */}
    <motion.section 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainerVariant} 
      aria-labelledby="hero-heading" 
      className="relative min-h-[90vh] pt-32 pb-20 flex flex-col items-center justify-center w-full px-6 overflow-hidden"
    >
      {/* Live Notification Pill */}
      <motion.div variants={fadeUpBlurVariant} className="absolute top-32 glass-card px-4 py-2 flex items-center gap-3 z-30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform cursor-default bg-card/80" aria-label="System status: Optimal">
        <div className="w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(59,130,246,0.6)]" aria-hidden="true" />
        <span className="text-[9px] font-bold text-brand tracking-[0.2em] uppercase">System Live</span>
        <span className="text-xs text-[#e5e6e6] font-medium">99.9% Delivery Rate</span>
      </motion.div>

      <div className="relative z-20 text-center max-w-5xl mx-auto mt-16 mb-24 px-4">
        <motion.h1 variants={fadeUpBlurVariant} id="hero-heading" className="font-heading text-[clamp(2.8rem,9vw,6.5rem)] leading-[1] text-[#e5e6e6] mb-8 tracking-tighter max-w-6xl mx-auto">
          Land in the Primary Inbox. <br className="hidden md:block" />
          <span className="text-brand">Book More Meetings.</span>
        </motion.h1>

        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl md:text-3xl text-[#e5e6e6]/70 max-w-4xl mx-auto mb-14 leading-tight font-medium">
          We built the technology to bypass the spam filter and the team to handle the hunt. <span className="text-[#e5e6e6]">You just focus on closing.</span>
        </motion.p>

        <motion.div 
          variants={fadeUpBlurVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button 
            onClick={onCTA}
            whileHover={{ scale: 1.02, backgroundColor: "#ffffff", boxShadow: "0 20px 40px -10px rgba(59,130,246,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="font-body w-full sm:w-auto text-[15px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-14 py-7 rounded-full transition-all min-h-[44px] flex items-center justify-center gap-3 group"
          >
            Start Booking Meetings
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
          <motion.button 
            onClick={onCTA}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(229,230,230,0.05)", borderColor: "#e5e6e6" }}
            whileTap={{ scale: 0.98 }}
            className="font-body w-full sm:w-auto text-[15px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/20 text-[#e5e6e6] px-14 py-7 rounded-full transition-all min-h-[44px]"
          >
            Book a Strategy Call
          </motion.button>
        </motion.div>

        <motion.p variants={fadeUpBlurVariant} className="mt-12 font-body text-[11px] uppercase tracking-[0.3em] font-bold text-[#e5e6e6]/40">
          No training. No ramp-up. Just Pipeline.
        </motion.p>
      </div>
    </motion.section>

    {/* Trust Signals (Ribbon) */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeBlurVariant}
      aria-label="Trust Signals" 
      className="w-full overflow-hidden whitespace-nowrap border-y border-[#e5e6e6]/5 bg-[#e5e6e6]/[0.01] py-8 relative z-10 backdrop-blur-sm"
    >
       <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020108] to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
       <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020108] to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
       
       <div className="flex w-max animate-scroll hover:[animation-play-state:paused] opacity-90 transition-opacity duration-300 hover:opacity-100 cursor-default" aria-hidden="true">
           {[...Array(2)].map((_, i) => (
             <div key={i} className="flex items-center gap-16 px-8">
                <span className="flex items-center gap-3 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/70 hover:text-[#e5e6e6] transition-colors">
                  <TrendingUp className="w-5 h-5 text-brand"/> Higher inbox placement
                </span>
                <span className="flex items-center gap-3 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/70 hover:text-[#e5e6e6] transition-colors">
                  <ArrowDownRight className="w-5 h-5 text-brand/60"/> Lower bounce rates
                </span>
                <span className="flex items-center gap-3 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/70 hover:text-[#e5e6e6] transition-colors">
                  <MessageSquare className="w-5 h-5 text-brand"/> Stronger reply rates
                </span>
                <span className="flex items-center gap-3 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/70 hover:text-[#e5e6e6] transition-colors">
                  <Users className="w-5 h-5 text-brand/60"/> Trusted by outbound-focused teams
                </span>
             </div>
           ))}
       </div>
    </motion.section>

    {/* Problem Section: Sound Familiar? */}
    <section aria-labelledby="problem-heading" className="py-32 px-6 max-w-6xl mx-auto relative z-10 border-t border-[#e5e6e6]/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerVariant}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeUpBlurVariant} id="problem-heading" className="font-heading text-5xl md:text-6xl text-[#e5e6e6] mb-6">Is Your Pipeline Stalling?</motion.h2>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-[#e5e6e6]/70 text-lg max-w-2xl mx-auto italic">
          Old outbound is dead. Burned domains, ghosted sequences, and overhead costs are killing your growth.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: "Ghosted by Outlook/Gmail", desc: "Your 'perfect' sequences are landing in Spam. You're burning domains without ever hitting the inbox." },
          { title: "SDR Burnout & Bloat", desc: "Paying $6k+ for reps who spend half their day building lists and fighting with tools instead of selling." },
          { title: "The Pipeline Guessing Game", desc: "Flying blind with zero visibility into why campaigns are stalling or where the meetings are." },
          { title: "Leaking ROI Every Day", desc: "Valuable prospects are falling through the cracks because your follow-up is manual and messy." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            variants={fadeUpBlurVariant}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -5, scale: 1.01, borderColor: "rgba(0, 217, 255, 0.4)" }}
            viewport={{ once: true, margin: "-10%" }}
            className="glass-card p-8 group border-[#e5e6e6]/5 hover:border-brand/40 transition-all flex items-start gap-6 bg-card/40 cursor-default"
          >
            <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
               <ShieldCheck className="w-5 h-5 text-brand" />
            </div>
            <div>
              <h3 className="font-heading text-2xl text-[#e5e6e6] mb-2">{item.title}</h3>
              <p className="font-body text-[#e5e6e6]/70 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* The Zigtex Engine */}
    <section aria-labelledby="advantage-heading" className="py-32 px-6 max-w-7xl mx-auto relative z-10 bg-[#e5e6e6]/[0.01] rounded-[4rem] border border-[#e5e6e6]/5 my-32">
       <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={staggerContainerVariant}
         className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
       >
          <div>
            <motion.div variants={fadeUpBlurVariant} className="bg-brand text-[#020108] text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block mb-6">The Outbound Engine</motion.div>
            <motion.h2 variants={fadeUpBlurVariant} id="advantage-heading" className="font-heading text-5xl md:text-6xl text-[#e5e6e6] mb-8 leading-[1.05]">Qualified Meetings <br/><span className="text-brand">on Autopilot.</span></motion.h2>
            <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/80 mb-10 leading-relaxed">
              We combined enterprise-grade deliverability with high-performance hunters. We don’t just 'send' emails. We book the meetings.
            </motion.p>
            <motion.ul variants={staggerContainerVariant} className="space-y-6">
               {[
                 "Hunters who know how to close the gap",
                 "Infrastructure that stays out of Spam",
                 "12 BANT Qualified meetings guaranteed",
                 "Zero tech debt: we manage the stack"
               ].map((point, i) => (
                 <motion.li key={i} variants={fadeUpBlurVariant} className="flex items-center gap-4 text-[#e5e6e6] font-body text-lg">
                    <CheckCircle2 className="w-6 h-6 text-brand" /> {point}
                 </motion.li>
               ))}
            </motion.ul>
          </div>
          <div className="relative">
             <motion.div 
               variants={fadeBlurVariant}
               whileHover={{ y: -10, rotateX: 2, rotateY: -2, boxShadow: "0 40px 80px -20px rgba(0, 217, 255, 0.4)" }}
               style={{ transformStyle: "preserve-3d" }}
               className="aspect-square glass-card border border-[#e5e6e6]/10 flex items-center justify-center relative overflow-hidden group cursor-default transition-shadow duration-500"
             >
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Abstract technical data infrastructure"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-brand-dark/20 mix-blend-overlay" />
                <div className="relative z-10 text-center p-12">
                   <div className="font-heading text-7xl text-[#e5e6e6] mb-4">Outcome</div>
                   <div className="font-body text-brand font-bold uppercase tracking-widest text-xl">Qualified Meetings</div>
                   <div className="mt-8 pt-8 border-t border-[#e5e6e6]/10 grid grid-cols-2 gap-8">
                      <div>
                        <div className="font-heading text-4xl text-[#e5e6e6]">System</div>
                        <div className="font-body text-[#e5e6e6]/50 text-xs uppercase tracking-widest mt-2">Automation</div>
                      </div>
                      <div>
                        <div className="font-heading text-4xl text-[#e5e6e6]">Service</div>
                        <div className="font-body text-[#e5e6e6]/50 text-xs uppercase tracking-widest mt-2">Managed SDR</div>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
       </motion.div>
    </section>

    {/* What Zigtex Does */}
    <section aria-label="Core Features" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { title: "Send with Control", items: ["Native domain-based email sending", "Full ownership of sender reputation", "No shared infrastructure risks"], icon: Server },
          { title: "Scale Intelligently", items: ["Automatic volume distribution", "Prevents sending spikes", "Mimics human-like behavior"], icon: Activity },
          { title: "Learn and Adapt", items: ["Tracks bounce patterns", "Avoids repeated failures", "Improves future campaigns"], icon: Layers }
        ].map((feat, i) => (
          <motion.article 
            variants={fadeUpBlurVariant} 
            key={i} 
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-10 group transition-all duration-500 hover:border-brand/50 cursor-default"
          >
            <div aria-hidden="true" className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 transition-cubic group-hover:bg-brand/20">
              <feat.icon className="w-7 h-7 text-brand" />
            </div>
            <h3 className="font-heading text-3xl text-[#e5e6e6] mb-6 tracking-tight">{feat.title}</h3>
            <ul className="space-y-4">
               {feat.items.map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3 font-body text-sm md:text-base text-[#e5e6e6]/90 leading-relaxed">
                   <div aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                   {item}
                 </li>
               ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>

    {/* Everything Your Outbound Needs (BENTO BOX) */}
    <section aria-labelledby="overview-heading" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        className="mb-16 text-center"
      >
        <motion.h2 variants={fadeUpBlurVariant} id="overview-heading" className="font-heading text-5xl md:text-6xl text-[#e5e6e6] mb-4">The Complete GTM Lever.</motion.h2>
        <motion.h3 variants={fadeUpBlurVariant} className="font-heading text-5xl md:text-6xl text-brand">One Outcomes Platform.</motion.h3>
      </motion.div>
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
      >
        {/* Bento 1: Automation */}
        <motion.div 
           variants={fadeUpBlurVariant} 
           whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(0, 217, 255, 0.3)" }}
           className="md:col-span-2 glass-card p-10 flex flex-col justify-between group overflow-hidden relative hover:border-brand/40 transition-all cursor-default"
        >
           <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
              alt="Close-up of technical circuitry and hardware"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.08] group-hover:opacity-15 transition-all duration-1000 group-hover:scale-110 mix-blend-screen pointer-events-none"
              referrerPolicy="no-referrer"
           />
           <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent pointer-events-none" />
           <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
           <div className="relative z-10">
              <div className="font-body text-[10px] uppercase tracking-widest font-bold text-brand mb-2">Leverage 01</div>
              <h3 className="font-heading text-3xl text-[#e5e6e6] leading-tight">Advanced Automation Workflows</h3>
           </div>
           <p className="font-body text-[#e5e6e6]/60 text-sm max-w-md relative z-10">Infrastructure that ensures 99.9% inbox placement with smart quota distribution and bounce memory.</p>
        </motion.div>
        {/* Bento 2: The SDR */}
        <motion.div 
           variants={fadeUpBlurVariant} 
           whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(0, 217, 255, 0.1)" }}
           className="glass-card p-10 flex flex-col justify-between group hover:border-brand-dark/40 transition-all bg-brand-dark/5 cursor-default"
        >
           <div>
              <div className="font-body text-[10px] uppercase tracking-widest font-bold text-brand-dark mb-2">Leverage 02</div>
              <h3 className="font-heading text-2xl text-[#e5e6e6] leading-tight">Trained In-House SDRs</h3>
           </div>
           <p className="font-body text-[#e5e6e6]/60 text-sm italic">"We execute the strategy while you focus on closing."</p>
        </motion.div>
        {/* Bento 3: Results */}
        <motion.div 
           variants={fadeUpBlurVariant} 
           whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(0, 217, 255, 0.2)" }}
           className="glass-card p-10 flex flex-col justify-between group hover:border-brand/40 transition-all cursor-default"
        >
           <h3 className="font-heading text-2xl text-[#e5e6e6] relative z-10 leading-tight">12+ BANT Qualified Meetings</h3>
           <TrendingUp aria-hidden="true" className="w-12 h-12 text-brand-dark opacity-70 ml-auto" />
        </motion.div>
        {/* Bento 4: Conclusion */}
        <motion.div 
           variants={fadeUpBlurVariant} 
           whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(0, 217, 255, 0.3)" }}
           className="md:col-span-2 glass-card p-10 flex flex-col justify-center items-center text-center group hover:border-brand/40 transition-all relative overflow-hidden cursor-default"
        >
           <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              alt="Global digital network visualization"
              className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-1000 scale-125 group-hover:scale-100"
              referrerPolicy="no-referrer"
           />
           <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-brand/10 to-brand-dark/10 pointer-events-none" />
           <h3 className="font-heading text-4xl text-[#e5e6e6] relative z-10 mb-4 leading-tight">End-to-End GTM Leverage</h3>
           <p className="font-body text-[#e5e6e6]/50 max-w-lg relative z-10">From setting up the domain to qualifying the lead and booking the call.</p>
        </motion.div>
      </motion.div>
    </section>

    {/* Core Differentiators */}
    <section aria-labelledby="differentiators-heading" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
       <motion.div 
         initial="hidden" 
         whileInView="visible" 
         viewport={{ once: true, margin: "-50px" }} 
         variants={staggerContainerVariant}
         className="flex flex-col md:flex-row gap-16 items-start"
       >
          <motion.div variants={fadeUpBlurVariant} className="md:w-1/3 md:sticky md:top-32">
             <h2 id="differentiators-heading" className="font-heading text-5xl md:text-6xl text-[#e5e6e6] leading-tight">The <br/><span className="text-brand block mt-2">Difference</span></h2>
             <p className="font-body text-[#e5e6e6]/60 mt-6 text-lg">We don't sell tools. We build pipelines.</p>
          </motion.div>
          <div className="md:w-2/3 space-y-6">
             {[
               { title: "The SDR + Software Hybrid", desc: "Agencies overcharge. Tools under-deliver. We give you a bulletproof platform and the trained expert to run it.", num: "01" },
               { title: "BANT-Qualified Guarantee", desc: "Stop paying for 'leads'. Start paying for outcomes. On our Scale plan, if they aren't qualified, they don't count.", num: "02" },
               { title: "Done-With-You Delivery", desc: "We handle the domains, the DMARC/SPF/DKIM setup, the list building, and the dials. You just close the deals.", num: "03" },
               { title: "Proprietary Inbox Insights", num: "04", desc: "vConnect IQ technology ensures your 'money' emails land in the primary inbox, not the promotional tab." },
             ].map((diff, i) => (
                 <motion.article 
                    variants={fadeUpBlurVariant} 
                    key={i} 
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.02)" }}
                    className="glass-card p-10 flex gap-8 group hover:border-brand/30 transition-all cursor-default"
                 >
                   <div aria-hidden="true" className="font-body text-2xl font-bold text-[#e5e6e6]/50 group-hover:text-brand transition-colors">{diff.num}</div>
                   <div>
                      <h3 className="font-heading text-3xl text-[#e5e6e6] mb-3">{diff.title}</h3>
                      <p className="font-body text-[#e5e6e6]/90 text-lg leading-relaxed">{diff.desc}</p>
                   </div>
                </motion.article>
             ))}
          </div>
       </motion.div>
    </section>

    {/* Demo Section */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-label="Product Demo" 
      className="py-20 px-6 max-w-5xl mx-auto relative z-10"
    >
       <motion.div variants={fadeUpBlurVariant} className="text-center mb-12">
          <h2 className="font-heading text-5xl md:text-6xl text-[#e5e6e6]">See how your outbound actually performs</h2>
       </motion.div>
       <motion.button variants={fadeUpBlurVariant} aria-label="Play product demo video" className="w-full aspect-video glass-card border border-[#e5e6e6]/20 relative flex items-center justify-center group cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-surface">
          <div aria-hidden="true" className="absolute inset-0 bg-[#0a0a0a] transition-all duration-700 group-hover:bg-[#111]" />
          {/* Fake UI mockup overlay to act as a video thumbnail */}
          <div aria-hidden="true" className="absolute inset-4 border border-[#e5e6e6]/10 rounded-2xl bg-[#e5e6e6]/[0.03] flex flex-col overflow-hidden opacity-70 group-hover:opacity-90 transition-opacity">
            <div className="h-8 border-b border-[#e5e6e6]/10 bg-[#e5e6e6]/[0.03] flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e5e6e6]/50"/>
              <div className="w-2 h-2 rounded-full bg-[#e5e6e6]/50"/>
              <div className="w-2 h-2 rounded-full bg-[#e5e6e6]/50"/>
            </div>
            <div className="flex-1 p-8 flex gap-8">
               <div className="w-1/3 space-y-4">
                 <div className="h-4 bg-[#e5e6e6]/10 rounded w-3/4"/>
                 <div className="h-4 bg-[#e5e6e6]/10 rounded w-1/2"/>
                 <div className="h-20 bg-[#e5e6e6]/10 rounded w-full mt-8"/>
               </div>
               <div className="w-2/3 bg-[#e5e6e6]/10 rounded"/>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" aria-hidden="true" />
          <div className="relative z-10 w-24 h-24 rounded-full bg-[#e5e6e6]/20 backdrop-blur-md border border-[#e5e6e6]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#e5e6e6]/30 transition-all duration-500">
             <Play aria-hidden="true" className="w-10 h-10 text-[#e5e6e6] ml-2" />
          </div>
       </motion.button>
    </motion.section>

    {/* Final CTA */}
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainerVariant}
      aria-label="Get Started" 
      className="glass-card p-16 md:p-24 flex flex-col items-center relative overflow-hidden group border-brand/30 text-center mx-6 md:mx-auto max-w-5xl my-32"
    >
       <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />
       
       <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-4xl md:text-6xl text-[#e5e6e6] mb-8 max-w-4xl leading-[1.05] relative z-10">
          Stop fighting your system. <br/>
          <span className="text-brand block mt-4">Start hitting your number.</span>
       </motion.h2>
       
       <motion.div variants={fadeUpBlurVariant} className="flex flex-col md:flex-row gap-6 md:gap-12 mb-16 mt-4 text-left justify-center w-full relative z-10">
          <ul className="space-y-4 font-body text-[#e5e6e6]/90 text-lg">
             <li className="flex items-center gap-3"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand"/> Scale outbound safely</li>
             <li className="flex items-center gap-3"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand"/> Protect your domain reputation</li>
             <li className="flex items-center gap-3"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand"/> Improve inbox placement consistently</li>
          </ul>
       </motion.div>

       <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
          <motion.button 
            onClick={onCTA}
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.98 }}
            className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]"
          >
             Start Free Trial
          </motion.button>
          <motion.button 
            onClick={onCTA}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(229,230,230,0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-10 py-5 rounded-full transition-all duration-300 min-h-[44px]"
          >
             Talk to Sales
          </motion.button>
       </motion.div>
    </motion.section>
  </div>
);
};
