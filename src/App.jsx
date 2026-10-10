import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { TechSpecsModal } from './components/TechSpecsModal';
import { QuoteModal } from './components/QuoteModal';

// Dedicated Streamlined Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { DealersPage } from './pages/DealersPage';
import { ContactPage } from './pages/ContactPage';

function AnimatedRoutes({ onSelectProduct, onOpenQuote }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <HomePage 
              onSelectProduct={onSelectProduct} 
              onOpenQuote={onOpenQuote} 
            />
          } 
        />
        <Route 
          path="/products" 
          element={
            <ProductsPage 
              onSelectProduct={onSelectProduct} 
              onOpenQuote={onOpenQuote} 
            />
          } 
        />
        <Route 
          path="/products/:id" 
          element={
            <ProductDetailPage 
              onOpenQuote={onOpenQuote} 
            />
          } 
        />
        <Route 
          path="/about" 
          element={
            <AboutPage 
              onOpenQuote={onOpenQuote} 
            />
          } 
        />
        <Route 
          path="/dealers" 
          element={
            <DealersPage 
              onOpenQuote={onOpenQuote} 
            />
          } 
        />
        <Route 
          path="/contact" 
          element={
            <ContactPage />
          } 
        />

        {/* Redirects for merged pages to maintain clean URL health */}
        <Route path="/calculator" element={<Navigate to="/#calculator-section" replace />} />
        <Route path="/engineering" element={<Navigate to="/about" replace />} />
        <Route path="/applications" element={<Navigate to="/#applications" replace />} />

        {/* Fallback */}
        <Route 
          path="*" 
          element={
            <HomePage 
              onSelectProduct={onSelectProduct} 
              onOpenQuote={onOpenQuote} 
            />
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState('');

  const handleOpenQuote = (subject = 'General Technical Inquiry') => {
    setQuoteSubject(subject);
    setQuoteModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#D9232D] selection:text-white">
        
        {/* Universal Multi-Page Header */}
        <Navbar onOpenQuote={handleOpenQuote} />

        {/* Animated Page Viewport */}
        <main className="flex-grow flex flex-col">
          <AnimatedRoutes 
            onSelectProduct={(product) => setSelectedProduct(product)}
            onOpenQuote={handleOpenQuote}
          />
        </main>

        {/* Universal Multi-Page Footer */}
        <Footer onOpenQuote={handleOpenQuote} />

        {/* Global Modals */}
        {selectedProduct && (
          <TechSpecsModal 
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {quoteModalOpen && (
          <QuoteModal 
            initialSubject={quoteSubject}
            onClose={() => setQuoteModalOpen(false)}
          />
        )}
      </div>
    </Router>
  );
}
