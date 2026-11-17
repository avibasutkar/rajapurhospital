import { motion } from 'motion/react';
import { Award, GraduationCap, Stethoscope, HeartPulse } from 'lucide-react';

const team = [
  {
    name: "Dr. Suresh Gouda",
    qualifications: "BAMS, MD (Ayurveda - Rasashastra & Bhaishajya Kalpana)",
    specialization: "Skin Disorders, Hair Care, Allergies, Infections, General Health",
    experience: "15+ Years Experience",
    image: "/images/Dr. Suresh Gouda.jpeg",
    description: "Dr. Suresh Gouda is a highly experienced Ayurvedic physician with over 15 years of clinical experience in treating a wide range of health conditions. He is well known in Shahapur for his patient-centered approach, accurate diagnosis, and effective treatment methods that combine traditional Ayurvedic knowledge with practical clinical expertise. His focus is on identifying the root cause of diseases and providing personalized treatment plans that promote long-term health and wellness."
  }
];

export default function Team() {
  return (
    <section id="doctors" className="py-10 sm:py-16 lg:py-24 bg-gray-50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-xs sm:text-sm font-bold tracking-wider text-primary uppercase mb-1.5 sm:mb-2">Meet Our Expert</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary dark:text-white mb-2.5 sm:mb-4">Our Medical Team</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg">
            Dedicated professionals committed to providing you with the best Ayurvedic healthcare, combining traditional wisdom with modern clinical expertise.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {team.map((doctor, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Doctor Image Container */}
              <div className="lg:w-2/5 relative">
                <div className="aspect-[16/11] sm:aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden bg-gray-100 dark:bg-slate-800 max-h-[320px] sm:max-h-[380px] lg:max-h-none">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent lg:hidden"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                    <h4 className="text-xl sm:text-2xl font-bold mb-0.5">{doctor.name}</h4>
                    <p className="text-white/90 text-xs sm:text-sm font-medium">{doctor.qualifications}</p>
                  </div>
                </div>
              </div>
              
              {/* Doctor Info Body */}
              <div className="lg:w-3/5 p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="hidden lg:block mb-5">
                  <h4 className="text-3xl lg:text-4xl font-bold text-secondary dark:text-white mb-1.5">{doctor.name}</h4>
                  <p className="text-base lg:text-lg font-semibold text-primary">{doctor.qualifications}</p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gray-50 dark:bg-slate-800/80 p-3.5 sm:p-4 rounded-xl border border-gray-100 dark:border-slate-700 flex items-start gap-3">
                      <Stethoscope className="text-primary shrink-0 mt-0.5" size={20} />
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm mb-0.5">Specializations</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{doctor.specialization}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-800/80 p-3.5 sm:p-4 rounded-xl border border-gray-100 dark:border-slate-700 flex items-start gap-3">
                      <Award className="text-primary shrink-0 mt-0.5" size={20} />
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm mb-0.5">Experience</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{doctor.experience}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base text-justify">
                    <p>{doctor.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100 dark:border-slate-800">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1.5 text-secondary dark:text-slate-200 font-medium text-xs sm:text-sm">
                        <GraduationCap className="text-primary" size={18} />
                        <span>MD in Ayurveda</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-secondary dark:text-slate-200 font-medium text-xs sm:text-sm">
                        <HeartPulse className="text-primary" size={18} />
                        <span>Holistic Healing</span>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-all active:scale-95 min-h-[44px]"
                    >
                      <span>Book Consultation</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
