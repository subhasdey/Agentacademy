import { useState } from "react";
import { Check, FileText, Sparkles, User, Mail, Calendar, Code, AlignLeft, LogIn } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const RegisterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [needsAuth, setNeedsAuth] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sessions: 'both',
    experience: 'intermediate',
    background: ''
  });

  const { toast } = useToast();
  const { user, session, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { error } = await signInWithGoogle(tokenResponse.access_token);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else setNeedsAuth(false);
    },
    onError: () => toast({ title: "Error", description: "Google sign-in failed", variant: "destructive" }),
    flow: "implicit",
  });

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

    // If user is not logged in, show auth step
    if (!user || !session) {
      setNeedsAuth(true);
      return;
    }

    setIsLoading(true);
    try {
      // Save registration to database
      const { error: regError } = await supabase
        .from("registrations")
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            sessions: formData.sessions,
            experience: formData.experience,
            background: formData.background || null
          }
        ]);
      if (regError) throw regError;

      // Create Stripe checkout session
      const { data, error: payError } = await supabase.functions.invoke("create-payment", {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (payError) throw payError;
      if (data?.url) {
        window.location.href = data.url;
        return;
      }
      throw new Error("No payment URL returned");
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setNeedsAuth(false);
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

  const getSessionsLabel = (val: string) => {
    if (val === 'session1') return 'Session 1 only (Jul 13–16)';
    if (val === 'session2') return 'Session 2 only (Jul 20–23)';
    return 'Both Sessions (Jul 13–16 & Jul 20–23)';
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
              Open Registration Form
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
      <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="max-w-[92%] md:max-w-xl bg-white text-black p-0 border-gray-200 rounded-none overflow-hidden" style={{ borderRadius: 0 }}>
          <div className="max-h-[90vh] overflow-y-auto">
            {needsAuth ? (
              <div className="p-8 md:p-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
                  <LogIn size={26} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-[24px] mb-3 text-black">Sign In to Continue</h3>
                <p className="text-gray-500 text-[14px] leading-[1.7] max-w-[360px] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Create a free account or sign in to proceed to secure payment via Stripe.
                </p>
                <button
                  onClick={() => googleLogin()}
                  className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3.5 mb-4 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', cursor: 'pointer', background: '#fff' }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>
                <button
                  onClick={() => { handleClose(); navigate("/login"); }}
                  className="w-full py-3.5 text-[14px] font-semibold text-white"
                  style={{ background: '#0a0a0a', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                >
                  Sign In with Email
                </button>
                <button
                  onClick={() => setNeedsAuth(false)}
                  className="mt-5 text-[12px] text-gray-400 hover:text-black transition-colors"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                >
                  ← Back to form
                </button>
              </div>
            ) : !isSubmitted ? (
              <div className="p-6 md:p-10">
                <DialogHeader className="mb-8">
                  <DialogTitle className="font-display text-[26px] md:text-[30px] font-bold text-black flex items-center gap-2">
                    Summer Registration Form
                  </DialogTitle>
                  <DialogDescription className="text-gray-500 text-[13px] md:text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Complete the details below to secure your seat for July 2026.
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
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-black w-full justify-center mt-4 h-[52px]"
                    style={{ display: 'flex', background: '#7c3aed', color: '#fff', opacity: isLoading ? 0.6 : 1 }}
                  >
                    {isLoading ? "Redirecting to payment…" : user ? "Register & Pay with Stripe" : "Continue to Payment"}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <Sparkles size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-[28px] mb-4 text-black">Registration Submitted!</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed max-w-[420px] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Thank you, <strong className="text-black">{formData.firstName}</strong>! We've successfully registered you for <strong>{getSessionsLabel(formData.sessions)}</strong>.
                </p>
                <div className="bg-gray-50 border border-gray-100 rounded-sm p-5 w-full text-left mb-8 space-y-2 text-[13px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Session:</strong> {getSessionsLabel(formData.sessions)}</div>
                  <div><strong>Status:</strong> Seat Held (48 Hours)</div>
                  <div className="pt-2 text-[11px] text-purple-600 font-semibold uppercase tracking-wider">
                    ★ We will email your pre-camp setup guide within 24 hours.
                  </div>
                </div>
                <button 
                  onClick={handleClose} 
                  className="btn-black px-10 h-[50px]"
                  style={{ background: '#0a0a0a' }}
                >
                  Okay, Got It
                </button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RegisterSection;
