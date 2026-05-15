import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Star, PlayCircle, BookOpen, Clock, FileText, Calendar, ShieldCheck 
} from 'lucide-react';
import { fadeUpBlurVariant, staggerContainerVariant } from '../lib/animations';
import { sanityClient, isSanityConfigured, urlFor } from '../lib/sanity';
import { SEO } from '../components/SEO';

export const ResourcesView = ({ navigateTo, onCTA }) => {
  const [sanityPosts, setSanityPosts] = useState([]);
  const [sanityEvents, setSanityEvents] = useState([]);

  useEffect(() => {
    if (isSanityConfigured()) {
      sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) [0...3] {
        title,
        "desc": description,
        type,
        duration,
        color,
        "thumbnail": mainImage.asset->url
      }`).then(data => {
        if (data && data.length > 0) setSanityPosts(data);
      }).catch(err => console.error('Sanity fetch error (posts):', err));

      sanityClient.fetch(`*[_type == "event"] | order(publishedAt desc) {
        title,
        subtitle,
        items,
        color
      }`).then(data => {
        if (data && data.length > 0) setSanityEvents(data);
      }).catch(err => console.error('Sanity fetch error (events):', err));
    }
  }, []);

  const featuredResources = sanityPosts.length > 0 ? sanityPosts : [
    {
      title: 'Cold Email That Lands in the Inbox',
      desc: 'Practical framework to improve inbox placement and avoid spam filters.',
      type: 'Video',
      duration: '14:20',
      color: 'klein'
    },
    {
      title: 'Scaling Outreach Without Burning Domains',
      desc: 'How to increase volume safely while protecting sender reputation.',
      type: 'Playbook',
      duration: '8 min read',
      color: 'slate'
    },
    {
      title: 'Deliverability Fundamentals for B2B Teams',
      desc: 'Understand exactly how inbox placement algorithms actually work.',
      type: 'Workshop',
      duration: '45:00',
      color: 'klein'
    }
  ];

  const categories = sanityEvents.length > 0 ? sanityEvents : [
    {
      title: 'Deliverability Deep Dives',
      subtitle: 'Understand the system before you scale it',
      items: [
        'How inbox placement really works',
        'What causes emails to land in spam',
        'Domain reputation and how to protect it',
        'Sending behavior that triggers filters'
      ],
      color: 'klein'
    },
    {
      title: 'Cold Email Frameworks',
      subtitle: 'Structure outreach that gets replies',
      items: [
        'Writing cold emails that don’t look automated',
        'Sequencing strategies that feel natural',
        'Personalization at scale without losing quality',
        'Follow-up systems that convert'
      ],
      color: 'slate'
    },
    {
      title: 'Outbound Scaling Systems',
      subtitle: 'Grow volume without breaking deliverability',
      items: [
        'How to distribute sending across accounts',
        'Managing multiple domains safely',
        'Avoiding spikes in email activity',
        'Building sustainable outbound systems'
      ],
      color: 'slate'
    },
    {
      title: 'Playbooks and Guides',
      subtitle: 'Step-by-step execution',
      items: [
        'Cold email setup checklist',
        'Domain warm-up strategy',
        'Campaign launch playbook',
        'Deliverability audit framework'
      ],
      color: 'klein'
    }
  ];

  return (
    <div className="w-full relative pt-32 px-6 max-w-7xl mx-auto pb-32">
      <SEO 
        title="Resources & Playbooks" 
        description="Guides, frameworks, and insights on email deliverability, cold outreach, and scaling outbound without damaging your domain."
        canonical="https://zigtex.com/resources"
      />
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainerVariant}
        aria-labelledby="resources-heading" 
        className="text-center mb-20 max-w-4xl mx-auto pt-8"
      >
        <motion.div variants={fadeUpBlurVariant} className="font-body text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6">Knowledge Base</motion.div>
        <motion.h1 variants={fadeUpBlurVariant} id="resources-heading" className="font-heading text-6xl md:text-8xl text-[#e5e6e6] mb-8 leading-[0.95]">
          Learn how outbound <br/>
          <span className="text-brand block mt-4">actually works.</span>
        </motion.h1>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 max-w-3xl mx-auto leading-relaxed mb-12">
          Guides, frameworks, and insights on email deliverability, cold outreach, and scaling outbound without damaging your domain.
        </motion.p>
        <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onCTA} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]">
            Explore Resources
          </button>
          <button onClick={onCTA} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/10 hover:border-[#e5e6e6]/50 transition-all duration-300 min-h-[44px]">
            Book a Demo
          </button>
        </motion.div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={fadeUpBlurVariant}
        aria-label="Search and Filters" 
        className="max-w-5xl mx-auto mb-24 glass-card p-6 flex flex-col md:flex-row gap-6 items-center justify-between border-[#e5e6e6]/20 bg-surface/80"
      >
        <div className="relative w-full md:w-1/3">
          <Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#e5e6e6]/60" />
          <input 
            type="text" 
            aria-label="Search resources"
            placeholder="Search resources..." 
            className="w-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 rounded-full pl-12 pr-4 py-3 font-body text-base text-[#e5e6e6] placeholder:text-[#e5e6e6]/60 focus:outline-none focus:border-brand/60 focus:ring-2 focus:ring-brand transition-all min-h-[44px]"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <div className="flex items-center">
            <label htmlFor="topic-filter" className="font-body text-[11px] uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/70 mr-3 hidden md:block">Topic:</label>
            <select id="topic-filter" className="bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 rounded-full px-5 py-3 font-body text-base text-[#e5e6e6] focus:outline-none focus:border-brand/60 focus:ring-2 focus:ring-brand appearance-none cursor-pointer hover:bg-[#e5e6e6]/20 transition-all min-h-[44px]">
              <option>All Topics</option>
              <option>Deliverability</option>
              <option>Outreach</option>
              <option>Scaling</option>
            </select>
          </div>
          <div className="flex items-center w-full md:w-auto">
            <span className="font-body text-[11px] uppercase tracking-[0.2em] font-bold text-[#e5e6e6]/70 mr-3 hidden md:block">Level:</span>
            <div className="flex bg-[#e5e6e6]/5 border border-[#e5e6e6]/10 rounded-full p-1.5 w-full md:w-auto" role="group" aria-label="Filter by level">
              {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                <button key={level} className="flex-1 md:flex-none px-4 py-2 rounded-full font-body text-sm font-medium text-[#e5e6e6]/70 hover:text-[#e5e6e6] hover:bg-[#e5e6e6]/10 transition-colors min-h-[44px]">
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Resources */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Featured Resources" 
        className="mb-32"
      >
        <motion.div variants={fadeUpBlurVariant} className="flex items-center gap-5 mb-12">
          <div aria-hidden="true" className="w-12 h-12 rounded-full bg-brand-dark/20 border border-brand-dark/30 flex items-center justify-center">
            <Star className="w-6 h-6 text-brand-dark" />
          </div>
          <div>
            <h2 className="font-heading text-4xl text-[#e5e6e6]">Start with what matters most</h2>
            <p className="font-body text-base text-[#e5e6e6]/80 mt-1">Featured foundational resources.</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredResources.map((res, i) => (
            <motion.article variants={fadeUpBlurVariant} key={i} className="group cursor-pointer">
              {/* Thumbnail */}
              <div className={`w-full aspect-video rounded-3xl bg-surface border border-[#e5e6e6]/10 mb-6 relative overflow-hidden group-hover:border-brand/40 transition-colors duration-500 shadow-lg`}>
                {res.thumbnail ? (
                  <img src={res.thumbnail} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
                ) : (
                  <div aria-hidden="true" className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.3),transparent_70%)]`} />
                )}
                
                {/* Center Play/Book Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-surface/60 backdrop-blur-md border border-[#e5e6e6]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#e5e6e6]/20 transition-all duration-300">
                    {res.type === 'Video' || res.type === 'Workshop' ? (
                      <PlayCircle aria-hidden="true" className="w-10 h-10 text-[#e5e6e6] opacity-90" />
                    ) : (
                      <BookOpen aria-hidden="true" className="w-10 h-10 text-[#e5e6e6] opacity-90" />
                    )}
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-surface/80 backdrop-blur-xl px-3 py-1.5 rounded-lg text-xs font-body text-[#e5e6e6] font-bold border border-[#e5e6e6]/20 flex items-center gap-2">
                  <Clock aria-hidden="true" className="w-4 h-4 text-[#e5e6e6]/70" /> {res.duration}
                </div>
              </div>
              
              {/* Meta */}
              <div className="font-body text-[11px] uppercase tracking-[0.2em] font-bold text-brand mb-3">{res.type}</div>
              <h3 className="font-heading text-3xl text-[#e5e6e6] mb-4 group-hover:text-brand transition-colors leading-tight">{res.title}</h3>
              <p className="font-body text-base text-[#e5e6e6]/90 leading-relaxed">{res.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Resource Categories */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-label="Resource Categories" 
        className="mb-32"
      >
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-5xl text-[#e5e6e6] mb-12 border-b border-[#e5e6e6]/20 pb-6">Resource Categories</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.article variants={fadeUpBlurVariant} key={i} className="glass-card p-10 hover:border-brand/30 transition-all duration-500 group bg-surface/60">
              <h3 className="font-heading text-3xl text-[#e5e6e6] mb-3">{cat.title}</h3>
              <p className="font-body text-base font-medium text-brand mb-8">{cat.subtitle}</p>
              <ul className="space-y-6">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-5 group/item cursor-pointer">
                    <div aria-hidden="true" className="w-10 h-10 rounded-full bg-[#e5e6e6]/10 border border-[#e5e6e6]/20 flex items-center justify-center group-hover/item:bg-[#e5e6e6]/20 group-hover/item:border-brand/40 transition-all shrink-0">
                      <FileText className="w-5 h-5 text-[#e5e6e6]/80 group-hover/item:text-brand transition-colors" />
                    </div>
                    <span className="font-body text-base text-[#e5e6e6] group-hover/item:text-brand transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Events and Workshops Banner */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={fadeUpBlurVariant}
        aria-label="Events and Workshops" 
        className="mb-32 glass-card p-12 md:p-16 border-brand/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group bg-brand-dark/20"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-brand/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex-1">
          <div className="font-body text-[11px] uppercase tracking-[0.3em] font-bold text-brand mb-5">Live Sessions</div>
          <h2 className="font-heading text-4xl md:text-5xl text-[#e5e6e6] mb-5">Events and Workshops</h2>
          <p className="font-body text-xl text-[#e5e6e6] mb-10 leading-relaxed">Learn in real time from deliverability experts.</p>
          <ul className="space-y-4 mb-12">
            {(sanityEvents.length > 0 ? sanityEvents[0].items : ['Live deliverability sessions', 'Outbound strategy workshops', 'Product walkthroughs and demos']).map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 font-body text-base text-[#e5e6e6]">
                <Calendar aria-hidden="true" className="w-5 h-5 text-brand" /> {item}
              </li>
            ))}
          </ul>
          <button onClick={onCTA} className="px-10 py-5 rounded-full bg-[#e5e6e6] text-[#020108] font-body text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-[#e5e6e6]/90 transition-colors shadow-[0_0_20px_rgba(229,230,230,0.15)] min-h-[44px]">
            View Upcoming Events
          </button>
        </div>
        <div aria-hidden="true" className="relative z-10 w-full md:w-1/3 aspect-square rounded-full border border-dashed border-brand/40 flex items-center justify-center animate-[spin_60s_linear_infinite]">
           <div className="w-3/4 h-3/4 rounded-full border border-dashed border-brand-dark/40 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
              <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-brand/30 to-brand-dark/30 blur-2xl animate-pulse"></div>
           </div>
        </div>
      </motion.section>

      {/* Why This Matters */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={staggerContainerVariant}
        aria-labelledby="why-matters-heading" 
        className="mb-32 max-w-4xl mx-auto text-center border-t border-[#e5e6e6]/10 pt-32 relative"
      >
        <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#e5e6e6]/30 to-transparent" />
        <motion.h2 variants={fadeUpBlurVariant} id="why-matters-heading" className="font-heading text-5xl text-[#e5e6e6] mb-8">Outbound is not just <br/><span className="text-brand-dark">sending emails.</span></motion.h2>
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 mb-14 leading-relaxed">
          Most teams fail because they treat outbound like a volume game. Zigtex focus on the mechanics of inbox placement: ensuring your efforts aren't wasted.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'System Behavior', desc: 'How email systems actually behave' },
            { title: 'Domain Health', desc: 'How to maintain domain health' },
            { title: 'Safe Scaling', desc: 'How to scale without long-term damage' }
          ].map((item, i) => (
            <motion.article variants={fadeUpBlurVariant} key={i} className="p-8 rounded-3xl bg-[#e5e6e6]/[0.03] border border-[#e5e6e6]/10">
              <ShieldCheck aria-hidden="true" className="w-10 h-10 text-brand-dark mx-auto mb-5 opacity-90" />
              <h3 className="font-body font-bold text-lg text-[#e5e6e6] mb-3">{item.title}</h3>
              <p className="font-body text-sm text-[#e5e6e6]/80 leading-relaxed">{item.desc}</p>
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
        aria-label="Start learning" 
        className="glass-card p-16 md:p-24 flex flex-col items-center relative overflow-hidden group klein-glow-strong border-brand-dark/30 text-center mx-6 md:mx-auto max-w-5xl my-32"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand-dark/10 to-transparent pointer-events-none" />
        <motion.h2 variants={fadeUpBlurVariant} className="font-heading text-5xl md:text-7xl text-[#e5e6e6] mb-8 max-w-4xl leading-[1.05] relative z-10">
          Learn it. <br/>
          <span className="text-brand block mt-4">Then apply it.</span>
        </motion.h2>
        
        <motion.p variants={fadeUpBlurVariant} className="font-body text-xl text-[#e5e6e6]/90 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
          Use these resources to fix your outbound, then use Zigtex to scale it properly.
        </motion.p>

        <motion.div variants={fadeUpBlurVariant} className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
          <button onClick={onCTA} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-[#e5e6e6] text-[#020108] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(229,230,230,0.15)] min-h-[44px]">
            Start Free Trial
          </button>
          <button onClick={onCTA} className="font-body w-full sm:w-auto text-[12px] uppercase tracking-[0.2em] font-bold bg-transparent border border-[#e5e6e6]/30 text-[#e5e6e6] px-10 py-5 rounded-full hover:bg-[#e5e6e6]/10 hover:border-[#e5e6e6]/50 transition-all duration-300 min-h-[44px]">
            Book a Demo
          </button>
        </motion.div>
      </motion.section>

    </div>
  );
};
