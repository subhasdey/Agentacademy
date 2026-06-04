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
  const { signIn, signUp, signInWithGoogle } = useAuth();
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

          {/* Google Sign-In */}
          <button
            type="button"
            onClick={async () => {
              const { error } = await signInWithGoogle();
              if (error) toast.error(error.message);
            }}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 mb-6 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
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

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[11px] text-gray-400 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

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
