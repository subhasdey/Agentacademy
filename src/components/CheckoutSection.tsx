import { Lock, ArrowRight, Check } from "lucide-react";

const CheckoutSection = () => (
  <section id="checkout" className="py-20 md:py-28 bg-gray-100">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <span className="section-label mb-3">Checkout</span>
          <h2 className="font-display font-bold text-black leading-[1.15] mb-5" style={{ fontSize: 'clamp(26px,4vw,44px)' }}>Complete Your Enrolment</h2>
          <p className="text-gray-500 text-[15px] leading-[1.8] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Join the Summer AI Agent Camp — 4 evenings of live, hands-on instruction. Covers Python, Ollama, SQLite, Agents, MCP, and multi-agent workflows.
          </p>
          <div className="bg-white border border-gray-200 p-7">
            <div className="flex justify-between py-3.5 border-b border-gray-100 text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-gray-600">Session 1 (Jul 13–16)</span><span className="font-semibold text-gray-900">$400.00</span>
            </div>
            <div className="flex justify-between py-3.5 border-b border-gray-100 text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-gray-600">Session 2 (Jul 20–23)</span><span className="font-semibold text-gray-900">$400.00</span>
            </div>
            <div className="flex justify-between py-3.5 border-b border-gray-100 text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-gray-600">Subtotal</span><span className="font-semibold text-gray-500 line-through">$800.00</span>
            </div>
            <div className="flex justify-between py-3.5 border-b border-gray-100 text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-gray-600 flex items-center gap-2">
                Combo Discount
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wide">Save $100</span>
              </span>
              <span className="font-semibold text-emerald-600">-$100.00</span>
            </div>
            <div className="flex justify-between py-3.5 border-b border-gray-100 text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-gray-600">All lab materials & code</span><span className="font-semibold text-gray-900">Included</span>
            </div>
            <div className="flex justify-between py-3.5 border-b border-gray-100 text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-gray-600">Certificate of completion</span><span className="font-semibold text-gray-900">Included</span>
            </div>
          </div>
          <p className="text-gray-400 text-[13px] mt-5 leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>30-day money-back guarantee · Secured by Stripe</p>
        </div>

        <div className="bg-white border border-gray-200 p-8 md:p-12">
          <h3 className="font-display font-bold text-[22px] md:text-[24px] mb-3">Secure Payment via Stripe</h3>
          <p className="text-gray-500 text-[14px] leading-[1.7] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Payment is handled securely by Stripe. You'll be redirected to complete your purchase after registering.
          </p>
          <div className="space-y-3 mb-8">
            {[
              'No card details stored on our servers',
              '256-bit SSL encryption via Stripe',
              '30-day money-back guarantee',
              'Instant confirmation email',
            ].map(p => (
              <div key={p} className="flex items-center gap-3 text-[14px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Check size={14} className="text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                {p}
              </div>
            ))}
          </div>
          <div className="flex gap-2 mb-8">
            {['VISA', 'MC', 'AMEX', 'UPI'].map(c => (
              <span key={c} className="border border-gray-200 text-[10px] font-bold text-gray-400 px-2.5 py-1 tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>{c}</span>
            ))}
          </div>
          <a href="#register" className="btn-black w-full justify-center h-[52px]" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#7c3aed', color: '#fff', textDecoration: 'none' }}>
            <Lock size={14} /> Register & Pay Securely <ArrowRight size={13} />
          </a>
          <p className="text-center text-[11px] text-gray-400 mt-3 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Powered by Stripe · No account required</p>
        </div>
      </div>
    </div>
  </section>
);
export default CheckoutSection;
