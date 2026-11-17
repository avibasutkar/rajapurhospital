import { MessageCircle, PhoneCall } from 'lucide-react';

export default function FloatingActions() {
  const phoneNumber = "+919845024504";
  // WhatsApp link format
  const whatsappUrl = `https://wa.me/919845024504?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Rajapur%20Hospital.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:right-6 md:left-auto md:flex md:flex-col gap-3">
      {/* Mobile view: Full width split buttons */}
      <div className="flex md:hidden w-full shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 flex items-center justify-center gap-2 font-semibold text-sm min-h-[48px] active:scale-[0.99] transition-all"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
        <a 
          href={`tel:${phoneNumber}`}
          className="flex-1 bg-primary hover:bg-primary/95 text-white py-3.5 flex items-center justify-center gap-2 font-semibold text-sm border-l border-white/20 min-h-[48px] active:scale-[0.99] transition-all"
        >
          <PhoneCall size={18} />
          <span>Call Now</span>
        </a>
      </div>

      {/* Desktop view: Floating circular buttons */}
      <div className="hidden md:flex flex-col gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
            Chat on WhatsApp
          </span>
        </a>
        
        <a
          href={`tel:${phoneNumber}`}
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative"
          aria-label="Call Now"
        >
          <PhoneCall size={26} />
          <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
            Call Us
          </span>
        </a>
      </div>
    </div>
  );
}
