
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`, {
      style: {
        background: 'hsl(var(--primary))',
        color: 'white',
        border: 'none',
      },
    });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="group bg-card rounded-[1.5rem] overflow-hidden shadow-luxury border border-border/60 card-hover flex flex-col h-full relative">
      {/* Premium Photo Frame Effect */}
      <div className="p-3 pb-0">
        <div className="aspect-square overflow-hidden rounded-2xl bg-muted relative flex items-center justify-center shadow-inner-luxury border border-border/40">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
          {imageError ? (
            <span className="text-muted-foreground font-medium flex flex-col items-center justify-center text-center p-4">
              <span className="text-4xl mb-3 opacity-50">🍰</span>
              {product.name}
            </span>
          ) : (
            <img
              src={product.image}
              alt={`${product.name} tres leches cake`}
              onError={handleImageError}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow bg-card relative z-20">
        <div className="absolute -top-4 right-6 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md border-2 border-white">
          Fresh
        </div>
        
        <h3 className="text-2xl font-bold text-card-foreground mb-3 font-serif tracking-tight group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-center justify-between pt-5 border-t border-border/50">
          <span className="text-2xl font-extrabold text-primary tabular-nums">
            ${product.price}
          </span>
          
          <Button
            onClick={handleAddToCart}
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all duration-300 rounded-xl px-6 py-5 flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wide">Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
