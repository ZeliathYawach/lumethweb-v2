import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/animations/LoadingScreen';
import { PageTransition } from './components/animations/PageTransition';
import { useLoading } from './hooks/useLoading';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AppFeatures } from './components/AppFeatures';
import { AiTechnology } from './components/AiTechnology';
import { AppShowcase } from './components/AppShowcase';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Blog } from './pages/Blog';
import { CreateBlog } from './pages/CreateBlog';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { CancellationPolicy } from './pages/CancellationPolicy';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Business } from './pages/Business';
import { GetStarted } from './pages/GetStarted';
import { AdminDashboard } from './pages/admin/AdminDashboard';

function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <AppFeatures />
          <AiTechnology />
          <AppShowcase />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoading = useLoading();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/create" element={<CreateBlog />} />
        <Route path="/admin/blog" element={<AdminDashboard />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;