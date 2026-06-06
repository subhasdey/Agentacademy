import { useState } from "react";
import { Check, FileText, User, Mail, Calendar, Code, AlignLeft, CreditCard } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const RegisterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingStep, setLoadingStep] = useState<null | 'saving' | 'redirecting'>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sessions: 'both',
    experience: 'intermediate',
    background: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Registration incomplete",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Step 1 — Save registration details to DB
      setLoadingStep('saving');
      const { error: dbError } = await supabase
        .from("registrations")
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          sessions: formData.sessions,
          experience: formData.experience,
          background: formData.background || null
        }]);

      if (dbError) throw dbError;

      // Step 2 — Create Stripe Checkout session and redirect
      setLoadingStep('redirecting');
      const { data, error: fnError } = await supabase.functions.invoke("create-payment", {
        body: {
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          sessions: formData.sessions,
        },
      });

      if (fnError) throw new Error(fnError.message || "Could not create payment session");
      if (!data?.url) throw new Error("No payment URL returned");

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err: any) {
      toast({
        title: "Something went wrong",
        description: err.message || "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
      setLoadingStep(null);
    }
  };

  const handleClose = () => {
    if (loadingStep) return; // prevent closing while processing
    setIsOpen(false);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        sessions: 'both',
        experience: 'intermediate',
        background: ''
      });
    }, 300);
  };

  return (
    <section id="register" className="py-28 bg-gray-100">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <span className="section-label mb-3">12 — Registration</span>
            <h2 className="font-display font-bold text-black leading-[1.15] mb-6" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
              Reserve Your Seat.<br />July 2026.
            </h2>
            <p className="text-gray-500 text-[16px] leading-[1.8] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              Fill out the registration form to secure your seat in the Summer AI Agent Camp. Choose Session 1 (Jul 13–16), Session 2 (Jul 20–23), or register for both to receive a $100 combo discount.
            </p>
            <div className="space-y-5">
              {[
                'Takes less than 2 minutes',
                'No credit card required upfront',
                'Choose Session 1, Session 2, or both',
                'Seat held for 48 hours after confirmation',
                '$400 per session · $700 for both (Save $100)',
              ].map(p => (
                <div key={p} className="flex items-center gap-4">
                  <Check size={15} className="text-black flex-shrink-0" strokeWidth={2} />
                  <span className="text-[14px] font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-10 md:p-14 text-center">
            <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-7">
              <FileText size={26} className="text-white" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-bold text-[24px] mb-3">Summer AI Agent Camp — July 2026</h3>
            <p className="text-gray-500 text-[14px] leading-[1.7] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              Complete our interactive registration form. Select your preferred session(s), provide your coding background, and we'll hold your seat and send your setup guide.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="btn-black w-full justify-center mb-4 transition-transform hover:scale-[1.01]"
              style={{ display: 'flex', background: '#7c3aed', color: '#fff' }}
            >
              <CreditCard size={15} /> Register & Pay with Stripe
            </button>
            <p className="text-gray-400 text-[11px] tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
              Instant Confirmation · Secure Private Registry
            </p>
          </div>
        </div>

        {/* Sample Certificate Showcase Section */}
        <div className="mt-20 pt-16 border-t border-gray-200 text-center">
          <span className="section-label mb-3">Verified Credential</span>
          <h3 className="font-display font-bold text-[28px] text-black mb-4">Earn Your Certificate of Completion</h3>
          <p className="text-gray-500 text-[15px] leading-[1.8] max-w-[600px] mx-auto mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            Upon successfully completing all labs and presenting your Day 4 Capstone demo, you will receive a verified digital certificate to highlight your local AI agent engineering skills.
          </p>
          <div className="max-w-[500px] mx-auto border border-gray-200 bg-white p-4 shadow-lg group hover:shadow-2xl transition-all duration-300">
            <div className="overflow-hidden bg-gray-50 aspect-square">
              <img 
                src="/sample_certificate.png" 
                alt="Sample Graduation Certificate" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Sample AgentAcademy Graduation Credential
            </div>
          </div>
        </div>
      </div>

      {/* Registration Dialog Form */}
      <Dialog open={isOpen} onOpenChange={(open) => !open && !loadingStep && handleClose()}>
        <DialogContent className="max-w-[92%] md:max-w-xl bg-white text-black p-0 border-gray-200 rounded-none overflow-hidden" style={{ borderRadius: 0 }}>
          <div className="max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-10">
                <DialogHeader className="mb-8">
                  <DialogTitle className="font-display text-[26px] md:text-[30px] font-bold text-black flex items-center gap-2">
                    Summer Registration Form
                  </DialogTitle>
                  <DialogDescription className="text-gray-500 text-[13px] md:text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Complete the details below — you'll be taken to Stripe to pay securely.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label flex items-center gap-1.5"><User size={12} className="text-gray-400" /> First Name *</label>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-field mb-0"
                        type="text"
                        placeholder="First name"
                        required
                        disabled={!!loadingStep}
                      />
                    </div>
                    <div>
                      <label className="form-label">Last Name *</label>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="form-field mb-0"
                        type="text"
                        placeholder="Last name"
                        required
                        disabled={!!loadingStep}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label flex items-center gap-1.5"><Mail size={12} className="text-gray-400" /> Email Address *</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-field mb-0"
                      type="email"
                      placeholder="you@example.com"
                      required
                      disabled={!!loadingStep}
                    />
                  </div>

                  <div>
                    <label className="form-label flex items-center gap-1.5"><Calendar size={12} className="text-gray-400" /> Session Preference</label>
                    <select
                      name="sessions"
                      value={formData.sessions}
                      onChange={handleInputChange}
                      className="form-field mb-0"
                      style={{ background: '#fff' }}
                      disabled={!!loadingStep}
                    >
                      <option value="both">Both Sessions — $700 (Save $100)</option>
                      <option value="session1">Session 1 only (Jul 13–16) — $400</option>
                      <option value="session2">Session 2 only (Jul 20–23) — $400</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label flex items-center gap-1.5"><Code size={12} className="text-gray-400" /> Programming Experience</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="form-field mb-0"
                      style={{ background: '#fff' }}
                      disabled={!!loadingStep}
                    >
                      <option value="beginner">Beginner (Basic Python knowledge)</option>
                      <option value="intermediate">Intermediate (Familiar with Python & REST APIs)</option>
                      <option value="advanced">Advanced (Experienced software engineer)</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label flex items-center gap-1.5"><AlignLeft size={12} className="text-gray-400" /> Background / Notes</label>
                    <textarea
                      name="background"
                      value={formData.background}
                      onChange={handleInputChange}
                      rows={3}
                      className="form-field mb-0"
                      placeholder="Tell us what you're hoping to build with local agents..."
                      style={{ resize: 'vertical' }}
                      disabled={!!loadingStep}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!!loadingStep}
                    className="btn-black w-full justify-center mt-4 h-[52px]"
                    style={{ display: 'flex', background: '#7c3aed', color: '#fff', opacity: loadingStep ? 0.7 : 1 }}
                  >
                    <CreditCard size={15} />
                    {loadingStep === 'saving'
                      ? 'Saving your details…'
                      : loadingStep === 'redirecting'
                      ? 'Redirecting to Stripe…'
                      : 'Register & Pay with Stripe'}
                  </button>

                  {loadingStep && (
                    <p className="text-center text-[12px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {loadingStep === 'saving' ? 'Step 1 of 2 — Saving registration…' : 'Step 2 of 2 — Opening secure checkout…'}
                    </p>
                  )}
                </form>
              </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RegisterSection;
