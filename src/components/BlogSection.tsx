import { ArrowRight, Terminal, Layers, UserCircle } from "lucide-react";

const posts = [
  {
    cat: 'Pre-Camp Guide',
    title: 'Setting Up Python & Ollama Before Camp: Your July 2026 Checklist',
    excerpt: 'Everything you need to install before Day 1 — Python 3.11, Ollama, qwen2.5:7b, and SQLite. Takes about 20 minutes and means you hit the ground running on Monday evening.',
    author: 'Camp Team', date: 'Jun 20, 2026', read: '5 min',
    Icon: Terminal, grad: 'from-gray-900 to-black',
  },
  {
    cat: 'Camp Preview',
    title: "What You'll Build in 4 Days: A Look at the July 2026 Projects",
    excerpt: 'Day 1 you run your first local LLM. Day 4 you demo a multi-agent pipeline to the cohort. Here is what the journey looks like — and why students keep saying Day 3 is the breakthrough moment.',
    author: 'Camp Team', date: 'Jun 15, 2026', read: '7 min',
    Icon: Layers, grad: 'from-violet-950 to-gray-900',
  },
  {
    cat: 'Student Story',
    title: 'From Zero to Multi-Agent System in 4 Evenings — A Student Recap',
    excerpt: 'One of our Session 1 students shares how they went from "I barely know Python" to presenting a working supervisor-worker agent pipeline on Demo Day. Their words, not ours.',
    author: 'Camp Grad', date: 'May 30, 2026', read: '6 min',
    Icon: UserCircle, grad: 'from-gray-800 to-gray-900',
  },
];

const BlogSection = () => (
  <section id="blog" className="py-20 md:py-28 bg-black">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <div>
          <span className="section-label text-white/40 mb-3">Camp Blog</span>
          <h2 className="font-display font-bold text-white leading-[1.15]" style={{ fontSize: 'clamp(26px,4vw,44px)' }}>
            From the Camp.<br className="hidden md:block"/>Guides, Previews & Student Stories.
          </h2>
        </div>
        <a href="#" className="btn-outline-white self-start md:self-auto flex-shrink-0">All Articles <ArrowRight size={13} /></a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.08]">
        {posts.map((p, i) => {
          const Icon = p.Icon;
          return (
            <div key={p.title} className="hover:bg-white/[0.03] transition-colors group cursor-pointer"
              style={{ borderRight: i < posts.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
              {/* Cover thumbnail */}
              <div className={`h-44 bg-gradient-to-br ${p.grad} relative overflow-hidden flex items-end p-5`}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
                  backgroundSize: '22px 22px',
                }}/>
                <Icon size={100} className="absolute top-2 right-2 text-white/[0.05]" strokeWidth={1}/>
                <span className="relative z-10 text-[9px] font-bold tracking-[0.18em] uppercase text-white/50 border border-white/15 px-2.5 py-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{p.cat}</span>
              </div>
              {/* Content */}
              <div className="p-8 md:p-9">
                <h3 className="font-display font-semibold text-white text-[17px] leading-[1.35] mb-4">{p.title}</h3>
                <p className="text-white/40 text-[13px] leading-[1.75]" style={{ fontFamily: 'Inter, sans-serif' }}>{p.excerpt}</p>
                <div className="mt-7 pt-6 border-t border-white/[0.08] flex justify-between items-center">
                  <div>
                    <div className="text-white/35 text-[11px]" style={{ fontFamily: 'Inter, sans-serif' }}>{p.author} · {p.date} · {p.read}</div>
                  </div>
                  <div className="w-8 h-8 border border-white/15 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-white group-hover:border-white">
                    <ArrowRight size={13} className="text-white/40 group-hover:text-black" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
export default BlogSection;
