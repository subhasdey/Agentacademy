import { Check, FileText } from "lucide-react";

const RegisterSection = () => (
  <section id="register" className="py-28 bg-gray-100">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="section-label mb-3">12 — Registration</span>
          <h2 className="font-display font-bold text-black leading-[1.15] mb-6" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            Reserve Your Seat for Spring 2026.
          </h2>
          <p className="text-gray-500 text-[16px] leading-[1.8] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            Fill out the registration form to secure your place in the upcoming cohort. We will send you the payment link, onboarding materials, and Discord invite once your application is reviewed.
          </p>
          <div className="space-y-5">
            {['Takes less than 3 minutes','No credit card required upfront','Instant confirmation email','Seat held for 48 hours after approval'].map(p=>(
              <div key={p} className="flex items-center gap-4">
                <Check size={15} className="text-black flex-shrink-0" strokeWidth={2} />
                <span className="text-[14px] font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-14 text-center">
          <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-7">
            <FileText size={26} className="text-white" strokeWidth={1.5} />
          </div>
          <h3 className="font-display font-bold text-[26px] mb-3">AgentAcademy — Spring 2026 Registration</h3>
          <p className="text-gray-500 text-[14px] leading-[1.7] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            Google Form embedded here — collects name, email, professional background, preferred cohort, and payment intent. Takes under 3 minutes.
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black w-full justify-center mb-4"
            style={{ display:'flex' }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" className="flex-shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Open Google Registration Form
          </a>
          <p className="text-gray-400 text-[11px] tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
            Powered by Google Forms · Your data is kept private
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default RegisterSection;
