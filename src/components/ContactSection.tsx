import { Mail, MessageSquare, Phone, Briefcase } from "lucide-react";

const methods = [
  { icon: Mail, title:'Email', desc:'hello@agentacademy.ai' },
  { icon: MessageSquare, title:'Discord Community', desc:'Join our growing student community server' },
  { icon: Phone, title:'Schedule a Call', desc:'Book a 15-min intro call with an advisor' },
  { icon: Briefcase, title:'Enterprise Sales', desc:'enterprise@agentacademy.ai' },
];

const ContactSection = () => (
  <section id="contact" className="py-28 bg-black">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div>
          <span className="section-label text-white/40 mb-3">11 — Contact</span>
          <h2 className="font-display font-bold text-white leading-[1.15] mb-7" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            Have Questions?<br/>We Are Here.
          </h2>
          <p className="text-white/45 text-[16px] leading-[1.8] mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
            Whether you are deciding between plans, need an enterprise quote, or want to confirm this is the right programme — reach out. We respond within 24 hours.
          </p>
          <div className="space-y-0">
            {methods.map((m,i) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="flex gap-5 items-start py-8" style={{ borderBottom: i < methods.length-1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <div className="w-10 h-10 border border-white/12 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-white/50" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{m.title}</h4>
                    <p className="text-white/40 text-[13px]" style={{ fontFamily: 'Inter, sans-serif' }}>{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border border-white/[0.08] bg-white/[0.03] p-12">
          <h3 className="font-display font-bold text-white text-[26px] mb-8">Send a Message</h3>
          <div className="grid grid-cols-2 gap-4 mb-0">
            <div><label className="form-label-dark">First Name</label><input className="form-field-dark" type="text" placeholder="Your name"/></div>
            <div><label className="form-label-dark">Last Name</label><input className="form-field-dark" type="text" placeholder="Last name"/></div>
          </div>
          <label className="form-label-dark">Email</label>
          <input className="form-field-dark" type="email" placeholder="you@example.com"/>
          <label className="form-label-dark">Subject</label>
          <select className="form-field-dark" style={{ background:'transparent' }}>
            <option style={{ background:'#0a0a0a' }}>General Inquiry</option>
            <option style={{ background:'#0a0a0a' }}>Enrollment Question</option>
            <option style={{ background:'#0a0a0a' }}>Enterprise / Team Training</option>
            <option style={{ background:'#0a0a0a' }}>Technical Support</option>
            <option style={{ background:'#0a0a0a' }}>Partnership</option>
          </select>
          <label className="form-label-dark">Message</label>
          <textarea className="form-field-dark" rows={4} placeholder="Tell us how we can help…" style={{ resize:'vertical' }}/>
          <button className="btn-outline-white w-full justify-center mt-1" style={{ display:'flex' }}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  </section>
);
export default ContactSection;
