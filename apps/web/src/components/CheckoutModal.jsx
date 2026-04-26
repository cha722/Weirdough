
import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext.jsx';

export default function CheckoutModal({ isOpen, onClose }) {
  const { cart, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Delivery address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const itemsList = cart
      .map(item => `${item.name} (${item.section === 'tray' ? 'Tray' : 'Portion'}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');

    const message = `Hello Weirdough 👋

New Order:
${itemsList}

Total: $${getCartTotal().toFixed(2)}

Customer Info:
Name: ${formData.name}
Address: ${formData.address}${formData.phone ? `\nPhone: ${formData.phone}` : ''}${formData.notes ? `\nNotes: ${formData.notes}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/96171068830?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    setFormData({ name: '', address: '', phone: '', notes: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-t-8 border-t-primary rounded-2xl">
        <DialogHeader className="mb-4">
          <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4 mt-2">
            <ShoppingBag className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center text-foreground">Complete your order</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-sm font-bold text-foreground">
              Full Name <span className="text-primary">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="text-foreground placeholder:text-muted-foreground focus-visible:ring-primary border-primary/20 bg-background h-11"
            />
            {errors.name && (
              <p className="text-sm text-destructive font-medium">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="address" className="text-sm font-bold text-foreground">
              Delivery Address <span className="text-primary">*</span>
            </Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your delivery address"
              rows={3}
              className="text-foreground placeholder:text-muted-foreground focus-visible:ring-primary border-primary/20 bg-background resize-none"
            />
            {errors.address && (
              <p className="text-sm text-destructive font-medium">{errors.address}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-sm font-bold text-foreground">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Optional"
              className="text-foreground placeholder:text-muted-foreground focus-visible:ring-primary border-primary/20 bg-background h-11"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="notes" className="text-sm font-bold text-foreground">
              Order Notes
            </Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special requests? (optional)"
              rows={2}
              className="text-foreground placeholder:text-muted-foreground focus-visible:ring-primary border-primary/20 bg-background resize-none"
            />
          </div>

          <DialogFooter className="gap-3 sm:gap-0 pt-4 border-t border-border mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="transition-all duration-200 border-primary/20 hover:bg-primary/5 hover:text-primary font-semibold"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            >
              Send Order via WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
