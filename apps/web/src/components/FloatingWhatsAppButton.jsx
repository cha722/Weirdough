
import React from 'react';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/96171068830"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-white p-3 rounded-full shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1.5 transition-all duration-500 active:scale-95 group border border-primary/10 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src="https://i.postimg.cc/dQycnXMf/pngtree-whatsapp-mobile-software-icon-png-image-6315991.png" 
        alt="WhatsApp" 
        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
      />
    </a>
  );
}
