import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant } from '../lib/animations';
import { SEO } from '../components/SEO';

export const PricingView = ({ navigateTo, onCTA }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zigtex Pricing",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "499",
      "priceCurrency": "USD",
      "offerCount": "3"
    }
  };

  const featureComparison = [
    { capability: 'Platform Access', solo: 'Yes', growth: 'Yes', scale: 'Yes' },
    { capability: 'Seats Included', solo: '1', growth: '1–3', scale: '1–5' },
    { capability: 'GTM-Aligned Leads', solo: 'Basic', growth: '300 / mo', scale: '500 / mo' },
    { capability: 'SDR Support', solo: 'Self-Serve', growth: 'Shared', scale: 'Dedicated' },
    { capability: 'Technical Support', solo: 'Email', growth: 'Standard', scale: 'Priority' },
    { capability: 'Account Management', solo: 'No', scale: 'Dedicated' },
    { capability: 'BANT Qualified Meetings', solo: 'Self-Serve', growth: 'Performance-Based', scale: '12 / Year (Guaranteed)' },
  ];

  const renderTableCell = (value, isScale = false) => {
    if (value === 'Yes') return <span className={`font-bold ${isScale ? 'text-brand' : 'text-brand-dark'}`}>Yes</span>;
    if (value === 'No') return <span className="text-[#e5e6e6]/50 font-bold" aria-label="Not available">-</span>;
    return <span className="text-[#e5e6e6]">{value}</span>;
  };

  return (
    <div className="w-full relative py-32 px-6 max-w-6xl mx-auto pb-32">
      <SEO 
        title="Pricing Plans" 
        description="Choose the right plan for your outbound needs. From free trials for early-stage testing to enterprise infrastructure for scale."
        canonical="https://zigtex.com/pricing"
        schema={schema}
      />
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainerVariant}
        aria-labelledby="pricing-heading" 
        className="text-center mb-16 pt-8"
      >
        <motion.div variants={fadeUpBlurVariant} className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6">Plans</motion.div>
        <motion.h1 variants={fadeUpBlurVariant} id="pricing-heading" className="font-heading text-5xl md:text-7xl text-[#e5e6e6] mb-8 leading-[0.95]">Pricing built for <br/><span className="text-brand block mt-4">predictable outcomes.</span></motion.h1>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-lg md:text-xl text-[#e5e6e6]/90 max-w-4xl mx-auto mb-10 leading-relaxed">
          From self-serve automation to fully managed execution: Zigtex scales your pipeline with zero ramp-up time.
        </motion.p>
        
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button onClick={onCTA} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]">
            Start Free Trial
          </button>
          <button onClick={onCTA} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-8 py-4 rounded-full hover:bg-[#e5e6e6]/10 hover:border-[#e5e6e6]/50 transition-all duration-300 min-h-[44px]">
            Book a Demo
          </button>
        </motion.div>

        {/* Monthly/Annual Toggle */}
        <motion.div variants={fadeUpBlurVariant} className="inline-flex items-center glass-card p-1.5 border-[#e5e6e6]/20" role="group" aria-label="Billing frequency">
          <button 
             aria-pressed={!isAnnual}
             onClick={() => setIsAnnual(false)} 
             className={`px-8 py-3 rounded-full font-body text-[11px] font-bold uppercase tracking-[0.15em] transition-all min-h-[44px] ${!isAnnual ? 'bg-[#e5e6e6] text-[#020108]' : 'text-[#e5e6e6]/80 hover:text-[#e5e6e6]'}`}
           >
             Monthly
           </button>
           <button 
             aria-pressed={isAnnual}
             onClick={() => setIsAnnual(true)} 
             className={`px-8 py-3 rounded-full font-body text-[11px] font-bold uppercase tracking-[0.15em] transition-all min-h-[44px] ${isAnnual ? 'bg-[#e5e6e6] text-[#020108]' : 'text-[#e5e6e6]/80 hover:text-[#e5e6e6]'}`}
           >
             Annually
           </button>
        </motion.div>
      </motion.section>

      {/* Pricing Cards */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Pricing Tiers" 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-40"
      >
        {/* Solo */}
        <motion.article variants={fadeUpBlurVariant} className="glass-card p-10 flex flex-col hover:border-brand/30 transition-colors border-white/10">
          <h3 className="font-heading text-4xl text-[#e5e6e6] mb-3">Solo</h3>
          <p className="font-body text-sm md:text-base text-[#e5e6e6]/90 mb-8 h-12">Built for founders who handle the hunt themselves.</p>
          <div className="font-body text-6xl font-light tracking-tight text-[#e5e6e6] mb-8">${isAnnual ? '59' : '79'}<span className="text-xl text-[#e5e6e6]/70 font-normal">/mo</span></div>
          <ul className="space-y-4 mb-10 flex-1" aria-label="Solo features">
            <li className="flex items-start gap-3 font-body text-sm md:text-base text-[#e5e6e6]/90"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> Full Platform Access</li>
            <li className="flex items-start gap-3 font-body text-sm md:text-base text-[#e5e6e6]/90"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> 1 Seat Included</li>
            <li className="flex items-start gap-3 font-body text-sm md:text-base text-[#e5e6e6]/90"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> Core Sales Workspace</li>
          </ul>
          <div className="bg-[#e5e6e6]/5 rounded-2xl p-6 mb-8 border border-[#e5e6e6]/10 text-center">
            <div className="font-body text-xs text-[#e5e6e6]/50">Additional seats - $15/mo</div>
          </div>
          <button onClick={onCTA} className="w-full py-4 rounded-full border border-[#e5e6e6]/30 font-body text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#e5e6e6]/10 transition-colors min-h-[44px]">Get Started</button>
        </motion.article>

        {/* Growth */}
        <motion.article variants={fadeUpBlurVariant} className="glass-card p-10 flex flex-col border-brand-dark/50 relative transition-all group overflow-hidden bg-brand-dark/5">
          <div aria-hidden="true" className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-dark to-brand"></div>
          <h3 className="font-heading text-4xl text-[#e5e6e6] mb-3 mt-2">Growth</h3>
          <p className="font-body text-sm md:text-base text-brand mb-8 h-12 font-medium">The perfect balance of technology and talent.</p>
          <div className="font-body text-6xl font-light tracking-tight text-[#e5e6e6] mb-8">${isAnnual ? '119' : '149'}<span className="text-xl text-[#e5e6e6]/70 font-normal">/mo</span></div>
          <ul className="space-y-4 mb-10 flex-1" aria-label="Growth features">
            <li className="flex items-start gap-3 font-body text-sm md:text-base text-[#e5e6e6]/90"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> 1–3 Sales Seats</li>
            <li className="flex items-start gap-3 font-body text-sm md:text-base font-medium text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> 300 Fresh Target Leads / mo</li>
            <li className="flex items-start gap-3 font-body text-sm md:text-base font-medium text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> Managed SDR Support</li>
            <li className="flex items-start gap-3 font-body text-sm md:text-base text-[#e5e6e6]/90"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> Primary Support</li>
          </ul>
          <div className="bg-brand/10 border border-brand/30 rounded-2xl p-6 mb-8 text-center">
            <div className="font-body text-xs text-brand">Additional seats - $15/mo</div>
          </div>
          <button onClick={onCTA} className="w-full py-4 rounded-full bg-[#e5e6e6] text-[#020108] font-body text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#e5e6e6]/90 transition-colors shadow-[0_0_20px_rgba(229,230,230,0.15)] min-h-[44px]">Scale Outreach</button>
        </motion.article>

        {/* Scale (Most Popular) */}
        <motion.article variants={fadeUpBlurVariant} className="glass-card p-10 flex flex-col border-brand/50 relative transform md:-translate-y-4 bg-surface">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-[#020108] px-5 py-1.5 rounded-full font-body text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(59,130,246,0.6)]">Elite Choice</div>
          <h3 className="font-heading text-4xl text-[#e5e6e6] mb-3 mt-2">Scale</h3>
          <p className="font-body text-sm md:text-base text-brand mb-8 h-12 font-bold italic">The Done-For-You Sales Engine. <br/>We fill the calendar, you close the deals.</p>
          <div className="font-body text-6xl font-light tracking-tight text-[#e5e6e6] mb-8">${isAnnual ? '199' : '299'}<span className="text-xl text-[#e5e6e6]/70 font-normal">/mo</span></div>
          <ul className="space-y-4 mb-10 flex-1" aria-label="Scale features">
            <li className="flex items-start gap-3 font-body text-sm md:text-base text-[#e5e6e6]/90 font-bold"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> Up to 5 High-Volume Seats</li>
            <li className="flex items-start gap-3 font-body text-sm md:text-base font-bold text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> 500 Verified Leads / mo</li>
            <li className="flex items-start gap-3 font-body text-sm md:text-base font-bold text-[#e5e6e6]"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> Dedicated Revenue SDR</li>
            <li className="flex items-start gap-3 font-body text-sm md:text-base text-[#e5e6e6]/90"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> Full Pipeline Management</li>
            <li className="flex items-start gap-3 font-body text-sm md:text-base text-[#e5e6e6]/90"><CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5"/> Weekly GTM Strategy Syncs</li>
            {isAnnual && (
              <li className="flex items-start gap-3 font-body text-sm font-bold text-brand pt-2 border-t border-brand/20">
                <CheckCircle2 aria-hidden="true" className="w-5 h-5 shrink-0 mt-0.5 text-brand"/> 12 BANT Qualified Meetings Guaranteed
              </li>
            )}
          </ul>
          <div className="bg-brand/20 border border-brand/40 rounded-2xl p-6 mb-8 text-center">
            <div className="font-body text-xs text-brand font-bold">Additional seats - $15/mo</div>
          </div>
          <button onClick={onCTA} className="w-full py-4 rounded-full bg-brand text-[#020108] font-body text-[11px] uppercase tracking-[0.2em] font-bold hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(59,130,246,0.4)] min-h-[44px]">Start Hitting My Number</button>
        </motion.article>
      </motion.section>

      {/* Feature Comparison Table */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Feature Comparison" 
        className="mb-40"
      >
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-4xl md:text-5xl text-[#e5e6e6] text-center mb-12">Feature Comparison</motion.h2>
        <motion.div variants={fadeUpBlurVariant} className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-[#e5e6e6]/20 bg-[#e5e6e6]/[0.05]">
                  <th scope="col" className="p-6 font-body text-sm uppercase tracking-[0.2em] text-[#e5e6e6] font-bold w-1/3">Capability</th>
                  <th scope="col" className="p-6 font-body text-sm uppercase tracking-[0.2em] text-[#e5e6e6] font-bold">Solo</th>
                  <th scope="col" className="p-6 font-body text-sm uppercase tracking-[0.2em] text-brand font-bold">Growth</th>
                  <th scope="col" className="p-6 font-body text-sm uppercase tracking-[0.2em] text-brand-dark font-bold">Scale</th>
                </tr>
              </thead>
              <tbody className="font-body text-base">
                {featureComparison.map((row, i) => (
                  <tr key={i} className="border-b border-[#e5e6e6]/10 hover:bg-[#e5e6e6]/[0.03] transition-colors">
                    <th scope="row" className="p-6 text-[#e5e6e6] font-medium">{row.capability}</th>
                    <td className="p-6">{renderTableCell(row.solo)}</td>
                    <td className="p-6">{renderTableCell(row.growth)}</td>
                    <td className="p-6">{renderTableCell(row.scale, true)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.section>

      {/* Risk Reversal Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Risk Reversal" 
        className="mb-40 py-24 border-y border-[#e5e6e6]/10 text-center relative overflow-hidden bg-[#e5e6e6]/[0.02]"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
        <motion.div variants={fadeUpBlurVariant}>
          <ShieldCheck aria-hidden="true" className="w-20 h-20 text-[#e5e6e6] mx-auto mb-10 opacity-90" />
        </motion.div>
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-8 font-bold tracking-tight leading-[1.1]">Outbound shouldn’t cost <br/>your domain reputation.</motion.h2>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 max-w-2xl mx-auto mb-14 leading-relaxed">
          Zigtex is built to protect <strong>how you send</strong>, not just increase how much you send.
        </motion.p>
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex items-center gap-3 font-body text-sm font-bold text-[#e5e6e6] uppercase tracking-widest"><div aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-brand"/> Prevent spam filtering</div>
          <div className="flex items-center gap-3 font-body text-sm font-bold text-[#e5e6e6] uppercase tracking-widest"><div aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-brand-dark"/> Reduce bounce damage</div>
          <div className="flex items-center gap-3 font-body text-sm font-bold text-[#e5e6e6] uppercase tracking-widest"><div aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-brand"/> Maintain long-term health</div>
        </motion.div>
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
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-5xl md:text-7xl text-[#e5e6e6] mb-8 max-w-4xl leading-[1.05] relative z-10">
          Start small. Scale safely. <br/>
          <span className="text-brand block mt-4">Stay in the inbox.</span>
        </motion.h2>
        
        <motion.p variants={fadeUpBlurVariant} className="font-body text-lg md:text-xl text-[#e5e6e6]/90 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
          Zigtex gives you the infrastructure to grow outbound without risking deliverability.
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
};
