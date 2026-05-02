import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layers, ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const Login = () => {
  const [tab, setTab] = useState<'login'|'signup'>('login');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (tab === 'signup') {
      const { error } = await signUp(email, password, fullName);
      if (error) toast.error(error.message);
      else toast.success("Account created! Check your email to confirm.");
    } else {
      const { error } = await signIn(email, password);
      if (error) toast.error(error.message);
      else navigate("/dashboard");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-[960px] border border-gray-200 grid md:grid-cols-2">
        {/* Left — dark panel */}
        <div className="bg-black p-16 flex flex-col justify-between">
          <div>
            <Link to="/" className="flex items-center gap-3 no-underline mb-12">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <Layers size={15} className="text-black" />
              </div>
              <span className="font-display font-bold text-[17px] text-white">AgentAcademy</span>
            </Link>
            <h2 className="font-display font-bold text-white text-[36px] leading-[1.2] mb-5">
              Access your AI learning dashboard.
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.8]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Track progress, attend live sessions, download certificates, and connect with your cohort — all in one place.
            </p>
          </div>
          <div className="mt-10 space-y-0">
            {[
              'Live progress tracking across all 12 modules',
              'Recordings of every session within 2 hours',
              'Download your co-certified credential',
              'Direct access to your mentor and cohort'
            ].map((p, i) => (
              <div key={p} className="flex items-start gap-4 py-5" style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <ArrowRight size={14} className="text-white/30 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-white/55 text-[13px]" style={{ fontFamily: 'Inter, sans-serif' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="p-16">
          <div className="flex border border-gray-200 mb-8">
            {(['login','signup'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className="flex-1 py-3 text-[12px] font-bold uppercase tracking-widest transition-all"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: tab === t ? '#0a0a0a' : '#fff',
                  color: tab === t ? '#fff' : '#9ca3af',
                  border: 'none', cursor: 'pointer'
                }}>
                {t === 'login' ? 'Log In' : 'Sign Up'}
              </button>
            ))}
          </div>

          <p className="text-gray-500 text-[14px] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            {tab === 'login' ? 'Welcome back. ' : 'New here? '}
            <button onClick={() => setTab(tab === 'login' ? 'signup' : 'login')}
              className="text-black font-bold" style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'Inter, sans-serif' }}>
              {tab === 'login' ? 'Need an account?' : 'Already have one?'}
            </button>
          </p>

          <form onSubmit={handleSubmit}>
            {tab === 'signup' && (
              <>
                <label className="form-label">Full Name</label>
                <input className="form-field" type="text" placeholder="Your full name" value={fullName} onChange={e => setFullName(e.target.value)} required />
              </>
            )}
            <label className="form-label">Email Address</label>
            <input className="form-field" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
            <label className="form-label">Password</label>
            <input className="form-field" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />

            {tab === 'login' && (
              <div className="flex justify-end -mt-2 mb-6">
                <button type="button" className="text-[12px] text-gray-400 hover:text-black transition-colors" style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'Inter, sans-serif' }}>
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" disabled={loading}
              className="btn-black w-full justify-center mt-2"
              style={{ display:'flex', height:'50px', opacity: loading ? 0.6 : 1 }}>
              {loading ? 'Please wait…' : tab === 'login' ? 'Log In' : 'Create Account'}
              <ArrowRight size={13} />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-[12px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              By continuing you agree to our{' '}
              <a href="#" className="text-black font-semibold">Terms</a> and{' '}
              <a href="#" className="text-black font-semibold">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
