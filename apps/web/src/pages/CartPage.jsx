
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton.jsx';
import CheckoutModal from '@/components/CheckoutModal.jsx';
import { useCart } from '@/context/CartContext.jsx';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <>
      <Helmet>
        <title>Shopping Cart - Weirdough</title>
        <meta
          name="description"
          content="Review your order and complete checkout via WhatsApp for fresh tres leches cakes delivery in Beirut."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow section-padding">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-4 mb-10">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
                  Your Cart
                </h1>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-20 bg-card rounded-3xl border-2 border-dashed border-primary/20">
                  <div className="bg-primary/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-10 h-10 text-primary/40" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Your cart is feeling empty
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Time to add some insanely addictive tres leches to your order.
                  </p>
                  <Link to="/">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-xl font-bold text-lg">
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Browse Menu
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    {cart.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-card rounded-2xl p-4 md:p-6 shadow-sm border border-primary/10 flex flex-col sm:flex-row gap-5 hover:border-primary/30 transition-colors"
                      >
                        <div className="w-full sm:w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-muted">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-grow flex flex-col justify-between">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-card-foreground">
                                {item.name}
                              </h3>
                              <p className="text-sm font-medium text-primary mt-1">
                                {item.section === 'tray' ? 'Tres Leches Tray' : 'Portion for 2'}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 -mr-2 -mt-2 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4 sm:mt-0">
                            <div className="flex items-center space-x-1 bg-secondary rounded-xl p-1">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 text-foreground"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              
                              <span className="text-base font-bold text-foreground w-8 text-center tabular-nums">
                                {item.quantity}
                              </span>
                              
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 text-foreground"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <span className="text-2xl font-extrabold text-foreground tabular-nums">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-card rounded-3xl p-6 shadow-lg border border-primary/10 sticky top-32">
                      <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                        Order Summary
                      </h3>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-muted-foreground">
                          <span>Subtotal</span>
                          <span className="font-medium text-foreground tabular-nums">${getCartTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Delivery</span>
                          <span className="text-sm text-primary font-medium">Calculated on WhatsApp</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-8 pt-4 border-t border-border">
                        <span className="text-lg font-bold text-foreground">
                          Total
                        </span>
                        <span className="text-4xl font-extrabold text-primary tabular-nums">
                          ${getCartTotal().toFixed(2)}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <Button
                          onClick={() => setIsCheckoutOpen(true)}
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                        >
                          Checkout via WhatsApp
                        </Button>
                        <Link to="/" className="block">
                          <Button
                            variant="outline"
                            className="w-full py-6 rounded-xl font-semibold border-primary/20 text-primary hover:bg-primary/5 transition-all"
                          >
                            Add More Items
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </main>

        <Footer />
        <FloatingWhatsAppButton />
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
      </div>
    </>
  );
}
