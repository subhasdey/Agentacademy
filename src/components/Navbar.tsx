import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Layers } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "/#about" },
    { label: "Blog", href: "/#blog" },
    { label: "Curriculum", href: "/#courses" },
    { label: "Demos", href: "/#demos" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Schedule", href: "/#schedule" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <Layers size={16} className="text-white" />
          </div>
          <span className="font-display font-bold text-[17px] text-black tracking-tight">AI Agent Camp</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="text-[13px] font-medium text-gray-500 hover:text-black transition-colors no-underline"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="/#register" className="btn-black" style={{ padding: '10px 20px', fontSize: '12px' }}>Enroll Now</a>
        </div>

        <button className="lg:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block text-[14px] font-medium text-gray-600 hover:text-black py-1">
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a href="/#register" className="btn-black w-full text-center" onClick={() => setOpen(false)}>Enroll Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
