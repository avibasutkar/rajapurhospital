import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  HeartPulse, 
  Users, 
  Sparkles, 
  Leaf, 
  CalendarCheck, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Thermometer, 
  ShieldAlert, 
  Droplets, 
  Smile, 
  FileHeart, 
  Info,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';

interface Treatment {
  id: string;
  title: string;
  badge: string;
  shortDescription: string;
  detailedDescription: string;
  highlights: string[];
  icon: React.ReactNode;
  primaryCtaText: string;
  secondaryCtaText?: string;
  isExplorePrimary?: boolean;
  image: string;
  imageAlt: string;
  modalDetails: {
    overview: string;
    ayurvedicApproach: string;
    whoMayBenefit: string;
    keyElements: string[];
    whatToExpect: string;
    responsibleNotice?: string;
  };
}

const specializedTreatments: Treatment[] = [
  {
    id: "weight-management",
    title: "Weight Management",
    badge: "Ayurvedic Wellness",
    shortDescription: "Personalized Ayurvedic approaches to support healthy weight management through appropriate diet, lifestyle guidance, and traditional therapies.",
    detailedDescription: "Provide individualized Ayurvedic consultation, dietary guidance, lifestyle recommendations, and suitable traditional therapies based on the patient's constitution and health assessment.",
    highlights: [
      "Personalized Ayurvedic assessment",
      "Diet and lifestyle guidance",
      "Individualized wellness plans",
      "Traditional Ayurvedic therapies when appropriate"
    ],
    icon: <Scale size={26} className="text-primary" />,
    primaryCtaText: "Book Consultation",
    secondaryCtaText: "Learn More",
    image: "/images/weight_management.jpg",
    imageAlt: "Personalized Ayurvedic weight management, nutrition, and lifestyle guidance at Rajapur Hospital",
    modalDetails: {
      overview: "Our Weight Management program offers constitution-based, holistic healthcare aimed at supporting balanced body weight through personalized dietary adjustments, lifestyle counseling, and supportive traditional therapies.",
      ayurvedicApproach: "In classical Ayurveda, weight imbalances (Sthoulya) are assessed through individual Prakriti (body constitution), Agni (digestive fire), and Meda Dhatu metabolism. Instead of restrictive diets, therapies focus on strengthening digestion, eliminating metabolic sluggishness, and restoring harmonious body function.",
      whoMayBenefit: "Individuals seeking a structured, natural approach to metabolic balance, those experiencing weight management difficulties linked to lifestyle or stress, and patients seeking sustainable dietary guidance.",
      keyElements: [
        "In-depth constitutional (Prakriti) assessment",
        "Personalized dietary guidelines (Ahara) using natural foods",
        "Daily routine & seasonal regimen guidance (Dinacharya & Ritucharya)",
        "Traditional external treatments such as Udwarthana when clinically recommended",
        "Continuous follow-up and gradual lifestyle stabilization"
      ],
      whatToExpect: "An initial comprehensive consultation to review your medical history, dietary habits, and physical constitution, followed by a personalized, realistic step-by-step wellness plan.",
      responsibleNotice: "All treatment recommendations are individualized based on physician assessment. Weight management outcomes vary based on individual constitution, adherence to dietary advice, and lifestyle modifications."
    }
  },
  {
    id: "pain-treatment",
    title: "Pain Treatment",
    badge: "Pain & Mobility Care",
    shortDescription: "Ayurvedic consultation and personalized traditional therapies to support the management of common musculoskeletal and body pain.",
    detailedDescription: "Provide individualized Ayurvedic assessment and treatment planning for suitable pain-related concerns, using traditional therapies, lifestyle recommendations, and supportive care under professional supervision.",
    highlights: [
      "Individual pain assessment",
      "Personalized Ayurvedic treatment plans",
      "Traditional external therapies",
      "Lifestyle and wellness guidance"
    ],
    icon: <HeartPulse size={26} className="text-primary" />,
    primaryCtaText: "Book Consultation",
    secondaryCtaText: "Learn More",
    image: "/images/pain_treatment.jpg",
    imageAlt: "Ayurvedic pain management and musculoskeletal joint care at Rajapur Hospital",
    modalDetails: {
      overview: "Our Pain Treatment protocol provides supportive Ayurvedic care for acute and chronic musculoskeletal discomfort, joint stiffness, and mobility challenges through time-tested classical therapies.",
      ayurvedicApproach: "Musculoskeletal pain and joint stiffness are primarily understood as manifestations of vitiated Vata dosha affecting the Sandhi (joints), Asthi (bones), and Snayu (ligaments). Therapies employ warm medicated oils, herbal fomentations, and gentle localized treatments to soothe Vata and nourish surrounding tissues.",
      whoMayBenefit: "Individuals experiencing joint stiffness, backache, neck tension, knee discomfort, muscle fatigue, or postural strain who wish to explore non-invasive supportive Ayurvedic therapies.",
      keyElements: [
        "Comprehensive clinical assessment of joint flexibility and posture",
        "Localized warm herbal oil therapies (such as Kati Basti, Janu Basti, or Greeva Basti) when appropriate",
        "Traditional fomentation therapies (Patra Pinda Sweda / Nadi Sweda)",
        "Supervised therapeutic applications under doctor care",
        "Ergonomic, postural, and gentle mobility recommendations"
      ],
      whatToExpect: "A clinical evaluation by our Ayurvedic physician to identify the underlying doshic imbalance, followed by a series of comfortable, supervised external therapies designed to ease tension and improve daily comfort.",
      responsibleNotice: "Therapies provide supportive management for musculoskeletal comfort. Severe injuries, fractures, or urgent surgical conditions require appropriate emergency or specialized conventional medical care."
    }
  },
  {
    id: "infertility",
    title: "Infertility – Male & Female",
    badge: "Reproductive Wellness",
    shortDescription: "Confidential Ayurvedic consultation and personalized supportive care for male and female reproductive wellness.",
    detailedDescription: "Offer confidential consultations for individuals and couples seeking Ayurvedic support for reproductive wellness. Treatment should be presented as personalized supportive care following an appropriate health assessment.",
    highlights: [
      "Confidential individual and couple consultations",
      "Separate consideration of male and female reproductive health",
      "Personalized diet and lifestyle guidance",
      "Ayurvedic wellness support"
    ],
    icon: <Users size={26} className="text-primary" />,
    primaryCtaText: "Book Consultation",
    secondaryCtaText: "Learn More",
    image: "/images/infertility.png",
    imageAlt: "Ayurvedic supportive care for male and female reproductive wellness at Rajapur Hospital",
    modalDetails: {
      overview: "We offer private, compassionate Ayurvedic consultations for individuals and couples seeking supportive care to optimize reproductive wellness, hormonal balance, and vitality.",
      ayurvedicApproach: "Ayurveda considers reproductive health (Shukra & Artava Dhatus) as the essence of all biological tissues. Care centers on optimizing digestive health (Agni), clearing metabolic toxins (Ama), reducing psychological stress (Manasika Doshas), and nourishing reproductive tissues with traditional supportive herbs and nutrient-rich diets.",
      whoMayBenefit: "Couples planning for conception, individuals seeking natural supportive therapies for reproductive vitality, or those experiencing stress-related hormonal or menstrual cycle irregularities.",
      keyElements: [
        "Strictly private and compassionate consultation sessions",
        "Detailed assessment of both partners' physical and emotional well-being",
        "Targeted nutrition plans supporting reproductive tissue nourishment",
        "Stress mitigation through holistic lifestyle guidance",
        "Traditional Ayurvedic supportive formulations selected after physician evaluation"
      ],
      whatToExpect: "A thorough, empathetic consultation exploring medical history, lifestyle factors, and stress levels. You will receive customized wellness recommendations focused on strengthening overall reproductive health.",
      responsibleNotice: "Important Medical Notice: Our services provide personalized supportive Ayurvedic care following appropriate clinical evaluation. We do not claim guaranteed conception, guaranteed fertility improvement, permanent cures, or guaranteed treatment outcomes."
    }
  },
  {
    id: "panchakarma",
    title: "Ayurvedic Panchakarma Treatment",
    badge: "Detoxification & Rejuvenation",
    shortDescription: "Traditional Ayurvedic Panchakarma therapies personalized according to individual needs and administered under professional supervision.",
    detailedDescription: "Panchakarma is a traditional Ayurvedic therapeutic approach involving individualized preparatory, therapeutic, and post-treatment care. Treatment plans should be developed following consultation and health assessment.",
    highlights: [
      "Personalized pre-treatment assessment",
      "Traditional Snehana and Swedana therapies where appropriate",
      "Individualized Panchakarma procedures",
      "Post-treatment dietary and lifestyle guidance",
      "Professional supervision throughout the treatment"
    ],
    icon: <Sparkles size={26} className="text-primary" />,
    primaryCtaText: "Explore Treatment",
    secondaryCtaText: "Book Consultation",
    isExplorePrimary: true,
    image: "/images/panchakarma.jpg",
    imageAlt: "Authentic Ayurvedic Panchakarma therapy with herbal oils, potlis, and natural preparations at Rajapur Hospital",
    modalDetails: {
      overview: "Panchakarma is the classical five-fold purification and rejuvenation discipline of Ayurveda, designed to clear deep-seated metabolic impurities and re-establish constitutional balance.",
      ayurvedicApproach: "The classical process is divided into three vital stages: Poorva Karma (preparatory internal/external oleation and steam), Pradhana Karma (the primary bio-cleansing procedures personalized to the individual's needs), and Paschat Karma (restorative dietary regimen to reignite digestive fire).",
      whoMayBenefit: "Individuals seeking systematic bodily detoxification, those experiencing chronic fatigue, seasonal toxic accumulation, or those seeking constitutional restoration under medical supervision.",
      keyElements: [
        "Initial clinical assessment to determine suitability and specific doshic requirements",
        "Preparatory therapies: Abhyanga (medicated oil application) and Swedana (steam bath)",
        "Classical procedures administered as clinically indicated (e.g., Basti, Nasya, etc.)",
        "Samsarjana Krama: Graduated dietary transition following cleansing",
        "Continuous supervision by qualified Ayurvedic doctors and experienced therapists"
      ],
      whatToExpect: "A disciplined, multi-day therapeutic program carried out in our dedicated Panchakarma facility, adhering strictly to classical hygiene and procedural guidelines.",
      responsibleNotice: "Panchakarma therapies are customized according to individual health assessment. Panchakarma is not presented as a guaranteed cure or as a universal remedy for all chronic diseases."
    }
  },
  {
    id: "swarnabindu-prashana",
    title: "Swarnabindu Prashana",
    badge: "Traditional Ayurvedic Practice",
    shortDescription: "A traditional Ayurvedic wellness practice involving a Swarna-based preparation administered according to Ayurvedic practice under qualified supervision.",
    detailedDescription: "Present Swarnabindu Prashana as a traditional Ayurvedic pediatric wellness practice. Explain that administration, preparation, and dosage should be determined by a qualified Ayurvedic physician according to appropriate clinical considerations.",
    highlights: [
      "Traditional Ayurvedic pediatric wellness practice",
      "Qualified physician supervision",
      "Age-appropriate administration",
      "Preparation according to appropriate Ayurvedic standards",
      "Parent/guardian consultation"
    ],
    icon: <Leaf size={26} className="text-primary" />,
    primaryCtaText: "Book Consultation",
    secondaryCtaText: "Learn More",
    image: "/images/swarnabindu.jpg",
    imageAlt: "Swarnabindu Prashana - Traditional Ayurvedic Practice for Children at Rajapur Hospital",
    modalDetails: {
      overview: "Swarnabindu Prashana is an ancient, revered pediatric wellness ritual documented in the classical Ayurvedic text Kashyapa Samhita, traditionally administered to support children's overall vitality.",
      ayurvedicApproach: "A specialized preparation combining purified Swarna Bhasma (processed gold according to classical standards), pure honey, and medicated ghee (such as Brahmi Ghrita) is administered in minute, age-appropriate drops by a trained physician, traditionally observed on Pushya Nakshatra days.",
      whoMayBenefit: "Children from infancy up to 16 years of age, whose parents seek traditional Ayurvedic pediatric wellness practices alongside regular pediatric health routines.",
      keyElements: [
        "Administration by a qualified Ayurvedic physician",
        "Formulation prepared strictly according to traditional Ayurvedic pharmacopoeia standards",
        "Pre-administration health screening of the child",
        "Detailed parent/guardian consultation on childhood diet and routine",
        "Monthly scheduled Pushya Nakshatra administration cycles"
      ],
      whatToExpect: "A calm, child-friendly consultation and quick oral drop administration, accompanied by helpful parenting advice on seasonal nutrition and daily routines for children.",
      responsibleNotice: "Important Regulatory & Medical Notice: Swarnabindu Prashana is a traditional Ayurvedic wellness practice. It is not an alternative to standard mandatory government pediatric vaccinations, nor does it guarantee immunity, cure diseases, or guarantee intelligence or developmental speed."
    }
  }
];

const generalServices = [
  {
    title: "General Healthcare",
    description: "Comprehensive diagnosis and treatment for common illnesses, seasonal diseases, and preventive healthcare.",
    icon: <HeartPulse size={28} className="text-primary" />
  },
  {
    title: "Ayurveda Consultation",
    description: "Traditional Ayurvedic consultation with personalized treatment plans for better health.",
    icon: <Leaf size={28} className="text-primary" />
  },
  {
    title: "Fever & Flu Treatment",
    description: "Effective management of viral fever, seasonal flu, cough, cold, and infections.",
    icon: <Thermometer size={28} className="text-primary" />
  },
  {
    title: "Allergy Treatment",
    description: "Diagnosis and treatment for skin allergies, seasonal allergies, and allergic reactions.",
    icon: <ShieldAlert size={28} className="text-primary" />
  },
  {
    title: "Infection Treatment",
    description: "Treatment for bacterial, fungal, and other common infections.",
    icon: <Droplets size={28} className="text-primary" />
  },
  {
    title: "Skin Disease Treatment",
    description: "Expert care for itching, rashes, eczema, fungal infections, pigmentation, and chronic skin disorders.",
    icon: <Smile size={28} className="text-primary" />
  },
  {
    title: "Hair Care Treatment",
    description: "Comprehensive treatment for hair fall, dandruff, scalp infections, damaged hair, and hair growth.",
    icon: <Sparkles size={28} className="text-primary" />
  },
  {
    title: "Lifestyle Consultation",
    description: "Health guidance through Ayurvedic diet, lifestyle modifications, and preventive care.",
    icon: <FileHeart size={28} className="text-primary" />
  }
];

const specialities = [
  "Weight Management", "Pain & Mobility Care", "Male & Female Reproductive Wellness", 
  "Ayurvedic Panchakarma", "Swarnabindu Prashana", "General Healthcare", 
  "Ayurveda Medicine", "Hair Fall Treatment", "Skin Allergy Treatment", 
  "Skin Disease Management", "Preventive Healthcare", "Personalized Consultation"
];

export default function Services() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [activeTreatmentIndex, setActiveTreatmentIndex] = useState(0);
  const [showAllMobile, setShowAllMobile] = useState(false);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTreatment(null);
      }
    };

    if (selectedTreatment) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTreatment]);

  return (
    <div className="bg-white">
      
      {/* Specialized Treatments Section */}
      <section id="services" className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2.5 sm:mb-3">
              <ShieldCheck size={16} />
              <span>Specialized Ayurvedic Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-secondary dark:text-white mb-2.5 sm:mb-4">
              Our Specialized Treatments
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed text-justify md:text-center">
              Providing personalized Ayurvedic consultation, classical therapies, and compassionate healthcare with a patient-first approach in Shahapur.
            </p>
          </div>

          {/* Mobile Tab Bar & Controls (Visible on mobile/tablet to eliminate excessive vertical scrolling) */}
          <div className="block lg:hidden mb-6">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Select Treatment ({activeTreatmentIndex + 1}/{specializedTreatments.length})
              </span>
              <button
                type="button"
                onClick={() => setShowAllMobile(!showAllMobile)}
                className="text-xs font-semibold text-primary hover:underline cursor-pointer min-h-[36px] flex items-center"
              >
                {showAllMobile ? "Switch to Compact View" : "View All Cards"}
              </button>
            </div>

            {!showAllMobile && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
                {specializedTreatments.map((t, idx) => {
                  const isActive = activeTreatmentIndex === idx;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTreatmentIndex(idx)}
                      className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[40px] flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      <span>{t.title}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Mobile Single Active Card View (when not showAllMobile) */}
          <div className="block lg:hidden mb-12">
            {!showAllMobile ? (
              <motion.div
                key={specializedTreatments[activeTreatmentIndex].id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-lg flex flex-col"
              >
                {/* Image Showcase */}
                <div className="relative h-44 sm:h-52 overflow-hidden bg-gray-100 dark:bg-slate-800">
                  <img 
                    src={specializedTreatments[activeTreatmentIndex].image} 
                    alt={specializedTreatments[activeTreatmentIndex].imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 text-secondary text-xs font-bold shadow-xs">
                      {specializedTreatments[activeTreatmentIndex].badge}
                    </span>
                  </div>

                  {/* Icon Emblem */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 flex items-center justify-center shadow-md">
                    {specializedTreatments[activeTreatmentIndex].icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">
                      {specializedTreatments[activeTreatmentIndex].title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {specializedTreatments[activeTreatmentIndex].shortDescription}
                    </p>

                    {/* Swarnabindu Prashana Dedicated 2-Column Benefits Grid */}
                    {specializedTreatments[activeTreatmentIndex].id === "swarnabindu-prashana" ? (
                      <div className="my-3 pt-3 border-t border-gray-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-2">Key Pediatric Benefits</span>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                            <ShieldCheck size={16} className="text-primary shrink-0" />
                            <span className="text-xs font-bold text-secondary dark:text-white">Immunity</span>
                          </div>
                          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                            <Sparkles size={16} className="text-primary shrink-0" />
                            <span className="text-xs font-bold text-secondary dark:text-white">Growth</span>
                          </div>
                          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                            <Smile size={16} className="text-primary shrink-0" />
                            <span className="text-xs font-bold text-secondary dark:text-white">Brain</span>
                          </div>
                          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                            <HeartPulse size={16} className="text-primary shrink-0" />
                            <span className="text-xs font-bold text-secondary dark:text-white">Vision</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Standard Highlights List */
                      <div className="space-y-2 mb-4 pt-3 border-t border-gray-100 dark:border-slate-800">
                        {specializedTreatments[activeTreatmentIndex].highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center gap-2.5">
                    <a
                      href="#contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all shadow-xs min-h-[44px]"
                    >
                      <CalendarCheck size={16} />
                      <span>Book Consultation</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedTreatment(specializedTreatments[activeTreatmentIndex])}
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-secondary dark:text-white hover:border-primary hover:text-primary text-xs sm:text-sm font-semibold transition-all min-h-[44px]"
                    >
                      <span>Learn More</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            ) : null}
          </div>

          {/* Full Grid of Specialized Treatments (Visible on Desktop OR when Mobile 'View All' is enabled) */}
          <div className={`${showAllMobile ? 'grid' : 'hidden lg:grid'} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20`}>
            {specializedTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Showcase */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100 dark:bg-slate-800">
                  <img 
                    src={treatment.image} 
                    alt={treatment.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md text-secondary dark:text-white text-xs font-bold shadow-xs">
                      {treatment.badge}
                    </span>
                  </div>

                  {/* Icon Emblem */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md flex items-center justify-center shadow-md">
                    {treatment.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary dark:text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {treatment.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                      {treatment.shortDescription}
                    </p>

                    {/* Swarnabindu Prashana 2-Column Benefits Grid */}
                    {treatment.id === "swarnabindu-prashana" ? (
                      <div className="my-3 sm:my-4 pt-3 border-t border-gray-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-2">Key Pediatric Benefits</span>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-primary/10 border border-primary/20">
                            <ShieldCheck size={15} className="text-primary shrink-0" />
                            <span className="text-xs font-bold text-secondary dark:text-white">Immunity</span>
                          </div>
                          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-primary/10 border border-primary/20">
                            <Sparkles size={15} className="text-primary shrink-0" />
                            <span className="text-xs font-bold text-secondary dark:text-white">Growth</span>
                          </div>
                          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-primary/10 border border-primary/20">
                            <Smile size={15} className="text-primary shrink-0" />
                            <span className="text-xs font-bold text-secondary dark:text-white">Brain</span>
                          </div>
                          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-primary/10 border border-primary/20">
                            <HeartPulse size={15} className="text-primary shrink-0" />
                            <span className="text-xs font-bold text-secondary dark:text-white">Vision</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Highlights List */
                      <div className="space-y-2 mb-4 sm:mb-6 pt-2 border-t border-gray-100 dark:border-slate-800">
                        {treatment.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center gap-2.5 sm:gap-3">
                    {treatment.isExplorePrimary ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setSelectedTreatment(treatment)}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all shadow-xs cursor-pointer min-h-[44px]"
                        >
                          <Info size={16} />
                          <span>Explore Treatment</span>
                        </button>
                        <a
                          href="#contact"
                          className="inline-flex items-center justify-center p-2.5 sm:p-3 rounded-xl border border-gray-200 dark:border-slate-700 text-secondary dark:text-white hover:border-primary hover:text-primary transition-all cursor-pointer min-h-[44px] min-w-[44px]"
                          title="Book Consultation"
                          aria-label={`Book Consultation for ${treatment.title}`}
                        >
                          <CalendarCheck size={18} />
                        </a>
                      </>
                    ) : (
                      <>
                        <a
                          href="#contact"
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all shadow-xs cursor-pointer min-h-[44px]"
                        >
                          <CalendarCheck size={16} />
                          <span>Book Consultation</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => setSelectedTreatment(treatment)}
                          className="inline-flex items-center justify-center px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-slate-700 text-secondary dark:text-white hover:border-primary hover:text-primary text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px]"
                        >
                          <span>Learn More</span>
                        </button>
                      </>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* General Healthcare Services: Compact 2-Column Grid on Mobile */}
          <div className="border-t border-gray-100 dark:border-slate-800 pt-10 sm:pt-16">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary dark:text-white mb-2 sm:mb-3">
                General Healthcare & Preventive Care
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm sm:text-base">
                In addition to specialized therapies, we provide prompt and dependable medical care for routine, seasonal, and everyday health requirements.
              </p>
            </div>

            {/* 2-Column on Mobile, 4-Column on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
              {generalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  className="bg-gray-50 dark:bg-slate-800/60 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:shadow-lg hover:shadow-primary/5 transition-all border border-gray-100 dark:border-slate-700/60 hover:border-primary/20 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white dark:bg-slate-700 rounded-lg sm:rounded-xl shadow-xs flex items-center justify-center mb-2.5 sm:mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="text-xs sm:text-base font-bold text-secondary dark:text-white mb-1 leading-snug">{service.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-[11px] sm:text-xs leading-relaxed line-clamp-3 sm:line-clamp-none">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Modal / Learn More Dialog */}
      <AnimatePresence>
        {selectedTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col z-10 my-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 sm:px-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {selectedTreatment.icon}
                  </div>
                  <div>
                    <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider">
                      {selectedTreatment.badge}
                    </span>
                    <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-secondary">
                      {selectedTreatment.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTreatment(null)}
                  className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                
                {/* Treatment Image Showcase */}
                <div className="relative rounded-2xl overflow-hidden shadow-xs border border-gray-100 max-h-64 bg-gray-50 flex items-center justify-center">
                  <img 
                    src={selectedTreatment.image} 
                    alt={selectedTreatment.imageAlt}
                    className="w-full h-full max-h-64 object-cover sm:object-contain"
                  />
                </div>

                {/* Treatment Overview */}
                <div>
                  <h4 className="text-base font-bold text-secondary mb-2 flex items-center gap-2">
                    <Stethoscope size={18} className="text-primary" />
                    Treatment Overview
                  </h4>
                  <p className="text-gray-600 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                    {selectedTreatment.modalDetails.overview}
                  </p>
                </div>

                {/* Ayurvedic Approach */}
                <div>
                  <h4 className="text-base font-bold text-secondary mb-2 flex items-center gap-2">
                    <Leaf size={18} className="text-primary" />
                    The Ayurvedic Approach
                  </h4>
                  <p className="text-gray-600">
                    {selectedTreatment.modalDetails.ayurvedicApproach}
                  </p>
                </div>

                {/* Who May Benefit */}
                <div>
                  <h4 className="text-base font-bold text-secondary mb-2 flex items-center gap-2">
                    <Users size={18} className="text-primary" />
                    Who May Benefit From Consultation
                  </h4>
                  <p className="text-gray-600">
                    {selectedTreatment.modalDetails.whoMayBenefit}
                  </p>
                </div>

                {/* Key Treatment Elements */}
                <div>
                  <h4 className="text-base font-bold text-secondary mb-3 flex items-center gap-2">
                    <Sparkles size={18} className="text-primary" />
                    Key Treatment Elements
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedTreatment.modalDetails.keyElements.map((element, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-gray-700">
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{element}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to Expect */}
                <div>
                  <h4 className="text-base font-bold text-secondary mb-2 flex items-center gap-2">
                    <CalendarCheck size={18} className="text-primary" />
                    What to Expect
                  </h4>
                  <p className="text-gray-600">
                    {selectedTreatment.modalDetails.whatToExpect}
                  </p>
                </div>

                {/* Medically Responsible Notice */}
                {selectedTreatment.modalDetails.responsibleNotice && (
                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
                    <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <p>{selectedTreatment.modalDetails.responsibleNotice}</p>
                  </div>
                )}

              </div>

              {/* Modal Footer CTA Bar */}
              <div className="px-6 py-4 sm:px-8 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-gray-500 text-center sm:text-left">
                  Have questions about this treatment? Speak with our Ayurvedic doctor.
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedTreatment(null)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedTreatment(null)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-sm cursor-pointer"
                  >
                    <CalendarCheck size={17} />
                    <span>Book Consultation</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Twacha Ayurveda Section (Preserved & Optimized for Mobile) */}
      <section id="twacha-ayurveda" className="py-10 sm:py-16 lg:py-24 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block bg-primary text-white font-semibold px-3.5 py-1 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
              Specialized Care
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary dark:text-white mb-2 sm:mb-3">Twacha Ayurveda</h2>
            <h3 className="text-base sm:text-lg lg:text-xl text-primary font-medium mb-3 sm:mb-6">Specialized Skin & Hair Care</h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg text-justify md:text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              Twacha Ayurveda is a dedicated wellness center within Rajapur Hospital that focuses on Ayurvedic solutions for various skin and hair concerns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <motion.div 
                whileHover={{ scale: 1.01, y: -3 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-800 flex flex-col group"
              >
                <div className="h-36 sm:h-40 -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 mb-5 sm:mb-6 rounded-t-2xl overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600" alt="Hair Treatment Therapy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-white flex items-center gap-2">
                    <Sparkles size={18} />
                    <h4 className="font-bold text-base sm:text-lg">Hair Treatments</h4>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 flex-1">
                  {["Hair Fall Treatment", "Hair Growth Therapy", "Damaged Hair Treatment", "Dandruff Treatment", "Scalp Allergy Treatment", "Scalp Infection Treatment", "Hair Strengthening Therapy"].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                      <span className="text-primary font-bold mt-0.5">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.01, y: -3 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-800 flex flex-col group"
              >
                <div className="h-36 sm:h-40 -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 mb-5 sm:mb-6 rounded-t-2xl overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600" alt="Skin Treatment" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-white flex items-center gap-2">
                    <Smile size={18} />
                    <h4 className="font-bold text-base sm:text-lg">Skin Treatments</h4>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 flex-1">
                  {["Itching", "Skin Allergies", "Skin Rashes", "Fungal Infections", "Skin Irritation", "Chronic Skin Disorders", "Preventive Skin Care"].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                      <span className="text-primary font-bold mt-0.5">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialities Section (Preserved) */}
      <section id="specialities" className="py-10 sm:py-16 bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Our Specialities</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <motion.div
            className="flex w-max whitespace-nowrap gap-3 sm:gap-4 px-2"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Double the array for seamless looping */}
            {[...specialities, ...specialities].map((speciality, index) => (
              <div
                key={index}
                className="inline-flex bg-white/10 backdrop-blur-sm border border-white/20 px-5 sm:px-8 py-2.5 sm:py-4 rounded-full text-xs sm:text-base font-medium hover:bg-white hover:text-secondary transition-colors cursor-default whitespace-nowrap"
              >
                {speciality}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
