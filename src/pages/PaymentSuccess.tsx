import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, Home, Mail, Layers } from "lucide-react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [verifying, setVerifying] = useState(true);
  const [paid, setPaid] = useState(false);
  const [customerEmail, setCustomerEmail] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      setVerifying(false);
      return;
    }

    supabase.functions
      .invoke("verify-payment", { body: { session_id: sessionId } })
      .then(({ data }) => {
        if (data?.paid) {
          setPaid(true);
          setCustomerEmail(data.customerEmail ?? null);
        }
      })
      .finally(() => setVerifying(false));
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-[520px]">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-3 no-underline mb-16">
          <div className="w-8 h-8 bg-white flex items-center justify-center">
            <Layers size={15} className="text-black" />
          </div>
          <span className="font-display font-bold text-[17px] text-white">AgentAcademy</span>
        </Link>

        {verifying ? (
          <div className="text-white/40 text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Confirming payment…
          </div>
        ) : paid ? (
          <>
            <div className="w-20 h-20 border border-white/20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={36} className="text-white" strokeWidth={1} />
            </div>
            <h1 className="font-display font-bold text-white text-[40px] leading-[1.15] mb-4">
              Payment Successful.
            </h1>
            <p className="text-white/45 text-[16px] leading-[1.8] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              You're officially registered for the Summer AI Agent Camp — July 2026.
            </p>
            {customerEmail && (
              <div className="flex items-center justify-center gap-2 text-white/30 text-[13px] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Mail size={13} />
                Setup guide will be emailed to <strong className="text-white/50">{customerEmail}</strong>
              </div>
            )}
            {!customerEmail && (
              <p className="text-white/30 text-[13px] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                Check your inbox — we'll send the pre-camp setup guide within 24 hours.
              </p>
            )}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Home size={13} /> Back to Home
            </Link>
          </>
        ) : (
          <>
            <h1 className="font-display font-bold text-white text-[34px] leading-[1.15] mb-4">
              Something went wrong.
            </h1>
            <p className="text-white/45 text-[15px] leading-[1.8] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              We couldn't verify your payment. If you were charged, please email us and we'll sort it out immediately.
            </p>
            <Link
              to="/#register"
              className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              ← Try Again
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
