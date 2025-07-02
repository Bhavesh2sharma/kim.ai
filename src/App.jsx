import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Make sure all these imports are correct
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureBoxes from './components/FeatureBoxes';
import Workflow from './components/Workflow';
import FAQ from './components/FAQ';
import HeroSection from './components/HeroSection';
import WelcomeHero from './components/WelcomeHero';
import ComplianceComparison from './components/ComplianceComparison';
import AIAgent from './components/AIAgent';
import Team from './pages/Team';
import ContactUs from './pages/ContactUs';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FloatingForm from './components/FloatingForm';
import AskISMS from './pages/AskISMS';
import AskAIMS from './pages/AskAIMS';

function LandingPage() {
  return (
    <>
      <Header />
      <WelcomeHero />
      <FloatingForm />
      <HeroSection />
      <FeatureBoxes />
      <Workflow />
      <ComplianceComparison />
      <AIAgent />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/ask-isms" element={<AskISMS/>}/>
        <Route path="/ask-aims" element={<AskAIMS/>}/>
      </Routes>
    </Router>
  );
}

export default App;