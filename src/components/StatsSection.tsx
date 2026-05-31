import { Users, Clock, Code, Cpu, Star } from "lucide-react";

const stats = [
  { icon: Users, num: '20', label: 'Seats Per Session' },
  { icon: Clock, num: '8 hrs', label: 'Total Instruction' },
  { icon: Code, num: '3', label: 'Hands-On Labs / Day' },
  { icon: Cpu, num: '100%', label: 'Local — No Cloud API' },
  { icon: Star, num: 'July', label: '2026 — Two Sessions' },
];

const StatsSection = () => (
  <section className="bg-black py-16 md:py-24">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-5 border border-white/[0.08]" style={{ perspective: '800px' }}>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.label}
              className="p-8 md:p-12 text-center border-r border-b border-white/[0.08] transition-all duration-300 cursor-default"
              style={{ borderRight: i === 4 ? 'none' : undefined }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.1)';
                (e.currentTarget as HTMLElement).style.transform = 'translateZ(8px) rotateX(4deg)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.transform = 'none';
              }}>
              <div className="flex justify-center mb-3">
                <Icon size={20} className="text-white/25" strokeWidth={1.5} />
              </div>
              <div className="font-display font-black text-white leading-none mb-2" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>{s.num}</div>
              <div className="text-[11px] text-white/40 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
export default StatsSection;
