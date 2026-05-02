import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

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

    const timer = setTimeout(() => navigate("/dashboard"), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-foreground mb-3">Payment Successful!</h1>
        <p className="text-muted-foreground">You now have full access to all course materials. Redirecting...</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
