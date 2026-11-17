import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Send, Loader2, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: '',
    age: '',
    symptoms: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a short delay for better UX feedback
    setTimeout(() => {
      const message = `*New Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Age:* ${formData.age}%0A*Gender:* ${formData.gender}%0A*Symptoms:* ${formData.symptoms}%0A*Address:* ${formData.address}`;
      window.open(`https://wa.me/919845024504?text=${message}`, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <>
      <section id="contact" className="py-10 sm:py-16 lg:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-primary uppercase mb-1.5 sm:mb-2">Get In Touch</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary dark:text-white mb-2 sm:mb-3">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm sm:text-base text-justify md:text-center">We are here to help you. Reach out to us for appointments or any queries.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-800/60 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-gray-100 dark:border-slate-800"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-secondary dark:text-white mb-5 sm:mb-8">Rajapur Hospital</h4>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary dark:text-white text-sm sm:text-base mb-0.5">Address</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm sm:text-base leading-relaxed">
                      Opp. Indian Oil Petrol Bunk<br />
                      Ganesh Nagar, B.B. Road<br />
                      Shahapur, District: Yadgiri<br />
                      Karnataka – 585223
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary dark:text-white text-sm sm:text-base mb-0.5">Phone</h5>
                    <a href="tel:+919845024504" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm sm:text-base min-h-[44px] inline-flex items-center">
                      +91 98450 24504
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary dark:text-white text-sm sm:text-base mb-0.5">Email</h5>
                    <a href="mailto:dr.suripatil11@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-xs sm:text-base min-h-[44px] inline-flex items-center break-all">
                      dr.suripatil11@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                    <Clock size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary dark:text-white text-sm sm:text-base mb-0.5">Working Hours</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm sm:text-base">
                      Open Daily for Consultations.<br />
                      Please call to book an appointment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-gray-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <a
                    href="https://maps.app.goo.gl/YMuYfDv7c1yhosE96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-xs sm:text-sm md:text-base min-h-[44px]"
                  >
                    <MapPin size={18} />
                    <span>Get Google Directions</span>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-white rounded-lg shadow-sm border border-gray-100">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://maps.app.goo.gl/YMuYfDv7c1yhosE96"
                        alt="QR Code for Directions"
                        className="w-12 h-12 sm:w-14 sm:h-14"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">Scan for<br />Directions</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-slate-800 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <h4 className="text-xl sm:text-2xl font-bold text-secondary dark:text-white mb-1 sm:mb-2">Book an Appointment</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-5 sm:mb-8 text-xs sm:text-sm sm:text-base text-justify">Fill the details below to request an appointment via WhatsApp.</p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Patient Name *</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-xs sm:text-sm min-h-[44px]" placeholder="Enter full name" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                    <input required pattern="[0-9]{10}" title="Please enter exactly 10 digits" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-xs sm:text-sm min-h-[44px]" placeholder="Enter 10-digit number" />
                  </div>
                  <div>
                    <label htmlFor="age" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Age *</label>
                    <input required type="number" id="age" name="age" value={formData.age} onChange={handleChange} min="1" max="115" className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-xs sm:text-sm min-h-[44px]" placeholder="Patient age" />
                  </div>
                </div>

                <div>
                  <label htmlFor="gender" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Gender *</label>
                  <select required id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-xs sm:text-sm min-h-[44px]">
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="symptoms" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Symptoms / Reason for Visit *</label>
                  <input required type="text" id="symptoms" name="symptoms" value={formData.symptoms} onChange={handleChange} className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-xs sm:text-sm min-h-[44px]" placeholder="E.g., Fever, Hair Fall, Skin Allergy" />
                </div>

                <div>
                  <label htmlFor="address" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address *</label>
                  <textarea required id="address" name="address" value={formData.address} onChange={handleChange} rows={2} className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-xs sm:text-sm" placeholder="Enter full address"></textarea>
                </div>

                <button disabled={isSubmitting} type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg mt-4 sm:mt-6 disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px] text-xs sm:text-sm md:text-base cursor-pointer">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Request via WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white pt-8 pb-20 sm:py-12 border-t border-secondary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <h2 className="font-bold text-xl">Rajapur Hospital</h2>
              </div>
              <p className="text-gray-300 mb-4 max-w-sm">
                Providing trusted Ayurvedic and General Healthcare services in Shahapur since 2011.
              </p>

            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About Hospital', 'Services', 'Twacha Ayurveda', 'Specialities'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                <a href="https://maps.app.goo.gl/YMuYfDv7c1yhosE96" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                  <MapPin size={20} className="text-primary shrink-0 mt-1" />
                  <span>Shahapur, Yadgiri, Karnataka</span>
                </a>
                <a href="tel:+919845024504" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone size={20} className="text-primary shrink-0" />
                  <span>+91 98450 24504</span>
                </a>
                <a href="mailto:dr.suripatil11@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail size={20} className="text-primary shrink-0" />
                  <span>dr.suripatil11@gmail.com</span>
                </a>
                <a
                  href="https://www.instagram.com/twachhaayurvedabydrsureshgouda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram size={20} className="text-pink-400 shrink-0" />
                  <span>Follow us on Insta</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-3">
            <p>© {new Date().getFullYear()} Rajapur Hospital. All Rights Reserved.</p>
            <a
              href="https://www.instagram.com/twachhaayurvedabydrsureshgouda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"
            >
              <Instagram size={17} className="text-pink-400" />
              <span>Follow us on Insta</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
