import { motion } from 'motion/react';
import { CheckCircle2, UserCheck, CalendarCheck, FileSearch, ShieldCheck } from 'lucide-react';

const reasons = [
  "Established Since 2011",
  "15+ Years Experienced Doctor",
  "Trusted Healthcare Center",
  "Personalized Treatment",
  "Affordable Healthcare",
  "Patient-Centered Care",
  "Ethical Medical Practice",
  "Advanced Ayurvedic Treatment",
  "Dedicated Skin & Hair Care",
  "Friendly Environment"
];

const steps = [
  { step: 1, title: "Book Your Appointment", icon: <CalendarCheck size={24} /> },
  { step: 2, title: "Doctor Consultation", icon: <UserCheck size={24} /> },
  { step: 3, title: "Accurate Diagnosis", icon: <FileSearch size={24} /> },
  { step: 4, title: "Personalized Treatment", icon: <ShieldCheck size={24} /> },
  { step: 5, title: "Follow-up Care", icon: <CheckCircle2 size={24} /> },
];

export default function Features() {
  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs sm:text-sm font-bold tracking-wider text-primary uppercase mb-1.5 sm:mb-2">Why Rajapur Hospital?</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary dark:text-white mb-3 sm:mb-5">Why Choose Rajapur Hospital?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 text-justify">
                We are dedicated to providing the highest standard of care through a blend of traditional Ayurvedic wisdom and modern medical practices.
              </p>
              
              {/* 2-Column Responsive Grid on all screens */}
              <div className="grid grid-cols-2 gap-x-2.5 sm:gap-x-4 gap-y-3 sm:gap-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium leading-tight">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" 
                alt="Hospital Care" 
                className="rounded-2xl sm:rounded-3xl w-full h-40 sm:h-56 lg:h-64 object-cover mt-4 sm:mt-8 shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600" 
                alt="Ayurveda Herbs" 
                className="rounded-2xl sm:rounded-3xl w-full h-40 sm:h-56 lg:h-64 object-cover shadow-md"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Patient Care Process Section */}
      <section className="py-10 sm:py-16 lg:py-24 bg-gray-50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-primary uppercase mb-1.5 sm:mb-2">Our Process</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary dark:text-white mb-2 sm:mb-3">Patient Care Process</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm sm:text-base text-justify md:text-center">A simple, transparent, and patient-friendly journey towards your recovery.</p>
          </div>

          {/* Process Steps: Compact 2-column or flex row */}
          <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-start gap-4 md:gap-2 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 dark:bg-slate-700 z-0"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`flex flex-col items-center text-center relative z-10 w-full md:w-1/5 ${
                  index === steps.length - 1 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-slate-800 rounded-full shadow-md border-2 sm:border-4 border-primary/20 flex flex-col items-center justify-center text-primary mb-2.5 sm:mb-3 relative bg-clip-padding">
                  {step.icon}
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 sm:w-7 sm:h-7 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xs shadow-xs">
                    {step.step}
                  </div>
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-secondary dark:text-white">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
