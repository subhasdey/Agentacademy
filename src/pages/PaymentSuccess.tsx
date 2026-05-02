import { useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle, ArrowRight, Layers } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { refreshProfile } = useAuth();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (sessionId) {
      supabase.functions
        .invoke("verify-payment", { body: { session_id: sessionId } })
        .then(({ data }) => {
          if (data?.paid) {
            refreshProfile();
            toast.success("Payment confirmed! Welcome to the course.");
          }
        });
    }
    const timer = setTimeout(() => navigate("/dashboard"), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-[480px]">
        <Link to="/" className="flex items-center justify-center gap-3 no-underline mb-16">
          <div className="w-8 h-8 bg-white flex items-center justify-center">
            <Layers size={15} className="text-black" />
          </div>
          <span className="font-display font-bold text-[17px] text-white">AgentAcademy</span>
        </Link>
        <div className="w-20 h-20 border border-white/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={36} className="text-white" strokeWidth={1} />
        </div>
        <h1 className="font-display font-bold text-white text-[40px] leading-[1.15] mb-4">Payment Successful.</h1>
        <p className="text-white/45 text-[16px] leading-[1.8] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
          You now have full access to all 12 weeks of course materials, live sessions, and mentorship. Redirecting you to your dashboard…
        </p>
        <Link to="/dashboard" className="btn-outline-white" style={{ display: 'inline-flex' }}>
          Go to Dashboard <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
