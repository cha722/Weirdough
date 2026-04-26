
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Instagram, Facebook } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';

export default function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md border-b border-primary-foreground/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center space-x-3 group hover:opacity-90 transition-opacity duration-300">
            <img 
              src="https://i.postimg.cc/HnXKHVby/cropped-circle-image.png" 
              alt="Weirdough Logo" 
              className="h-14 w-auto md:h-16 object-contain rounded-full shadow-sm border-2 border-primary-foreground/20"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 hover:text-white/80 hover:-translate-y-0.5 ${
                location.pathname === '/' ? 'text-white border-b-2 border-accent pb-1' : 'text-primary-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/#menu"
              className="text-sm font-medium text-primary-foreground hover:text-white/80 hover:-translate-y-0.5 transition-all duration-300"
            >
              Menu
            </Link>
            <Link
              to="/#contact"
              className="text-sm font-medium text-primary-foreground hover:text-white/80 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="hidden sm:flex items-center space-x-3 border-r border-primary-foreground/20 pr-4 md:pr-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <Link
              to="/cart"
              className="relative p-2.5 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-xl transition-all duration-300 active:scale-95 group border border-primary-foreground/10"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-sm border-2 border-primary ring-2 ring-primary ring-inset">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
