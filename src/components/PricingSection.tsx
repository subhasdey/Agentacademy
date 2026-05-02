import { Check, X, ArrowRight } from "lucide-react";

const plans = [
  { name:'Auditor', desc:'Self-paced access to all recorded content.', price:'$29', period:'One-time payment', featured:false,
    features:[{text:'All video lectures',on:true},{text:'Code notebooks & labs',on:true},{text:'Community Discord',on:true},{text:'Live sessions',on:false},{text:'1-on-1 Mentorship',on:false},{text:'Certificate',on:false}],
    cta:'Get Started', link:'/#register' },
  { name:'Complete Cohort', desc:'Full live programme with mentorship & certificate.', price:'$49', period:'One-time payment', featured:true,
    features:[{text:'All video lectures',on:true},{text:'Live cohort sessions (12 wks)',on:true},{text:'1-on-1 mentorship (3 sessions)',on:true},{text:'Certificate — co-signed Anthropic',on:true},{text:'Capstone portfolio review',on:true},{text:'Hiring pipeline access',on:true}],
    cta:'Enroll Now', link:'/#checkout' },
  { name:'Enterprise', desc:'Custom team training with dedicated instructor.', price:'Custom', period:'Contact for quote', featured:false,
    features:[{text:'Up to 50 seats',on:true},{text:'Custom module selection',on:true},{text:'Dedicated instructor',on:true},{text:'Private Slack channel',on:true},{text:'LMS integration',on:true},{text:'Quarterly progress reports',on:true}],
    cta:'Contact Sales', link:'/#contact' },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-28 bg-black">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-16 md:mb-20 items-end">
        <div>
          <span className="section-label text-white/40 mb-3">09 — Pricing</span>
          <h2 className="font-display font-bold text-white leading-[1.15]" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>Simple, Transparent Pricing.</h2>
        </div>
        <p className="text-white/45 text-[15px] md:text-[16px] leading-[1.8]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Choose the plan that fits your goals. All plans include lifetime access to materials and our student community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
        {plans.map(p => (
          <div key={p.name} className="bg-black p-8 md:p-12 hover:bg-white/[0.03] transition-colors"
            style={{ borderTop: p.featured ? '2px solid #fff' : '2px solid transparent' }}>
            {p.featured && <div className="text-[10px] font-bold tracking-widest uppercase text-white bg-white/10 px-3 py-1 inline-block mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Most Popular</div>}
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/40 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{p.name}</div>
            <div className="text-white/45 text-[14px] leading-[1.6] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>{p.desc}</div>
            <div className="font-display font-black text-white leading-none" style={{ fontSize: 'clamp(40px,5vw,56px)' }}>{p.price}</div>
            <div className="text-white/35 text-[13px] mt-1 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>{p.period}</div>
            <div className="border-t border-white/[0.08] pt-7 space-y-3 mb-8">
              {p.features.map(f => (
                <div key={f.text} className={`flex items-center gap-3 text-[13px] ${f.on ? 'text-white/65' : 'text-white/20'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  {f.on ? <Check size={13} className="text-white/50 flex-shrink-0" strokeWidth={2}/> : <X size={13} className="text-white/15 flex-shrink-0" strokeWidth={2}/>}
                  {f.text}
                </div>
              ))}
            </div>
            <a href={p.link} className="btn-outline-white w-full justify-center" style={{ display:'flex' }}>
              {p.cta} <ArrowRight size={13} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default PricingSection;
