import { Lock } from "lucide-react";

const CheckoutSection = () => (
  <section id="checkout" className="py-28 bg-gray-100">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div>
          <span className="section-label mb-3">Checkout</span>
          <h2 className="font-display font-bold text-black leading-[1.15] mb-6" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>Complete Your Enrolment</h2>
          <p className="text-gray-500 text-[15px] leading-[1.8] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            You are enrolling in the Complete Cohort — 12 weeks of live instruction, mentorship, and your co-certified credential from Anthropic.
          </p>
          <div className="bg-white border border-gray-200 p-8">
            {[['Complete Cohort (12 weeks)','$49.00'],['Live session recordings','Included'],['1-on-1 Mentorship (3×)','Included'],['Certificate','Included']].map(([k,v])=>(
              <div key={k} className="flex justify-between py-3.5 border-b border-gray-100 text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="text-gray-600">{k}</span><span className="font-semibold">{v}</span>
              </div>
            ))}
            <div className="flex justify-between pt-5 text-[16px] font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span>Total</span><span>$49.00</span>
            </div>
          </div>
          <p className="text-gray-400 text-[13px] mt-5 leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
            30-day money-back guarantee. No questions asked. Secured by Stripe.
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-12">
          <h3 className="font-display font-bold text-[24px] mb-8">Payment Details</h3>
          <div className="grid grid-cols-2 gap-4 mb-0">
            <div><label className="form-label">First Name</label><input className="form-field" type="text" placeholder="Your first name"/></div>
            <div><label className="form-label">Last Name</label><input className="form-field" type="text" placeholder="Your last name"/></div>
          </div>
          <label className="form-label">Email Address</label>
          <input className="form-field" type="email" placeholder="you@example.com"/>
          <label className="form-label">Card Number</label>
          <input className="form-field" type="text" placeholder="4242 4242 4242 4242"/>
          <div className="flex gap-2 mb-4 -mt-2">
            {['VISA','MC','AMEX','UPI'].map(c=>(
              <span key={c} className="border border-gray-200 text-[10px] font-bold text-gray-400 px-2.5 py-1 tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>{c}</span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="form-label">Expiry</label><input className="form-field" type="text" placeholder="MM / YY"/></div>
            <div><label className="form-label">CVV</label><input className="form-field" type="text" placeholder="•••"/></div>
          </div>
          <button className="btn-black w-full justify-center mt-2" style={{ display:'flex', height:'52px' }}>
            <Lock size={15}/> Pay $49 — Enroll Now
          </button>
          <p className="text-center text-[11px] text-gray-400 mt-3 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>256-bit SSL encryption · Powered by Stripe</p>
        </div>
      </div>
    </div>
  </section>
);
export default CheckoutSection;
