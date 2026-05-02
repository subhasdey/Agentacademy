import { Users, Globe, CheckCircle, DollarSign, Star } from "lucide-react";

const stats = [
  { icon: Users, num:'12,400', label:'Students Enrolled' },
  { icon: Globe, num:'48', label:'Countries' },
  { icon: CheckCircle, num:'98%', label:'Completion Rate' },
  { icon: DollarSign, num:'3.2×', label:'Avg Salary Lift' },
  { icon: Star, num:'4.9', label:'Average Rating' },
];

const StatsSection = () => (
  <section className="bg-black py-24">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-white/[0.08] border border-white/[0.08]">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="p-14 text-center">
              <div className="flex justify-center mb-4">
                <Icon size={22} className="text-white/25" strokeWidth={1.5} />
              </div>
              <div className="font-display font-black text-white leading-none mb-3" style={{ fontSize: '52px' }}>{s.num}</div>
              <div className="text-[12px] text-white/40 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
export default StatsSection;
