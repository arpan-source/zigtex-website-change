import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Server, Zap, Sliders, Layers, Network, LayoutDashboard, Briefcase, CheckCircle2 
} from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant } from '../lib/animations';
import { SEO } from '../components/SEO';

const StackingCard = ({ card, index, onCTA }) => {
  const containerRef = useRef(null);
  
  // We want to scale the card down slightly as it's being overlapped by the next card
  // The offset ["start start", "end start"] tracks the card from when it hits the top until it would naturally leave
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scaling and opacity for the stacking effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);
  // Slight blur as they go back in the stack
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(2px)"]);

  return (
    <div 
      ref={containerRef} 
      className="h-[140vh] relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none px-6">
        <motion.article 
          style={{ 
            scale,
            opacity,
            filter,
            zIndex: index,
            // Add a very subtle Y-offset for stacking visual depth at the center
            y: index * -8
          }}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUpBlurVariant}
          className={`pointer-events-auto glass-card p-8 md:p-14 flex flex-col md:flex-row gap-8 md:gap-16 items-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] border border-brand/20 bg-surface/95 max-w-5xl w-full mx-auto relative overflow-hidden`}
        >
          {/* Subtle background glow that matches the card color */}
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none`} />

          {/* Left Column: Content */}
          <div className="flex-[1.2] w-full space-y-6 relative z-10">
            <div className="font-body text-[10px] uppercase tracking-[0.4em] font-bold text-brand flex items-center gap-4">
              <span aria-hidden="true" className="w-12 h-[1px] bg-brand/40"></span>
              {card.label}
            </div>
            <h2 className="font-heading text-3xl md:text-5xl text-[#e5e6e6] leading-[1.05] tracking-tight">{card.title}</h2>
            <ul className="space-y-4 pt-2">
              {card.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4 font-body text-sm md:text-base text-[#e5e6e6]/80 leading-relaxed group/li">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0 shadow-[0_0_10px_currentColor]" />
                  {bullet}
                </li>
              ))}
            </ul>
            {card.cta && (
              <div className="pt-6">
                <button onClick={onCTA} className="px-10 py-5 rounded-full bg-[#e5e6e6] text-[#020108] font-body text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-brand hover:text-[#e5e6e6] transition-all duration-500 shadow-[0_0_30px_rgba(229,230,230,0.1)] min-h-[44px]">
                  {card.cta}
                </button>
              </div>
            )}
          </div>
          
          {/* Right Column: Visual & Observation */}
          <div className="flex-1 w-full flex flex-col items-center md:items-end justify-center relative z-10 mt-6 md:mt-0">
            <div aria-hidden="true" className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] bg-brand/5 flex items-center justify-center mb-10 border border-brand/20 relative group-hover:scale-110 transition-transform duration-700">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.4),transparent_60%)] opacity-40" />
                <card.icon className="w-12 h-12 md:w-16 md:h-16 text-brand relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
            </div>
            <div className="w-full bg-brand-dark/10 border border-[#e5e6e6]/5 p-8 rounded-[2rem] backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-brand/40 to-transparent" />
              <h3 className="font-heading text-lg md:text-xl text-[#e5e6e6] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                {card.whyTitle}
              </h3>
              <p className="font-body text-sm text-[#e5e6e6]/70 leading-relaxed italic">
                "{card.why}"
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export const ProductView = ({ navigateTo, onCTA }) => {
  const productCards = [
    {
      id: '01',
      label: 'Inbox Protection',
      title: 'Stop Burning Domains. Fast.',
      bullets: [
        'Inbox placement that actually works.',
        'We handle the DMARC/SPF/DKIM heavy lifting.',
        'Clean, direct-to-domain sending.',
        'Zero reliance on shared relays or garbage IPs.'
      ],
      whyTitle: 'The SDR Point of View',
      why: 'If you aren’t in the primary inbox, you aren’t hitting your number.',
      icon: Server,
      color: 'klein'
    },
    {
      id: '02',
      label: 'The Hunt Team',
      title: 'Hunters Ready to Dial.',
      bullets: [
        'Elite human reps who know how to hunt.',
        'Managed sequences and personalized follow-up.',
        'Real-time strategy tweaks based on results.',
        'No hiring friction and zero ramp-up time.'
      ],
      whyTitle: 'The Sales View',
      why: 'Skip the 3-month onboarding. Start getting qualified meetings today.',
      icon: Zap,
      color: 'slate'
    },
    {
      id: '03',
      label: 'Smart Distribution',
      title: 'High Volume without the Spam Tab.',
      bullets: [
        'Dynamic quota management across multiple reps',
        'Proprietary vConnect IQ lead distribution',
        'Scalable pipeline generation without technical debt',
        'Enterprise-grade workspace control'
      ],
      whyTitle: 'The RevOps View',
      why: 'Balance your team’s volume without manually managing spreadsheet chaos.',
      icon: Sliders,
      color: 'klein'
    },
    {
      id: '04',
      label: 'Signal Intelligence',
      title: 'Protect Your Sender Score Automatically.',
      bullets: [
        'Real-time bounce memory across all campaigns',
        'Automatic suppression of risky prospects',
        'Proactive domain health monitoring',
        'Built-in "Anti-Spam" logic for your copy'
      ],
      whyTitle: 'The SDR View',
      why: 'Avoid the "Bad Data" trap that kills your sender reputation.',
      icon: Layers,
      color: 'slate'
    },
    {
      id: '05',
      label: 'Revenue Operations',
      title: 'Organize Your Sales Motion.',
      bullets: [
        'Individual → Team → Department Hierarchy',
        'Bird’s eye view for Sales VPs and VPs of GTM',
        'Full administrative control over campaign behavior',
        'Built for high-growth B2B organizations'
      ],
      whyTitle: 'The Leadership View',
      why: 'Scaling outbound shouldn’t feel like managing a digital sweatshop.',
      icon: Network,
      color: 'klein'
    },
    {
      id: '06',
      label: 'Unified Control Center',
      title: 'Full Pipeline Visibility.',
      bullets: [
        'Live reply tracking and sentiment analysis',
        'Transparent deliverability audit logs',
        'Cross-account campaign reporting',
        'Real-time ROI dashboard'
      ],
      whyTitle: 'The Execution View',
      why: 'Stop guessing why your campaigns are flat. See the data, fix the leak.',
      icon: LayoutDashboard,
      color: 'slate'
    },
    {
      id: '07',
      label: 'The Zigtex Edge',
      title: 'Managed Pipeline Lever.',
      bullets: [
        'vConnect IQ technology powering every dial.',
        'A dedicated hunt team. No excuses.',
        'Direct connection to BANT qualified leads.',
        'Infrastructure built for the primary inbox.'
      ],
      whyTitle: 'The Outcome',
      why: '400+ clients hitting quota with a system they actually trust.',
      cta: 'Start Booking Meetings',
      icon: Briefcase,
      color: 'klein'
    }
  ];

  return (
    <div className="w-full relative pt-32 px-6 max-w-6xl mx-auto pb-32">
      <SEO 
        title="The Infrastructure" 
        description="Deep dive into Zigtex's deliverability-first architecture. Native email sending, smart quota distribution, and bounce memory."
        canonical="https://zigtex.com/product"
      />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainerVariant}
        aria-labelledby="product-heading" 
        className="text-center mb-32 max-w-5xl mx-auto pt-8"
      >
        <motion.div variants={fadeUpBlurVariant} className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6">Pipeline Infrastructure</motion.div>
        <motion.h1 variants={fadeUpBlurVariant} id="product-heading" className="font-heading text-6xl md:text-8xl text-[#e5e6e6] mb-10 leading-[0.95]">
          Engineering the <br/>
          <span className="text-brand block mt-4">Perfect Pipeline.</span>
        </motion.h1>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl md:text-3xl text-[#e5e6e6]/70 max-w-3xl mx-auto leading-tight mb-14 font-medium">
          Forget technical debt and hiring friction. We provide the infrastructure and the expert hunter team to keep your <span className="text-[#e5e6e6]">calendar full.</span>
        </motion.p>
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onCTA} className="font-body w-full sm:w-auto text-[14px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]">
            Get 12 Qualified Meetings
          </button>
          <button onClick={onCTA} className="font-body w-full sm:w-auto text-[14px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/10 hover:border-[#e5e6e6]/50 transition-all duration-300 min-h-[44px]">
            See How It Works
          </button>
        </motion.div>
      </motion.section>

      {/* Stacking Cards Section */}
      <section aria-label="Product Features" className="relative pb-32">
        <div className="flex flex-col">
          {productCards.map((card, i) => (
            <StackingCard 
              key={card.id} 
              card={card} 
              index={i} 
              onCTA={onCTA} 
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="How It Works" 
        className="pt-32 pb-40 border-t border-[#e5e6e6]/10 relative z-10"
      >
        <motion.div variants={fadeUpBlurVariant} className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-6">System meets Service. <br/><span className="text-brand block mt-3">The Zigtex Process.</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
           <div aria-hidden="true" className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-brand-dark/20 via-brand/60 to-brand-dark/20 pointer-events-none" />
           {[
             { step: '01', title: 'Infra Setup', desc: 'We configure the domains and automation workflows.' },
             { step: '02', title: 'Strategy', desc: 'Our experts map your ICP and target accounts.' },
             { step: '03', title: 'Execution', desc: 'In-house SDRs manage the outbound outreach.' },
             { step: '04', title: 'Outcome', desc: 'Qualified meetings land on your calendar.' }
           ].map((s, i) => (
             <motion.article variants={fadeUpBlurVariant} key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-surface border border-[#e5e6e6]/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,0,0,0.6)] group-hover:border-brand/60 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500">
                   <span className="font-heading text-3xl text-[#e5e6e6]/90 group-hover:text-brand transition-colors">{s.step}</span>
                </div>
                <h3 className="font-body font-bold text-xl text-[#e5e6e6] mb-3 tracking-wide">{s.title}</h3>
                <p className="font-body text-sm text-[#e5e6e6]/80 max-w-[200px] leading-relaxed">{s.desc}</p>
             </motion.article>
           ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Get Started" 
        className="glass-card p-16 md:p-24 flex flex-col items-center relative overflow-hidden group klein-glow-strong border-brand/30 text-center mx-6 md:mx-auto max-w-5xl my-32"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-4xl md:text-6xl text-[#e5e6e6] mb-8 max-w-4xl leading-[1.05] relative z-10">
          Control your outbound. Protect your domain. <br/>
          <span className="text-brand block mt-4">Scale with confidence.</span>
        </motion.h2>
        
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col md:flex-row gap-6 md:gap-12 mb-16 mt-4 text-left justify-center w-full relative z-10">
           <div className="flex items-center justify-center gap-3 font-body text-sm md:text-xs uppercase tracking-[0.2em] font-bold text-[#e5e6e6]">
             <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0"/> Improve inbox placement
           </div>
           <div className="flex items-center justify-center gap-3 font-body text-sm md:text-xs uppercase tracking-[0.2em] font-bold text-[#e5e6e6]">
             <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0"/> Reduce bounce rates
           </div>
           <div className="flex items-center justify-center gap-3 font-body text-sm md:text-xs uppercase tracking-[0.2em] font-bold text-[#e5e6e6]">
             <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0"/> Increase reply performance
           </div>
        </motion.div>

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
