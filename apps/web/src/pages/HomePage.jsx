
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { productSections } from '@/data/products.js';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Weirdough - Insanely Addictive Tres Leches</title>
        <meta
          name="description"
          content="Discover insanely addictive tres leches cakes in Beirut by Weirdough. Order trays and portions with unique flavors. Delivery available."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden bg-foreground">
            {/* Background image with Heavy Teal Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: 'url(https://i.postimg.cc/Zny5PFpN/9d905654-4835-4a8d-887a-56ddc0328f93-cover.jpg)',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-foreground/90 mix-blend-multiply"></div>
            
            <div className="relative z-10 container-custom text-center px-4 py-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-2 rounded-full shadow-2xl mb-8 relative">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                  <img 
                    src="https://i.postimg.cc/HnXKHVby/cropped-circle-image.png" 
                    alt="Weirdough logo" 
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full object-contain border-4 border-white relative z-10"
                  />
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white drop-shadow-lg">
                  Weirdough
                </h1>
                
                <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full mb-10 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <p className="text-xl md:text-2xl font-bold tracking-wide">
                    Insanely Addictive
                  </p>
                </div>
                
                <a
                  href="#menu"
                  className="group inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <span>Explore Our Menu</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
            
            {/* Decorative bottom curve */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-background rounded-t-[100%] scale-x-110 translate-y-8"></div>
          </section>

          {/* WhatsApp Banner Section */}
          <section className="relative py-0 overflow-hidden bg-secondary">
            <img
              src="https://i.postimg.cc/Zny5PFpN/9d905654-4835-4a8d-887a-56ddc0328f93-cover.jpg"
              alt="WhatsApp Banner"
              className="w-full h-auto object-cover max-w-[1920px] mx-auto"
            />
          </section>

          {/* Product Sections */}
          <section id="menu" className="section-padding bg-background relative z-10 pt-24">
            <div className="container-custom">
              {productSections.map((section, sectionIndex) => (
                <div key={section.id} className={sectionIndex > 0 ? 'mt-32' : ''}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                  >
                    <div className="inline-flex items-center justify-center space-x-4 mb-4">
                      <div className="h-px w-12 bg-primary/30 hidden sm:block"></div>
                      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
                        {section.name}
                      </h2>
                      <div className="h-px w-12 bg-primary/30 hidden sm:block"></div>
                    </div>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                      {section.description}
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                    {section.products.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact & Delivery Info */}
          <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none"></div>
            
            <div className="container-custom relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                  Find Us Here
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We deliver fresh, insanely addictive cakes right to your door in Beirut.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Location</h3>
                  <p className="text-muted-foreground">
                    Koraytem, Madame Curie Str.<br />Beirut
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Phone</h3>
                  <a
                    href="tel:71068830"
                    className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 text-lg"
                  >
                    71068830
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="bg-[#25D366]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">WhatsApp</h3>
                  <a
                    href="https://wa.me/96171068830"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-semibold hover:text-[#25D366]/80 transition-colors duration-200 text-lg"
                  >
                    +961 71068830
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 space-x-2">
                    <Instagram className="w-6 h-6 text-primary" />
                    <Facebook className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Socials</h3>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
                    >
                      IG
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
                    >
                      FB
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Newsletter / Final CTA */}
          <section className="py-20 bg-primary text-primary-foreground text-center px-4">
            <div className="container-custom max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Craving Something Sweet?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-10">
                  Follow us for our daily cakes, exclusive offers, and behind-the-scenes weirdness.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-accent hover:text-accent-foreground transition-all duration-300 w-full sm:w-auto shadow-lg hover:-translate-y-1"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Follow Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-primary-foreground/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-foreground/20 border border-primary-foreground/20 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Join Facebook</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </>
  );
}
