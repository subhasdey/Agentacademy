import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => { console.error("404:", location.pathname); }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display font-black text-white/10 leading-none mb-8" style={{ fontSize: 'clamp(100px,18vw,200px)' }}>404</div>
        <h1 className="font-display font-bold text-white leading-[1.2] mb-4" style={{ fontSize: 'clamp(28px,5vw,40px)' }}>Page not found.</h1>
        <p className="text-white/40 text-[16px] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-black" style={{ background: '#fff', color: '#0a0a0a', display: 'inline-flex' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
