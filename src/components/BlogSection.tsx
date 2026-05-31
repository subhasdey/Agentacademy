import { ArrowRight } from "lucide-react";

const posts = [
  { cat:'Pre-Camp Guide', title:'Setting Up Python & Ollama Before Camp: Your July 2026 Checklist', excerpt:'Everything you need to install before Day 1 — Python 3.11, Ollama, qwen2.5:7b, and SQLite. Takes about 20 minutes and means you hit the ground running on Monday evening.', author:'Camp Team', date:'Jun 20, 2026', read:'5 min' },
  { cat:'Camp Preview', title:"What You'll Build in 4 Days: A Look at the July 2026 Projects", excerpt:'Day 1 you run your first local LLM. Day 4 you demo a multi-agent pipeline to the cohort. Here is what the journey looks like — and why students keep saying Day 3 is the breakthrough moment.', author:'Camp Team', date:'Jun 15, 2026', read:'7 min' },
  { cat:'Student Story', title:'From Zero to Multi-Agent System in 4 Evenings — A Student Recap', excerpt:'One of our Session 1 students shares how they went from "I barely know Python" to presenting a working supervisor-worker agent pipeline on Demo Day. Their words, not ours.', author:'Camp Grad', date:'May 30, 2026', read:'6 min' },
];

const BlogSection = () => (
  <section id="blog" className="py-20 md:py-28 bg-black">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <div>
          <span className="section-label text-white/40 mb-3">02 — Camp Blog</span>
          <h2 className="font-display font-bold text-white leading-[1.15]" style={{ fontSize: 'clamp(26px,4vw,44px)' }}>
            From the Camp.<br className="hidden md:block"/>Guides, Previews & Student Stories.
          </h2>
        </div>
        <a href="#" className="btn-outline-white self-start md:self-auto flex-shrink-0">All Articles <ArrowRight size={13} /></a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.08]">
        {posts.map((p, i) => (
          <div key={p.title} className="p-8 md:p-10 hover:bg-white/5 transition-colors group cursor-pointer border-b md:border-b-0 border-white/[0.08]"
            style={{ borderRight: i < posts.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-5 h-px bg-white/30" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>{p.cat}</span>
            </div>
            <h3 className="font-display font-semibold text-white text-[18px] md:text-[19px] leading-[1.35] mb-4">{p.title}</h3>
            <p className="text-white/40 text-[14px] leading-[1.75]" style={{ fontFamily: 'Inter, sans-serif' }}>{p.excerpt}</p>
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex justify-between items-center">
              <div>
                <div className="text-white/40 text-[12px]" style={{ fontFamily: 'Inter, sans-serif' }}>{p.author} · {p.date} · {p.read}</div>
                <span className="inline-block mt-1.5 border border-white/15 text-white/40 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Camp Blog</span>
              </div>
              <div className="w-8 h-8 border border-white/15 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-white group-hover:border-white">
                <ArrowRight size={13} className="text-white/40 group-hover:text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default BlogSection;
