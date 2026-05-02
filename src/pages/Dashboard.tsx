import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Lock, PlayCircle, FileText, Download, LogOut, CreditCard } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState } from "react";

const materials = [
  {
    title: "Week 1-2: Foundations of GenAI",
    items: [
      { name: "LLMs & Transformers Overview", type: "video" },
      { name: "Attention Mechanisms Deep Dive", type: "pdf" },
      { name: "Tokenization & Embeddings Lab", type: "doc" },
    ],
  },
  {
    title: "Week 3-4: Prompt Engineering & APIs",
    items: [
      { name: "OpenAI & Claude API Setup Guide", type: "pdf" },
      { name: "Advanced Prompting Techniques", type: "video" },
      { name: "Chain-of-Thought Workshop", type: "doc" },
    ],
  },
  {
    title: "Week 5-6: Building AI Agents",
    items: [
      { name: "CrewAI Framework Guide", type: "pdf" },
      { name: "Multi-Agent Orchestration", type: "video" },
      { name: "Agent Communication Protocols", type: "doc" },
    ],
  },
  {
    title: "Week 7-8: RAG & Vector Stores",
    items: [
      { name: "Vector Database Setup", type: "pdf" },
      { name: "Building RAG Pipelines", type: "video" },
      { name: "Semantic Search Systems", type: "doc" },
    ],
  },
];

const iconMap = {
  video: PlayCircle,
  pdf: FileText,
  doc: Download,
};

const Dashboard = () => {
  const { user, hasPurchased, signOut } = useAuth();
  const navigate = useNavigate();
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  const handlePayment = async () => {
    setPaymentLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment");
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (err: any) {
      toast.error(err.message || "Payment failed");
    }
    setPaymentLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">GenAI Academy</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Log out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        {!hasPurchased ? (
          <div className="max-w-lg mx-auto text-center py-16">
            <CreditCard className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-3">Unlock Course Access</h1>
            <p className="text-muted-foreground mb-8">
              Purchase the GenAI Complete Course to access all study materials, live sessions, and mentorship.
            </p>
            <Button variant="hero" size="lg" className="h-14 px-10 text-lg" onClick={handlePayment} disabled={paymentLoading}>
              {paymentLoading ? "Redirecting..." : "Pay $49 — Get Access"}
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-foreground mb-2">Your Course Materials</h1>
              <p className="text-muted-foreground">Access your GenAI course content below.</p>
            </div>

            <div className="space-y-6 max-w-3xl">
              {materials.map((mod, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden card-elevated">
                  <div className="px-6 py-4 border-b border-border">
                    <h3 className="font-semibold text-foreground">{mod.title}</h3>
                  </div>
                  <div className="divide-y divide-border">
                    {mod.items.map((item, j) => {
                      const Icon = iconMap[item.type as keyof typeof iconMap];
                      return (
                        <div key={j} className="px-6 py-3 flex items-center justify-between hover:bg-accent/50 cursor-pointer transition-colors">
                          <div className="flex items-center gap-3">
                            <Icon className="h-4 w-4 text-primary" />
                            <span className="text-sm text-foreground">{item.name}</span>
                          </div>
                          <span className="text-xs text-primary font-medium">Open</span>
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
