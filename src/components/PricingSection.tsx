import { Check, X, ArrowRight } from "lucide-react";

const plans = [
  {
    name: 'Single Session', desc: 'Join one 4-day session — either July Week 2 or July Week 4.',
    price: '$400', period: 'Per 4-day session', featured: false,
    features: [
      { text: '4 live evening classes (5–7 PM PST)', on: true },
      { text: 'All lab code & materials', on: true },
      { text: 'Python + Ollama + SQLite setup', on: true },
      { text: 'Both July sessions', on: false },
      { text: 'Certificate of completion', on: false },
      { text: 'Priority Q&A access', on: false },
    ],
    cta: 'Enroll — Session 1 or 2', link: '/#register',
  },
  {
    name: 'Both Sessions', desc: 'Join both July sessions — reinforce concepts and build more projects.',
    price: '$700', period: 'Save $100 vs. two singles', featured: true,
    features: [
      { text: '8 live evening classes total', on: true },
      { text: 'All lab code & materials', on: true },
      { text: 'Python + Ollama + SQLite setup', on: true },
      { text: 'Both July sessions included', on: true },
      { text: 'Certificate of completion', on: true },
      { text: 'Priority Q&A access', on: true },
    ],
    cta: 'Enroll — Both Sessions', link: '/#checkout',
  },
  {
    name: 'Team / Group', desc: '3+ people from the same company or school — custom group pricing.',
    price: 'Custom', period: 'Contact for group rate', featured: false,
    features: [
      { text: 'Up to 10 participants', on: true },
      { text: 'Dedicated session time slot', on: true },
      { text: 'Custom labs for your use case', on: true },
      { text: 'Private cohort environment', on: true },
      { text: 'Post-camp office hours (2×)', on: true },
      { text: 'Group certificate', on: true },
    ],
    cta: 'Contact for Group Rate', link: '/#contact',
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-28 bg-black">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-16 md:mb-20 items-end">
        <div>
          <span className="section-label text-white/40 mb-3">09 — Pricing</span>
          <h2 className="font-display font-bold text-white leading-[1.15]" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>Simple, Flat Pricing.</h2>
        </div>
        <p className="text-white/45 text-[15px] md:text-[16px] leading-[1.8]" style={{ fontFamily: 'Inter, sans-serif' }}>
          $400 per 4-day session. All materials, labs, and live instruction included. No subscriptions, no hidden fees.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10" style={{ perspective: '1200px' }}>
        {plans.map((p, i) => (
          <div key={p.name}
            className="bg-black p-8 md:p-12 transition-all duration-300 cursor-pointer"
            style={{ borderTop: p.featured ? '2px solid #a78bfa' : '2px solid transparent' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = i === 1 ? 'translateZ(18px) rotateY(0deg)' : i === 0 ? 'rotateY(6deg) rotateX(3deg)' : 'rotateY(-6deg) rotateX(3deg)';
              (e.currentTarget as HTMLElement).style.background = '#0f0f1a';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'none';
              (e.currentTarget as HTMLElement).style.background = '#000';
            }}>
            {p.featured && (
              <div className="text-[10px] font-bold tracking-widest uppercase text-black px-3 py-1 inline-block mb-4"
                style={{ fontFamily: 'Inter, sans-serif', background: '#a78bfa' }}>Best Value</div>
            )}
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/40 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{p.name}</div>
            <div className="text-white/45 text-[14px] leading-[1.6] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>{p.desc}</div>
            <div className="font-display font-black text-white leading-none" style={{ fontSize: 'clamp(40px,5vw,56px)' }}>{p.price}</div>
            <div className="text-white/35 text-[13px] mt-1 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>{p.period}</div>
            <div className="border-t border-white/[0.08] pt-7 space-y-3 mb-8">
              {p.features.map(f => (
                <div key={f.text} className={`flex items-center gap-3 text-[13px] ${f.on ? 'text-white/65' : 'text-white/20'}`}
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {f.on
                    ? <Check size={13} className="flex-shrink-0" style={{ color: '#a78bfa' }} strokeWidth={2} />
                    : <X size={13} className="text-white/15 flex-shrink-0" strokeWidth={2} />}
                  {f.text}
                </div>
              ))}
            </div>
            <a href={p.link} className="btn-outline-white w-full justify-center" style={{ display: 'flex' }}>
              {p.cta} <ArrowRight size={13} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default PricingSection;
