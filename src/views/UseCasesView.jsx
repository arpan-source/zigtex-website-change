import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Building2, Users, Target, Briefcase, ShieldCheck, CheckCircle2, ArrowRight,
  Rocket, Cloud, Globe, Zap, Sliders, TrendingUp, Presentation,
  ChevronUp, ChevronDown, AlertTriangle, XCircle, Quote
} from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant } from '../lib/animations';
import { SEO } from '../components/SEO';

export const UseCasesView = ({ navigateTo, onCTA }) => {
  const [expandedStudy, setExpandedStudy] = useState(null);

  const toggleStudy = (id) => {
    setExpandedStudy(expandedStudy === id ? null : id);
  };

  const caseStudies = [
    {
      id: 1,
      title: "Fixing Deliverability Before Scaling",
      subtitle: "Case Study 01",
      context: "A B2B SaaS team was sending high-volume outbound with decent targeting, but results were inconsistent. Open rates were fluctuating and replies were dropping over time. They assumed it was a copy problem. It wasn’t.",
      happening: [
        "Sending spikes triggering filters",
        "Multiple accounts behaving identically",
        "No control over distribution",
        "Repeated sending to risky addresses"
      ],
      quote: "Looks fine on the surface, broken underneath",
      changed: [
        "Introduced controlled sending distribution",
        "Balanced volume across accounts",
        "Activated bounce memory system",
        "Cleaned sending patterns to mimic natural behavior"
      ],
      results: [
        "Inbox placement improved significantly within weeks",
        "Bounce rates dropped consistently",
        "Reply rates stabilized across campaigns"
      ],
      founderTake: "Most teams try to fix performance by rewriting emails. This team didn’t need better copy. They needed a system that didn’t sabotage them.",
      color: "klein"
    },
    {
      id: 2,
      title: "Scaling Without Burning Domains",
      subtitle: "Case Study 02",
      context: "An outbound agency managing multiple clients was hitting a wall. Campaigns worked initially, then performance dropped and domains started degrading. They were scaling volume the only way they knew: \"Send more from the same setup.\"",
      happening: [
        "Overloading individual accounts",
        "No separation between client infrastructures",
        "No visibility into domain health",
        "High-risk sending patterns repeating"
      ],
      changed: [
        "Created isolated sending infrastructure per client",
        "Implemented quota distribution across accounts",
        "Added domain-level monitoring",
        "Controlled ramp-up for volume scaling"
      ],
      results: [
        "Stable performance across client campaigns",
        "Reduced domain damage risk",
        "Ability to scale outbound without resets"
      ],
      founderTake: "Scaling outbound without infrastructure is like speeding with no brakes. You don’t notice the problem until it’s too late.",
      color: "slate"
    },
    {
      id: 3,
      title: "Founder-Led Outbound That Actually Worked",
      subtitle: "Case Study 03",
      context: "A founder running outbound personally: No SDR team, limited time, needed consistent pipeline. They had tried tools, templates, and sequences. Nothing stuck.",
      happening: [
        "Inconsistent sending behavior",
        "No system to manage volume",
        "Deliverability degrading slowly",
        "No feedback loop"
      ],
      changed: [
        "Set up structured sending system",
        "Automated distribution of volume",
        "Enabled bounce-aware adjustments",
        "Simplified campaign control"
      ],
      results: [
        "Predictable outbound performance",
        "Consistent reply flow",
        "Reduced time spent managing campaigns"
      ],
      founderTake: "Founders don’t fail at outbound because they can’t sell. They fail because they don’t have infrastructure.",
      color: "klein"
    }
  ];

  const roleSolutions = [
    {
      id: 'sdr',
      role: 'For Individual SDRs',
      title: 'Hit Your Number, Faster.',
      desc: 'Stop fighting with deliverability and focus on building rapport. Our platform handles the "dirty work" of inbox placement.',
      icon: TrendingUp,
      color: 'klein',
      bullets: [
        '99.9% Inbox placement on all sequences',
        'Auto-distribution across multiple accounts',
        'Bounce protection that keeps you out of Spam',
        'Spend 80% more time on building pipeline'
      ],
      outcomes: [
        'Higher reply-to-meeting conversion',
        'Consistent month-over-month performance',
        'Zero manual domain warmups'
      ]
    },
    {
      id: 'founders',
      role: 'For Founders',
      title: 'Your Hunt Team, Out of the Box.',
      desc: 'Build your initial pipeline without the overhead of hiring, training, or managing SDRs. We handle the dials so you can handle the demos.',
      icon: Rocket,
      color: 'slate',
      bullets: [
        'Proprietary vConnect IQ inbox placement',
        'Trained SDRs managing your daily sequences',
        'Direct connection to qualified decision makers',
        'Full transparency into your revenue pipeline'
      ],
      outcomes: [
        'Qualified meetings on your calendar',
        'Zero ramp time or hiring risk',
        'Faster path to Product-Market Fit'
      ]
    },
    {
      id: 'b2b',
      role: 'For Sales Leaders',
      title: 'Scale Pipeline, Not Headcount.',
      desc: 'Standardize outbound across your entire org without the technical debt of managing dozens of accounts.',
      icon: Building2,
      color: 'klein',
      bullets: [
        'Centralized revenue operations dashboard',
        'Clear visibility into team performance',
        'Standardized playbooks across all reps',
        'Enterprise-grade deliverability protection'
      ],
      outcomes: [
        'Predictable pipeline generation',
        'Optimal sales stack ROI',
        'Unified outbound execution'
      ]
    }
  ];

  const businessSolutions = [
    {
      id: 'saas',
      title: 'For SaaS Companies',
      subtitle: 'Scale outbound without breaking deliverability.',
      icon: Cloud,
      color: 'klein',
      bullets: [
        'Safely increase sending volume',
        'Protect domain reputation long-term',
        'Maintain consistent inbox placement',
        'Support rapid growth without risk'
      ]
    },
    {
      id: 'agencies',
      title: 'For Agencies',
      subtitle: 'Manage multiple clients without chaos.',
      icon: Users,
      color: 'slate',
      bullets: [
        'Separate infrastructure per client',
        'Centralized visibility across accounts',
        'Control sending behavior at scale',
        'Reduce risk across all client campaigns'
      ]
    },
    {
      id: 'enterprise',
      title: 'For Enterprises',
      subtitle: 'Outbound infrastructure at organizational scale.',
      icon: Globe,
      color: 'klein',
      bullets: [
        'Multi-level hierarchy and permissions',
        'Cross-team visibility and reporting',
        'Controlled sending across departments',
        'Built for compliance and consistency'
      ]
    }
  ];

  const trustCards = [
    {
      title: 'Deliverability-first foundation',
      icon: ShieldCheck,
      color: 'klein',
      bullets: [
        'Built to prioritize inbox placement',
        'Prevents damage before it happens'
      ]
    },
    {
      title: 'Adaptive sending system',
      icon: Zap,
      color: 'slate',
      bullets: [
        'Adjusts to account health and behavior',
        'Maintains consistency across campaigns'
      ]
    },
    {
      title: 'Centralized control',
      icon: Sliders,
      color: 'klein',
      bullets: [
        'One system to manage all outbound',
        'Full visibility across users and teams'
      ]
    }
  ];

  const workflowSteps = [
    { num: '01', title: 'Automation Setup', desc: 'We configure your high-placement infrastructure.' },
    { num: '02', title: 'Targeting & ICP', desc: 'Our experts identify and verify your ideal prospects.' },
    { num: '03', title: 'Expert Outreach', desc: 'Trained SDRs execute personalized campaigns.' },
    { num: '04', title: 'Booked Meetings', desc: 'Qualified prospects book directly on your calendar.' }
  ];

  // Horizontal Scroll Setup for the Timeline section
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start start", "end end"]
  });
  // Map scroll progress to horizontal translation
  // Framer Motion strictly requires matching units for text interpolation. Using pure percentages for stability.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div className="w-full relative pt-32 pb-32">
      <SEO 
        title="Use Cases & Case Studies" 
        description="See how SDRs, founders, and scaling teams use Zigtex to land in inboxes and grow their B2B operations."
        canonical="https://zigtex.com/use-cases"
      />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainerVariant}
        aria-labelledby="use-cases-hero" 
        className="text-center mb-32 max-w-5xl mx-auto pt-8 px-6"
      >
        <motion.div variants={fadeUpBlurVariant} className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6">Proof of Outcomes</motion.div>
        <motion.h1 variants={fadeUpBlurVariant} id="use-cases-hero" className="font-heading text-5xl md:text-7xl lg:text-8xl text-[#e5e6e6] mb-8 leading-[0.95]">
          Hitting Quota <br/>
          <span className="text-brand block mt-4">for 400+ Teams.</span>
        </motion.h1>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-lg md:text-xl text-[#e5e6e6]/90 max-w-3xl mx-auto leading-relaxed mb-12">
          Whether you’re a lean founder or a scaling sales team, Zigtex is the engine that keeps your pipeline moving while you focus on the demos.
        </motion.p>
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onCTA} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]">
            Start Free Trial
          </button>
          <button onClick={onCTA} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/10 hover:border-[#e5e6e6]/50 transition-all duration-300 min-h-[44px]">
            Book a Demo
          </button>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 overflow-hidden">
          {[
            { label: 'Clients Served', val: '400+' },
            { label: 'Technology', val: 'vConnect IQ' },
            { label: 'SDR Ramp Time', val: '0 Days' },
            { label: 'Transparency', val: '100%' }
          ].map((stat, i) => (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpBlurVariant}
              key={i} 
              className="glass-card p-8 text-center border-brand/10 hover:border-brand/30 transition-all group"
            >
              <div className="font-heading text-3xl md:text-5xl text-[#e5e6e6] mb-2 group-hover:text-brand transition-colors">{stat.val}</div>
              <div className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions by Role */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUpBlurVariant}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6]">Solutions by Role</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roleSolutions.map((role) => (
            <motion.article 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={fadeUpBlurVariant}
              key={role.id} 
              className="glass-card flex flex-col h-full border-brand/30 hover:border-brand/50 transition-colors bg-surface/80 overflow-hidden shadow-lg"
            >
              <div className="p-10 flex-1">
                 <div className="flex items-center gap-4 mb-8">
                   <div aria-hidden="true" className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                     <role.icon className="w-6 h-6 text-brand" />
                   </div>
                   <div className="font-body text-[11px] uppercase tracking-[0.2em] font-bold text-brand">
                     {role.role}
                   </div>
                 </div>
                 <h3 className="font-heading text-3xl text-[#e5e6e6] mb-3 leading-tight">{role.title}</h3>
                 <p className="font-body text-base text-[#e5e6e6]/80 mb-8 leading-relaxed">
                   {role.desc}
                 </p>
                 <ul className="space-y-4 mb-8">
                   {role.bullets.map((bullet, idx) => (
                     <li key={idx} className="flex items-start gap-4 font-body text-sm text-[#e5e6e6]/90">
                       <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0" />
                       {bullet}
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="bg-[#e5e6e6]/[0.03] border-t border-[#e5e6e6]/10 p-10 mt-auto">
                 <div className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/50 mb-5">Outcome</div>
                 <ul className="space-y-3">
                   {role.outcomes.map((outcome, idx) => (
                     <li key={idx} className="flex items-center gap-3 font-body font-medium text-sm text-[#e5e6e6]">
                       <div aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-brand" />
                       {outcome}
                     </li>
                   ))}
                 </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Solutions by Business Type */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUpBlurVariant}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6]">Solutions by Business Type</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessSolutions.map((biz) => (
             <motion.article 
               initial="hidden" 
               whileInView="visible" 
               viewport={{ once: true, margin: "-50px" }} 
               variants={fadeUpBlurVariant}
               key={biz.id} 
               className="glass-card p-10 flex flex-col hover:bg-[#e5e6e6]/[0.02] border-[#e5e6e6]/10 transition-colors"
             >
                <biz.icon aria-hidden="true" className="w-8 h-8 text-brand mb-6" />
                <div className={`font-body text-[10px] uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/50 mb-2`}>
                   {biz.title}
                </div>
                <h3 className="font-heading text-2xl text-[#e5e6e6] mb-8 leading-tight h-16">{biz.subtitle}</h3>
                <ul className="space-y-4">
                  {biz.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-body text-sm text-[#e5e6e6]/90">
                      <div aria-hidden="true" className="w-[4px] h-[4px] rounded-full bg-[#e5e6e6]/30 mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
             </motion.article>
          ))}
        </div>
      </section>

      {/* Why Zigtex? (Trust Cards) */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-0 relative z-20">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUpBlurVariant}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6]">Why Zigtex?</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustCards.map((trust, idx) => (
            <motion.article 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={fadeUpBlurVariant}
              key={idx} 
              className="p-10 rounded-3xl bg-[#e5e6e6]/[0.03] border border-[#e5e6e6]/10 shadow-lg hover:border-brand/40 transition-colors group"
            >
              <trust.icon aria-hidden="true" className="w-10 h-10 text-brand mb-6 opacity-90 group-hover:scale-110 transition-transform" />
              <h3 className="font-body font-bold text-lg md:text-xl text-[#e5e6e6] mb-6">{trust.title}</h3>
              <ul className="space-y-4">
                {trust.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-sm text-[#e5e6e6]/80 leading-relaxed">
                    <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Horizontal Scroll Timeline (Desktop) / Vertical (Mobile) */}
      <section className="relative w-full z-10 hidden md:block" ref={targetRef} style={{ height: "400vh" }}>
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <h2 className="font-heading text-5xl md:text-7xl text-[#e5e6e6] leading-tight mb-4">
                Simple to adopt. <br/>
                <span className="text-brand">Powerful in execution.</span>
              </h2>
              <p className="font-body text-xl text-[#e5e6e6]/60 border-l-2 border-brand pl-6 py-2">
                How Zigtex fits into your workflow
              </p>
            </motion.div>
          </div>
          
          <div className="relative w-full">
            {/* Background Decorative Rail */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/20 to-transparent -translate-y-1/2 z-0" />
            
            <motion.div 
              style={{ x }} 
              className="flex gap-12 px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2))] min-w-max relative z-10"
            >
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="w-[400px] lg:w-[550px] glass-card p-16 shrink-0 flex flex-col group hover:border-brand/50 transition-all duration-500 bg-surface/60 backdrop-blur-xl hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.2)]">
                  <div className="font-heading text-8xl text-[#e5e6e6]/5 mb-10 group-hover:text-brand/10 transition-colors flex items-baseline gap-2">
                    {step.num}
                    <div className="w-12 h-[2px] bg-brand/30 rounded-full" />
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl text-[#e5e6e6] leading-tight mt-auto group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <div className="mt-8 flex items-center gap-3 text-brand opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <span className="font-body text-[10px] uppercase tracking-widest font-bold">Deep Dive</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Workflow Timeline (Vertical Grid fallback) */}
      <section className="md:hidden max-w-7xl mx-auto px-6 mb-32 pt-16 border-t border-[#e5e6e6]/10">
        <div className="mb-12">
          <h2 className="font-heading text-4xl text-[#e5e6e6] mb-4">Simple to adopt. <span className="text-brand">Powerful in execution.</span></h2>
          <p className="font-body text-base text-[#e5e6e6]/80">How it fits into your workflow</p>
        </div>
        <div className="flex flex-col gap-6">
          {workflowSteps.map((step, idx) => (
            <motion.div key={idx} variants={fadeUpBlurVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card p-8 flex items-center gap-6">
              <div className="font-heading text-4xl text-[#e5e6e6]/20">{step.num}</div>
              <h3 className="font-body font-bold text-lg text-[#e5e6e6]">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Section (Newly Added here) */}
      <section id="case-studies" className="max-w-7xl mx-auto px-6 mb-32 relative z-10 pt-16 border-t border-[#e5e6e6]/10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUpBlurVariant}
          className="text-center mb-16"
        >
          <div className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4">Founder's POV</div>
          <h2 className="font-heading text-4xl md:text-6xl text-[#e5e6e6] leading-tight">This is what happens when <br/><span className="text-brand">outbound is built right.</span></h2>
          <p className="font-body text-base md:text-xl text-[#e5e6e6]/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Real results from fixing how emails are sent, not just what gets sent.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainerVariant}
          className="space-y-6"
        >
          {caseStudies.map((study) => (
            <motion.article 
              variants={fadeUpBlurVariant}
              key={study.id} 
              className={`glass-card transition-all duration-500 overflow-hidden ${expandedStudy === study.id ? "border-brand/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] bg-surface/90" : "hover:border-[#e5e6e6]/30 bg-surface/80"}`}
            >
              {/* Header (Always Visible) */}
              <button 
                onClick={() => toggleStudy(study.id)}
                aria-expanded={expandedStudy === study.id}
                aria-controls={`study-content-${study.id}`}
                id={`study-header-${study.id}`}
                className="w-full text-left p-8 md:p-12 flex items-center justify-between cursor-pointer group focus-visible:outline-none focus-visible:bg-[#e5e6e6]/5 min-h-[44px]"
              >
                <div>
                  <div className="font-body text-[11px] uppercase tracking-[0.3em] font-bold text-brand mb-4">{study.subtitle}</div>
                  <h2 className="font-heading text-3xl md:text-5xl text-[#e5e6e6] group-hover:text-[#e5e6e6]/80 transition-colors leading-tight">{study.title}</h2>
                </div>
                <div aria-hidden="true" className="w-14 h-14 rounded-full border border-[#e5e6e6]/20 flex items-center justify-center shrink-0 transition-all duration-500 bg-surface group-hover:bg-[#e5e6e6]/10">
                  {expandedStudy === study.id ? (
                    <ChevronUp className="w-7 h-7 text-brand" />
                  ) : (
                    <ChevronDown className="w-7 h-7 text-[#e5e6e6]/70 group-hover:text-[#e5e6e6] transition-colors" />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {expandedStudy === study.id && (
                <div 
                  id={`study-content-${study.id}`} 
                  role="region" 
                  aria-labelledby={`study-header-${study.id}`}
                  className="px-8 md:px-12 pb-12 pt-6 border-t border-[#e5e6e6]/10 animate-in fade-in slide-in-from-top-4 duration-500"
                >
                  <div className="mb-14 max-w-3xl">
                    <h3 className="font-body text-sm uppercase tracking-widest text-[#e5e6e6]/70 font-bold mb-5">Context</h3>
                    <p className="font-body text-xl text-[#e5e6e6] leading-relaxed">
                      {study.context}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
                    <div className="p-10 rounded-3xl bg-surface border border-red-500/20 relative overflow-hidden">
                      <div aria-hidden="true" className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                      <h3 className="font-body text-sm uppercase tracking-widest text-red-400 font-bold mb-8 flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5" /> What was actually happening
                      </h3>
                      <ul className="space-y-5">
                        {study.happening.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4 font-body text-base text-[#e5e6e6]/90 leading-relaxed">
                            <XCircle aria-hidden="true" className="w-5 h-5 text-red-400/70 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-10 rounded-3xl bg-brand/10 border border-brand/20 relative overflow-hidden">
                      <div aria-hidden="true" className="absolute top-0 right-0 w-40 h-40 bg-brand/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                      <h3 className="font-body text-sm uppercase tracking-widest text-brand font-bold mb-8 flex items-center gap-3">
                        <Sliders className="w-5 h-5" /> What we changed
                      </h3>
                      <ul className="space-y-5">
                        {study.changed.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4 font-body text-base text-[#e5e6e6]/90 leading-relaxed">
                            <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    <div className="md:col-span-2 p-10 bg-surface/60 rounded-3xl border border-[#e5e6e6]/10">
                      <h3 className="font-body text-sm uppercase tracking-widest text-[#10B981] font-bold mb-8 flex items-center gap-3">
                        <TrendingUp className="w-5 h-5" /> Results
                      </h3>
                      <ul className="space-y-5">
                        {study.results.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4 font-body text-base text-[#e5e6e6] font-medium leading-relaxed">
                            <div aria-hidden="true" className="w-2 h-2 rounded-full bg-[#10B981] shrink-0 mt-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="md:col-span-3 p-10 md:p-12 rounded-3xl bg-brand-dark/20 border border-white/10 relative shadow-inner">
                      <Quote aria-hidden="true" className="absolute top-8 left-8 w-20 h-20 text-[#e5e6e6]/5" />
                      <div className="relative z-10">
                        <h3 className="font-body text-[11px] uppercase tracking-widest text-[#e5e6e6]/60 font-bold mb-6">Founder Take</h3>
                        <p className="font-heading text-2xl md:text-3xl text-[#e5e6e6] leading-[1.3]">
                          "{study.founderTake}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Final CTA */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Get Started" 
        className="glass-card p-16 md:p-24 flex flex-col items-center relative overflow-hidden group klein-glow-strong border-brand/30 text-center mx-6 md:mx-auto max-w-5xl md:mb-0 mb-10"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />
        <motion.div variants={fadeUpBlurVariant} className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6">Execution is everything</motion.div>
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-4xl md:text-6xl text-[#e5e6e6] mb-8 max-w-4xl leading-[1.05] relative z-10">
          No matter how you sell, <br/>
          <span className="text-brand block mt-4">your emails need to land first.</span>
        </motion.h2>
        
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 max-w-2xl mx-auto mb-16 relative z-10 leading-relaxed">
          Zigtex ensures your outbound reaches inboxes, protects your domain, and scales with your growth.
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
