import { Users, Briefcase, BookOpen, Award } from "lucide-react";

const partners = ['Anthropic','Microsoft','Google DeepMind','Infosys AI','Accenture','TCS iON','Wipro AI360'];
const collabs = [
  { icon: Users, title:'Guest Lectures', desc:'Weekly sessions from engineers at Anthropic, Google, and leading AI startups sharing real patterns from production deployments.' },
  { icon: Briefcase, title:'Hiring Pipeline', desc:'Top graduates are recommended directly to partner companies. 340+ alumni placed in AI roles in the past six months alone.' },
  { icon: BookOpen, title:'Real-World Projects', desc:'Capstone projects are co-sponsored by partners — you build something real, they evaluate it and may adopt it into production.' },
  { icon: Award, title:'Co-Certified', desc:'Certificates are co-signed by AgentAcademy and the Anthropic Education Programme — recognised by 200+ employers globally.' },
];

const IndustrySection = () => (
  <section id="industry" className="py-20 md:py-28 bg-white">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-16 md:mb-20 items-end">
        <div>
          <span className="section-label mb-3">08 — Industry Collaboration</span>
          <h2 className="font-display font-bold text-black leading-[1.15]" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>Built With Industry. For Industry.</h2>
        </div>
        <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Our curriculum is co-designed with leading companies actively hiring agentic AI engineers. Guest lectures, real projects, and direct placement pipelines for graduating cohorts.
        </p>
      </div>
      <div className="border-t border-b border-gray-200 py-8 flex flex-wrap gap-8 md:gap-12 items-center mb-16 md:mb-20">
        {partners.map(p => (
          <span key={p} className="font-display font-bold text-gray-300 hover:text-black transition-colors cursor-default" style={{ fontSize: 'clamp(16px,2vw,20px)' }}>{p}</span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-gray-200">
        {collabs.map(c => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="bg-white p-8 md:p-10">
              <div className="w-10 h-10 border border-gray-200 flex items-center justify-center mb-5">
                <Icon size={17} className="text-black" strokeWidth={1.5} />
              </div>
              <h4 className="font-display font-bold text-[15px] mb-2">{c.title}</h4>
              <p className="text-gray-500 text-[13px] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>{c.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
export default IndustrySection;
