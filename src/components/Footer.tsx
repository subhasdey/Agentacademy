import { Link } from "react-router-dom";
import { Layers, Twitter, Linkedin, Youtube, MessageSquare } from "lucide-react";

const Footer = () => (
  <footer className="bg-black pt-20 pb-10">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-16 pb-16 border-b border-white/[0.08]">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 no-underline mb-4">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <Layers size={16} className="text-black" />
            </div>
            <span className="font-display font-bold text-[16px] text-white">AgentAcademy</span>
          </Link>
          <p className="text-white/35 text-[13px] leading-[1.7] max-w-[240px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            The world's most comprehensive agentic AI education platform. Built by practitioners, for the next generation of AI engineers.
          </p>
        </div>
        {[
          { h:'Learn', links:[['Courses','/#courses'],['Demos','/#demos'],['Blog','/#blog']] },
          { h:'Company', links:[['About','/#about'],['Industry Partners','/#industry']] },
          { h:'Support', links:[['Contact','/#contact'],['Register','/#register']] },
        ].map(col => (
          <div key={col.h}>
            <h4 className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/30 mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>{col.h}</h4>
            <ul className="space-y-3">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-[13px] text-white/45 hover:text-white transition-colors no-underline" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/25 text-[12px]" style={{ fontFamily: 'Inter, sans-serif' }}>© 2026 AgentAcademy. All rights reserved.</p>
        <div className="flex gap-2">
          {[
            { Icon: Twitter, label: "Follow AgentAcademy on Twitter" },
            { Icon: Linkedin, label: "Connect with AgentAcademy on LinkedIn" },
            { Icon: Youtube, label: "Subscribe to AgentAcademy on YouTube" },
            { Icon: MessageSquare, label: "Join the AgentAcademy Discord community server" }
          ].map(({ Icon, label }, i) => (
            <button 
              key={i} 
              aria-label={label} 
              className="w-9 h-9 border border-white/[0.08] flex items-center justify-center hover:border-white/35 hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500"
            >
              <Icon size={14} className="text-white/40" strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
