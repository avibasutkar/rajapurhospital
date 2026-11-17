import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  sectionId: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home', sectionId: 'home' },
  { name: 'About Hospital', href: '#about-hospital', sectionId: 'about-hospital' },
  { name: 'Our Doctors', href: '#doctors', sectionId: 'doctors' },
  { name: 'Services', href: '#services', sectionId: 'services' },
  { name: 'Twacha Ayurveda', href: '#twacha-ayurveda', sectionId: 'twacha-ayurveda' },
  { name: 'Gallery', href: '#gallery', sectionId: 'gallery' },
  { name: 'Contact', href: '#contact', sectionId: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Initialize theme from localStorage or system preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Track scroll position to adjust navbar height and detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Toggle compact navbar state when scrolled
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].sectionId);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 py-1.5 sm:py-2.5 px-2 sm:px-6 lg:px-8">
      {/* Subtle Rounded Container with soft shadow and slight border */}
      <div 
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-3xl transition-all duration-300 border ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md shadow-secondary/5 dark:shadow-black/40 border-gray-200/80 dark:border-slate-800'
            : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xs shadow-secondary/5 border-gray-100/90 dark:border-slate-800/80'
        }`}
      >
        <div 
          className={`flex justify-between items-center px-3 sm:px-6 transition-all duration-300 ${
            isScrolled ? 'h-14 sm:h-16' : 'h-15 sm:h-18'
          }`}
        >
          {/* Hospital Branding on the LEFT */}
          <a 
            href="#home"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl shrink-0"
            aria-label="Rajapur Hospital Home"
          >
            <div className="relative shrink-0">
              <img 
                src="/images/Rajapur logo.png" 
                alt="Rajapur Hospital Logo"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl shadow-xs object-contain transition-transform duration-300 group-hover:scale-105 border border-gray-100 dark:border-slate-700 bg-white"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-white dark:ring-slate-900"></span>
            </div>
            
            <div className="flex flex-col text-left">
              <span className="font-bold text-base sm:text-lg lg:text-xl text-secondary dark:text-white leading-tight tracking-tight group-hover:text-primary transition-colors">
                Rajapur Hospital
              </span>
              <span className="text-[10px] sm:text-xs text-primary font-semibold tracking-wide hidden min-[360px]:block">
                Healthcare Since 2011
              </span>
            </div>
          </a>

          {/* Desktop Navigation links in the CENTER/RIGHT (>= 1024px) */}
          <nav 
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => handleNavClick(link.sectionId)}
                  className={`relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm transition-all duration-200 rounded-lg whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive 
                      ? 'text-primary font-bold' 
                      : 'text-secondary/80 dark:text-slate-200 font-medium hover:text-primary hover:bg-gray-50/80 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.name}</span>
                  
                  {isActive && (
                    <motion.span 
                      layoutId="navbar-active-underline"
                      className="absolute bottom-0.5 left-2.5 right-2.5 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action Section (Theme Toggle + Call Now) */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-secondary dark:text-slate-200 hover:text-primary hover:bg-gray-100/80 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Light Mode" : "Dark Mode"}
            >
              <span className="inline-block transform transition-transform duration-300 hover:rotate-12">
                {isDark ? <Sun size={19} className="text-amber-400" /> : <Moon size={19} />}
              </span>
            </button>

            <a 
              href="tel:+919845024504"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 xl:px-5 py-2.5 rounded-full font-semibold text-xs xl:text-sm shadow-sm hover:shadow-md hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap min-h-[40px]"
              aria-label="Call Rajapur Hospital at +91 9845024504"
            >
              <Phone size={15} className="text-white shrink-0" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile & Tablet Actions: Call Icon + Hamburger Menu (meets User Specification) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            {/* Quick Call Icon (Min 44px touch target) */}
            <a 
              href="tel:+919845024504"
              className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl bg-primary text-white flex items-center justify-center shadow-xs hover:bg-primary/90 active:scale-95 transition-all cursor-pointer"
              aria-label="Call Hospital at +91 9845024504"
              title="Call Hospital"
            >
              <Phone size={18} />
            </a>

            {/* Mobile/Tablet Hamburger / Close Button (Min 44px touch target) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-secondary dark:text-white hover:text-primary hover:bg-gray-100/80 dark:hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="sr-only">Toggle navigation menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Slide-Down Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-100 dark:border-slate-800 px-3.5 pt-3 pb-5"
            >
              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.sectionId;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => handleNavClick(link.sectionId)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all min-h-[44px] ${
                        isActive 
                          ? 'bg-primary/10 text-primary font-bold' 
                          : 'text-secondary dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-primary'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                      )}
                    </a>
                  );
                })}

                {/* Mobile Drawer Bottom Row: Theme Toggle + Full Width Call Now */}
                <div className="pt-3 mt-2 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between px-2 py-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Appearance</span>
                    <button 
                      onClick={toggleTheme}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-xs font-semibold text-secondary dark:text-slate-200 hover:text-primary transition-colors cursor-pointer min-h-[36px]"
                      aria-label="Toggle dark mode"
                    >
                      {isDark ? (
                        <>
                          <Sun size={15} className="text-amber-400" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon size={15} />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a 
                    href="tel:+919845024504"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl font-bold text-sm shadow-md transition-all w-full min-h-[44px] active:scale-[0.99]"
                  >
                    <Phone size={17} />
                    <span>Call Now (+91 98450 24504)</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
