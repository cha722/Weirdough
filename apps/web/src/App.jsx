
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from '@/context/CartContext.jsx';
import HomePage from '@/pages/HomePage.jsx';
import CartPage from '@/pages/CartPage.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </Router>
    </CartProvider>
  );
}

export default App;
