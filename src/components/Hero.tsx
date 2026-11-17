import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PhoneCall, 
  CalendarCheck, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Leaf, 
  Stethoscope, 
  Building2, 
  Pause, 
  Play,
  ArrowRight
} from 'lucide-react';

interface Slide {
  id: number;
  badge: string;
  badgeIcon: typeof Sparkles;
  title: string;
  highlightText: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
    isPhone?: boolean;
  };
  image: string;
  imageAlt: string;
  statValue: string;
  statLabel: string;
  pillTitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "Your Trusted Healthcare Partner Since 2011",
    badgeIcon: Sparkles,
    title: "Rajapur Hospital",
    highlightText: "Compassionate Care & Healing",
    description: "Providing quality Ayurvedic and General Healthcare services with compassionate care for patients in Shahapur and surrounding areas. Dedicated to delivering safe, affordable, and effective treatments.",
    primaryCta: {
      text: "Book Consultation",
      href: "#contact"
    },
    secondaryCta: {
      text: "Call: +91 9845024504",
      href: "tel:+919845024504",
      isPhone: true
    },
    image: "/images/about.jpeg",
    imageAlt: "Rajapur Hospital Building and Healthcare Care",
    statValue: "14+ Years",
    statLabel: "Of Healthcare Service",
    pillTitle: "Overview"
  },
  {
    id: 2,
    badge: "Holistic Wellness & Rejuvenation",
    badgeIcon: Leaf,
    title: "Authentic Ayurveda",
    highlightText: "& Traditional Panchakarma",
    description: "Experience time-tested healing sciences tailored for contemporary lifestyles. Specialized Ayurvedic therapies, Panchakarma detoxification, and chronic disorder management with natural remedies.",
    primaryCta: {
      text: "Explore Services",
      href: "#services"
    },
    secondaryCta: {
      text: "Twacha Ayurveda",
      href: "#twacha-ayurveda"
    },
    image: "/images/paanchakarya.jpeg",
    imageAlt: "Ayurvedic and Panchakarma Therapy Room",
    statValue: "100% Natural",
    statLabel: "Ayurvedic Therapies",
    pillTitle: "Ayurveda"
  },
  {
    id: 3,
    badge: "Specialized Medical Consultation",
    badgeIcon: Stethoscope,
    title: "Expert Doctors",
    highlightText: "& Personalized Diagnostics",
    description: "Led by Dr. Suresh Gouda and our compassionate team, we offer comprehensive consultations, individual attention, and customized wellness plans for lasting recovery.",
    primaryCta: {
      text: "Meet Our Doctors",
      href: "#doctors"
    },
    secondaryCta: {
      text: "Book Appointment",
      href: "#contact"
    },
    image: "/images/Consultation.jpeg",
    imageAlt: "Doctor Consultation Room at Rajapur Hospital",
    statValue: "Thousands+",
    statLabel: "Patients Treated",
    pillTitle: "Consultation"
  },
  {
    id: 4,
    badge: "Modern Patient-First Amenities",
    badgeIcon: Building2,
    title: "Modern Facility",
    highlightText: "& Comfortable Recovery",
    description: "Designed with patient comfort in mind, featuring serene waiting lounges, clean observation units, hygienic environment, and 24/7 dedicated support staff.",
    primaryCta: {
      text: "View Gallery",
      href: "#gallery"
    },
    secondaryCta: {
      text: "Hospital Location",
      href: "#contact"
    },
    image: "/images/waiting_hall.jpeg",
    imageAlt: "Spacious Waiting Area at Rajapur Hospital",
    statValue: "24/7",
    statLabel: "Patient Support",
    pillTitle: "Facilities"
  }
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Autoplay management
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide, current]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const activeSlide = slides[current];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <section 
      id="home" 
      className="relative bg-secondary/5 pt-5 pb-7 sm:pt-10 sm:pb-12 lg:pt-16 lg:pb-20 overflow-hidden select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Rajapur Hospital Highlights"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Slider Content Area - Clean Natural Height on Mobile */}
        <div className="lg:min-h-[460px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSlide.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center"
            >
              
              {/* Left Column: Text & CTA Content (Order 1 on mobile: heading, short desc, primary CTA first) */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 sm:gap-2 self-start px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs sm:text-sm mb-3 sm:mb-4 shadow-xs border border-primary/15"
                >
                  <BadgeIcon size={15} className="text-primary shrink-0 animate-pulse" />
                  <span className="truncate max-w-[270px] sm:max-w-none">{activeSlide.badge}</span>
                </motion.div>
                
                {/* Heading (approx 32-40px on mobile) */}
                <motion.h1 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="text-2xl sm:text-4xl lg:text-5xl font-bold text-secondary dark:text-white leading-[1.2] mb-2.5 sm:mb-4 tracking-tight"
                >
                  {activeSlide.title}{' '}
                  <span className="text-primary text-xl sm:text-3xl lg:text-4xl font-semibold block mt-0.5 sm:mt-1">
                    {activeSlide.highlightText}
                  </span>
                </motion.h1>
                
                {/* Description (limited to 2-3 lines on mobile) */}
                <motion.p 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-7 leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-none"
                >
                  {activeSlide.description}
                </motion.p>
                
                {/* Action Buttons - Compact & Touch-Friendly */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-2 lg:mb-0"
                >
                  <a 
                    href={activeSlide.primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-primary/90 transition-all shadow-md active:scale-95 min-h-[44px]"
                  >
                    <CalendarCheck size={17} />
                    <span>{activeSlide.primaryCta.text}</span>
                  </a>
                  
                  <a 
                    href={activeSlide.secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-secondary dark:text-white border border-gray-200 dark:border-slate-700 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:border-primary/40 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-xs active:scale-95 min-h-[44px]"
                  >
                    {activeSlide.secondaryCta.isPhone ? (
                      <PhoneCall size={16} className="text-primary" />
                    ) : (
                      <ArrowRight size={16} className="text-primary" />
                    )}
                    <span>{activeSlide.secondaryCta.text}</span>
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Visual Showcase Frame with Reduced Height on Mobile */}
              <div className="lg:col-span-5 relative flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-lg"
                >
                  {/* Image Container with Controlled Aspect Ratio */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] border-2 sm:border-4 border-white dark:border-slate-800 bg-gray-200 dark:bg-slate-800 group">
                    <img 
                      src={activeSlide.image}
                      alt={activeSlide.imageAlt} 
                      className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent pointer-events-none"></div>
                    
                    {/* Bottom image caption banner */}
                    <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 text-white flex items-center justify-between pointer-events-none">
                      <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wider bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full">
                        {activeSlide.pillTitle}
                      </span>

                      <span className="text-[11px] sm:text-xs font-semibold opacity-90">
                        Slide 0{activeSlide.id} / 0{slides.length}
                      </span>
                    </div>

                    {/* Stat Badge - Integrated Neatly Inside Corner */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/90 dark:bg-slate-800/90 py-1 px-2.5 rounded-xl shadow-md flex items-center gap-2 border border-gray-100/80 dark:border-slate-700/80 backdrop-blur-md">
                      <BadgeIcon size={14} className="text-primary shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold text-secondary dark:text-white">
                        {activeSlide.statValue}
                      </span>
                    </div>

                    {/* Top Right Quick Tag */}
                    <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-secondary text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span>
                      <span>Open Daily</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Compact Controls Bar: Single Row on Mobile & Desktop */}
        <div className="mt-5 sm:mt-8 pt-3 sm:pt-5 border-t border-gray-200/70 dark:border-slate-700/60 flex items-center justify-between gap-2">
          
          {/* Slide Tab Pills for Tablet/Desktop (hidden on small mobile to conserve vertical space) */}
          <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-full pb-0.5">
            {slides.map((slide, index) => {
              const isActive = index === current;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap min-h-[36px] ${
                    isActive 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white/80 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-white hover:text-primary border border-gray-200/60 dark:border-slate-700'
                  }`}
                  aria-label={`Go to slide ${index + 1}: ${slide.pillTitle}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-gray-400'}`}></span>
                  <span>0{slide.id}</span>
                  <span className="font-normal opacity-90">{slide.pillTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Sleek Carousel Indicators for all screens */}
          <div 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-gray-200/60 dark:border-slate-700/60 shadow-xs"
            role="tablist"
            aria-label="Carousel slide indicators"
          >
            {slides.map((slide, index) => {
              const isActive = current === index;
              return (
                <button
                  key={`carousel-indicator-${slide.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full cursor-pointer transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'w-6 sm:w-8 bg-primary ring-2 ring-primary/30 shadow-xs'
                      : 'w-2 sm:w-2.5 bg-gray-300 dark:bg-slate-600 hover:bg-gray-400'
                  }`}
                />
              );
            })}
          </div>

          {/* Slider Navigation & Play/Pause Controls (Touch friendly >= 40-44px) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Auto-play toggle button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:text-primary transition-colors cursor-pointer shadow-xs flex items-center justify-center"
              aria-label={isPlaying ? "Pause slider autoplay" : "Start slider autoplay"}
              title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            {/* Previous Slide Button */}
            <button
              onClick={prevSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer shadow-xs flex items-center justify-center active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Slide Indicator counter */}
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 px-1 font-mono">
              0{current + 1}/0{slides.length}
            </span>

            {/* Next Slide Button */}
            <button
              onClick={nextSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer shadow-xs flex items-center justify-center active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

        {/* Animated Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-slate-800 h-0.5 sm:h-1 rounded-full mt-3 overflow-hidden">
          <motion.div 
            key={current + (isPlaying ? '-playing' : '-paused')}
            initial={{ width: "0%" }}
            animate={{ width: isPlaying ? "100%" : "0%" }}
            transition={{ duration: isPlaying ? SLIDE_DURATION / 1000 : 0, ease: "linear" }}
            className="h-full bg-primary"
          />
        </div>

      </div>
      
      {/* Decorative background ambient glows */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
}
