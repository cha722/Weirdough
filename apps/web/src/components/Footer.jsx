
import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white p-1 rounded-full shadow-md border-2 border-primary-foreground/20">
                <img 
                  src="https://i.postimg.cc/HnXKHVby/cropped-circle-image.png" 
                  alt="Weirdough logo" 
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <span className="text-3xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Weirdough
              </span>
            </div>
            <p className="text-primary-foreground/80 max-w-sm leading-relaxed text-lg">
              Insanely addictive handcrafted tres leches cakes made with love and the finest ingredients.
            </p>
          </div>

          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent mb-8 block">
              Contact Us
            </span>
            <div className="space-y-5">
              <div className="flex items-start space-x-4 group">
                <div className="p-2 bg-primary-foreground/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-primary-foreground/90 pt-1">
                  Koraytem, Madame Curie Str.<br />Beirut
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-primary-foreground/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href="tel:71068830"
                  className="text-primary-foreground/90 hover:text-white transition-colors duration-300 text-lg"
                >
                  71068830
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-primary-foreground/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href="https://wa.me/96171068830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-white transition-colors duration-300 text-lg"
                >
                  WhatsApp: +961 71068830
                </a>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent mb-8 block">
              Follow Us
            </span>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-primary-foreground/10 rounded-2xl hover:bg-accent hover:text-accent-foreground hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 border border-primary-foreground/10"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-primary-foreground/10 rounded-2xl hover:bg-accent hover:text-accent-foreground hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 border border-primary-foreground/10"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Weirdough. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/70">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
