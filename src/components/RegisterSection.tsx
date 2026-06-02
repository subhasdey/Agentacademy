import { useState } from "react";
import { Check, FileText, Sparkles, User, Mail, Calendar, Code, AlignLeft } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const RegisterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Registration incomplete",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitted(true);
    toast({
      title: "Registration successful!",
      description: "We've sent a confirmation email to " + formData.email,
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset submission state after the modal closes
    setTimeout(() => {
      setIsSubmitted(false);
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
            {!isSubmitted ? (
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
                    className="btn-black w-full justify-center mt-4 h-[52px]" 
                    style={{ display: 'flex', background: '#7c3aed', color: '#fff' }}
                  >
                    Submit Registration
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
