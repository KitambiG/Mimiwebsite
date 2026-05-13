import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUpPage } from './pages/SignUp';
import { ForgotPasswordPage } from './pages/ForgotPassword';
import { BookDemo } from './pages/BookDemo';
import { FeaturesPage } from './pages/Features';
import { PricingPage } from './pages/Pricing';
import { ContactSales } from './pages/ContactSales';
import { Payment } from './pages/Payment';
import { AboutPage } from './pages/About';
import { PrivacyPage } from './pages/Privacy';
import { TermsPage } from './pages/Terms';
import { SecurityPage } from './pages/Security';

export default function App() {
  useEffect(() => {
    // Set dark mode globally
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/get-started" element={<Payment />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}