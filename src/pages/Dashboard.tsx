import { Link, useNavigate } from "react-router-dom";
import { Layers, PlayCircle, FileText, Download, LogOut, CreditCard, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState } from "react";

const materials = [
  { title:"Week 1–2: Foundations of GenAI", items:[
    { name:"LLMs & Transformers Overview", type:"video" },
    { name:"Attention Mechanisms Deep Dive", type:"pdf" },
    { name:"Tokenization & Embeddings Lab", type:"doc" },
  ]},
  { title:"Week 3–4: Prompt Engineering & APIs", items:[
    { name:"OpenAI & Claude API Setup Guide", type:"pdf" },
    { name:"Advanced Prompting Techniques", type:"video" },
    { name:"Chain-of-Thought Workshop", type:"doc" },
  ]},
  { title:"Week 5–6: Building AI Agents", items:[
    { name:"CrewAI Framework Guide", type:"pdf" },
    { name:"Multi-Agent Orchestration", type:"video" },
    { name:"Agent Communication Protocols", type:"doc" },
  ]},
  { title:"Week 7–8: RAG & Vector Stores", items:[
    { name:"Vector Database Setup", type:"pdf" },
    { name:"Building RAG Pipelines", type:"video" },
    { name:"Semantic Search Systems", type:"doc" },
  ]},
  { title:"Week 9–10: Enterprise AI Systems", items:[
    { name:"Observability & Tracing Guide", type:"pdf" },
    { name:"Cost Management Strategies", type:"video" },
    { name:"Guardrails Implementation", type:"doc" },
  ]},
  { title:"Week 11–12: Capstone Project", items:[
    { name:"Capstone Brief & Requirements", type:"pdf" },
    { name:"Deployment Checklist", type:"doc" },
    { name:"Demo Day Prep Guide", type:"doc" },
  ]},
];

const iconMap = { video: PlayCircle, pdf: FileText, doc: Download };

const Dashboard = () => {
  const { user, hasPurchased, signOut } = useAuth();
  const navigate = useNavigate();
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handlePayment = async () => {
    setPaymentLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment");
      if (error) throw error;
      if (data?.url) window.open(data.url, "_blank");
    } catch (err: any) {
      toast.error(err.message || "Payment failed");
    }
    setPaymentLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <Layers size={15} className="text-white" />
            </div>
            <span className="font-display font-bold text-[17px] text-black">AgentAcademy</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[13px] text-gray-400 hidden sm:block" style={{ fontFamily: 'Inter, sans-serif' }}>{user?.email}</span>
            <button onClick={() => { signOut(); navigate("/"); }}
              className="flex items-center gap-2 text-[13px] font-semibold text-black uppercase tracking-widest"
              style={{ fontFamily: 'Inter, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}>
              <LogOut size={14} /> Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1240px] mx-auto px-6 md:px-12 py-20">
        {!hasPurchased ? (
          /* Upsell state */
          <div className="max-w-[560px] mx-auto text-center py-24">
            <div className="w-20 h-20 bg-black flex items-center justify-center mx-auto mb-8">
              <Lock size={32} className="text-white" strokeWidth={1.5} />
            </div>
            <h1 className="font-display font-bold text-[40px] text-black leading-[1.15] mb-4">Unlock Full Access</h1>
            <p className="text-gray-500 text-[16px] leading-[1.8] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              Purchase the Complete Cohort to access all study materials, live sessions, mentorship, and your Anthropic co-certified credential.
            </p>
            <button onClick={handlePayment} disabled={paymentLoading}
              className="btn-black w-full justify-center"
              style={{ display: 'flex', height: '56px', fontSize: '15px', opacity: paymentLoading ? 0.6 : 1 }}>
              <CreditCard size={16} />
              {paymentLoading ? "Redirecting to payment…" : "Pay $49 — Get Full Access"}
              <ArrowRight size={14} />
            </button>
            <p className="text-gray-400 text-[12px] mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              30-day money-back guarantee · Secured by Stripe
            </p>
          </div>
        ) : (
          /* Course content */
          <>
            <div className="mb-16">
              <span className="section-label mb-3">Your Dashboard</span>
              <h1 className="font-display font-bold text-[48px] text-black leading-[1.15]">Course Materials</h1>
              <p className="text-gray-500 text-[16px] mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Welcome back, {user?.email?.split("@")[0]}. All 12 weeks unlocked.
              </p>
            </div>

            <div className="space-y-px bg-gray-200">
              {materials.map((mod, i) => (
                <div key={i} className="bg-white">
                  <div className="px-8 py-5 border-b border-gray-100">
                    <h3 className="font-display font-bold text-[18px] text-black">{mod.title}</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {mod.items.map((item, j) => {
                      const Icon = iconMap[item.type as keyof typeof iconMap];
                      return (
                        <div key={j} className="px-8 py-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group">
                          <div className="flex items-center gap-4">
                            <Icon size={15} className="text-gray-400" strokeWidth={1.5} />
                            <span className="text-[14px] text-black" style={{ fontFamily: 'Inter, sans-serif' }}>{item.name}</span>
                          </div>
                          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Open</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
