import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const NAV_LINKS = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Education', to: 'education' },
];

const LogoSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform -skew-x-12">
    <rect x="2" y="6" width="10" height="4" rx="0.5" />
    <rect x="8" y="14" width="10" height="4" rx="0.5" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 px-4 pt-6 flex justify-center transition-all duration-300 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-6 rounded-full transition-all duration-500 transform-gpu relative border border-black/10 ${scrolled
            ? 'bg-white backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] py-1.5 px-2.5'
            : 'bg-[#fafafa]/95 backdrop-blur-md py-2.5 px-3.5 shadow-sm'
          } hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]`}
      >
        {/* Logo Area */}
        <div className="flex-shrink-0 cursor-pointer pl-3 pr-2 text-black hover:text-primary transition-colors" title="Shivam.">
          <Link to="home" smooth={true} duration={500}>
            <LogoSvg />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 border-l border-black/10 pl-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="!bg-black !text-white"
              className="text-black hover:bg-black hover:text-white px-5 py-2 rounded-full transition-all duration-300 cursor-pointer text-[13px] font-bold tracking-[0.05em] uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button Array */}
        <div className="hidden md:block pl-2">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block px-5 py-2.5 border border-black/10 hover:border-black/30 bg-black/5 hover:bg-black/10 text-black rounded-full text-[13px] font-bold tracking-wide uppercase transition-all cursor-pointer active:scale-95"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center px-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black transition-colors focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="md:hidden absolute top-[calc(100%+12px)] left-0 w-full rounded-3xl bg-white backdrop-blur-xl shadow-2xl flex flex-col items-center py-6 space-y-2 border border-black/10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                onClick={() => setIsOpen(false)}
                activeClass="!bg-black !text-white"
                className="text-black hover:bg-black hover:text-white px-8 py-3 rounded-full transition-all cursor-pointer text-[14px] font-bold tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full max-w-[200px] h-px bg-black/10 my-4"></div>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-black text-white rounded-full text-[14px] font-bold tracking-widest uppercase transition-all cursor-pointer active:scale-95"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
