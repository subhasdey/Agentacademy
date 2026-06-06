import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PRICING: Record<string, { amount: number; label: string }> = {
  session1: { amount: 40000, label: "AI Agent Camp — Session 1 (Jul 13–16)" },
  session2: { amount: 40000, label: "AI Agent Camp — Session 2 (Jul 20–23)" },
  both:     { amount: 70000, label: "AI Agent Camp — Both Sessions (Jul 13–16 & Jul 20–23)" },
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, firstName, lastName, sessions = "both" } = await req.json();

    if (!email) throw new Error("Missing required field: email");

    const pricing = PRICING[sessions] ?? PRICING["both"];

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Reuse existing Stripe customer if one exists for this email
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: pricing.amount,
            product_data: {
              name: pricing.label,
              description: `Hands-on, 4-evening intensive. Includes all lab materials, code, and certificate of completion.`,
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/#register`,
      metadata: {
        first_name: firstName ?? "",
        last_name: lastName ?? "",
        email,
        sessions,
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
