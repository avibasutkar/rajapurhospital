import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: "/images/waiting_hall.jpeg",
    alt: "Rajapur Hospital Reception Area",
    title: "Reception & Waiting Area"
  },
  {
    id: 2,
    url: "/images/Consultation.jpeg",
    alt: "Doctor's Consultation Room",
    title: "Consultation Room"
  },
  {
    id: 3,
    url: "/images/observation.jpeg",
    alt: "Ayurvedic Treatment Room",
    title: "Ayurvedic Treatment Room"
  },
  {
    id: 4,
    url: "/images/paanchakarya.jpeg",
    alt: "Specialized Therapy Room",
    title: "Specialized Therapy Room"
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-play functionality for the inline gallery
  useEffect(() => {
    if (!isHovered && !isLightboxOpen) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, isLightboxOpen]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
    if (distance > 40) {
      goToNext();
    } else if (distance < -40) {
      goToPrev();
    }
  };

  return (
    <section id="gallery" className="py-10 sm:py-16 lg:py-24 bg-gray-50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <h2 className="text-xs sm:text-sm font-bold tracking-wider text-primary uppercase mb-1.5 sm:mb-2">Our Facilities</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary dark:text-white mb-2 sm:mb-3">Hospital Gallery</h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm sm:text-base text-justify md:text-center">Take a tour of our modern facilities, consultation rooms, and specialized Ayurvedic treatment centers designed for your comfort and healing.</p>
        </div>

        {/* Inline Slideshow with Touch Support */}
        <div 
          className="relative max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[16/10] sm:aspect-video bg-gray-900 group select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img 
                src={galleryImages[currentIndex].url} 
                alt={galleryImages[currentIndex].alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 text-white">
                <motion.h4 
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg sm:text-2xl md:text-3xl font-bold mb-1"
                >
                  {galleryImages[currentIndex].title}
                </motion.h4>
                <motion.p 
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-xs sm:text-sm hidden sm:block"
                >
                  {galleryImages[currentIndex].alt}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls (Visible on mobile, Hover on desktop) */}
          <button 
            onClick={goToPrev}
            className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all opacity-85 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 cursor-pointer min-h-[44px] min-w-[44px]"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all opacity-85 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 cursor-pointer min-h-[44px] min-w-[44px]"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all cursor-pointer min-h-[40px] min-w-[40px]"
            aria-label="View fullscreen"
          >
            <Maximize2 size={18} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 flex gap-1.5">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === index 
                    ? "w-6 sm:w-8 h-2 bg-primary" 
                    : "w-2 h-2 bg-white/60 hover:bg-white/90"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex items-center gap-2 sm:gap-4 max-w-5xl mx-auto mt-3 sm:mt-5 overflow-x-auto pb-1 no-scrollbar">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative rounded-lg sm:rounded-xl overflow-hidden aspect-video w-20 sm:w-auto flex-1 shrink-0 transition-all cursor-pointer ${
                currentIndex === index ? 'ring-2 sm:ring-4 ring-primary ring-offset-1 sm:ring-offset-2' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img src={image.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Close fullscreen"
            >
              <X size={32} />
            </button>

            <button 
              onClick={goToPrev}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={`lightbox-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl w-full px-16"
            >
              <img 
                src={galleryImages[currentIndex].url} 
                alt={galleryImages[currentIndex].alt} 
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-center mt-6 text-white">
                <h4 className="text-2xl font-bold">{galleryImages[currentIndex].title}</h4>
                <p className="text-gray-400 mt-2">{currentIndex + 1} of {galleryImages.length}</p>
              </div>
            </motion.div>

            <button 
              onClick={goToNext}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
