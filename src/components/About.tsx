import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-900">
      {/* About Hospital Section */}
      <section id="about-hospital" className="py-10 sm:py-16 lg:py-24 bg-gray-50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Image Showcase with Responsive Aspect Ratio */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[16/10] sm:aspect-[4/3] max-h-[280px] sm:max-h-none bg-gray-200 dark:bg-slate-800">
                <img 
                  src="/images/about.jpeg" 
                  alt="Hospital Facility" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Award Badge - Compact on Mobile, Full on Desktop */}
              <div className="absolute bottom-3 right-3 sm:-bottom-6 sm:-right-6 bg-primary text-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2.5 sm:gap-4 border border-white/20">
                <Award size={24} className="sm:w-8 sm:h-8 shrink-0" />
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-3xl font-bold">15+</span>
                    <span className="text-xs sm:text-base font-semibold">Years</span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-medium opacity-90">Of Excellence</p>
                </div>
              </div>
            </motion.div>
            
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs sm:text-sm font-bold tracking-wider text-primary uppercase mb-1.5 sm:mb-2">About Us</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary dark:text-white mb-3 sm:mb-5">
                About Rajapur Hospital
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base text-justify">
                <p>
                  Established in 2011, Rajapur Hospital has become one of the trusted healthcare centers in Shahapur, Yadgiri District, Karnataka. Since its inception, the hospital has been committed to providing quality healthcare services with a combination of traditional Ayurvedic principles and modern patient care practices.
                </p>
                <p>
                  Our mission is to offer affordable, effective, and compassionate treatment to every patient while maintaining the highest standards of healthcare. Over the years, Rajapur Hospital has earned the trust of thousands of families by delivering personalized medical care and ensuring patient satisfaction.
                </p>
                
                {/* Collapsible on Mobile, Always Visible on Desktop */}
                <div className="lg:block">
                  <AnimatePresence initial={false}>
                    {(isExpanded || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 sm:space-y-4 overflow-hidden pt-1"
                      >
                        <p>
                          The hospital specializes in the diagnosis and treatment of common illnesses, seasonal diseases, skin disorders, hair-related problems, allergies, infections, and preventive healthcare. Along with general medical care, we proudly operate Twacha Ayurveda, a dedicated center focused on advanced Ayurvedic treatments for skin and hair conditions.
                        </p>
                        <p>
                          Our experienced medical team emphasizes understanding the root cause of every illness and providing long-lasting treatment rather than temporary relief. With a patient-friendly environment, ethical medical practices, and years of experience, Rajapur Hospital continues to serve the people of Shahapur and nearby regions with dedication, compassion, and excellence in healthcare.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Read More Toggle Button */}
                <div className="block lg:hidden pt-1">
                  <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs sm:text-sm hover:underline py-1.5 cursor-pointer min-h-[44px]"
                  >
                    <span>{isExpanded ? "Read Less" : "Read Full Story"}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
