import React, { useRef } from 'react';
import { FileText, MessageCircle, RefreshCw, ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "@fontsource/poppins"; // Loads default weight (400)

export default function AskISMSLanding() {
  // Reusable button component with animation (copied from AskAIMS.jsx)
  const AnimatedButton = ({ children, text, className = "" }) => {
    const buttonRef = useRef(null);
    const pseudoElementRef = useRef(null);

    const handleMouseEnter = () => {
      const pseudoEl = pseudoElementRef.current;
      pseudoEl.style.transition = "all 0.4s ease-in-out";
      pseudoEl.style.width = "250%";
      pseudoEl.style.backgroundColor = "#DD5100";
    };

    const handleMouseLeave = () => {
      const pseudoEl = pseudoElementRef.current;
      pseudoEl.style.width = "0";
    };

    return (
      <button
        ref={buttonRef}
        className={`group/btn bg-white text-[#DD5100] hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl relative overflow-hidden border-2 border-white ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="relative z-10">{text}</span>
        <span className="relative z-10">{children}</span>
        <span
          ref={pseudoElementRef}
          className="absolute left-[-20px] w-0 h-[500px] bg-[#DD5100] rotate-[-29deg] transition-all duration-400"
        ></span>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-white font-pangram">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#DD5100] via-[#E65A0A] to-[#F97316] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ask ISMS: Your AI Expert for ISO 27001
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Navigate ISO 27001 with confidence. Ask ISMS, part of the{' '}
              <span className="font-semibold text-white">Kimova AI TurboAudit platform</span>, 
              provides instant, AI-powered answers to simplify compliance and accelerate your 
              ISMS implementation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {/* New styled button using AnimatedButton component */}
              <AnimatedButton 
                text="Try Ask ISMS for Free" 
                className="text-lg py-5 px-10 rounded-full"
              >
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Instant Expertise Section */}
      <div className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Instant Expertise at Your Fingertips
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your ISO 27001 implementation with AI-powered guidance and expert assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Get ISO 27001 Guidance */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#DD5100]">
              <div className="flex items-center mb-6">
                <div className="bg-[#DD5100] p-3 rounded-lg mr-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Get ISO 27001 Guidance Instantly
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Access the entire standard effortlessly. Ask about specific controls, implementation steps, 
                documentation requirements, risk assessment, audit preparation, and best practices.
              </p>
            </div>

            {/* Expert-Like Assistant */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 p-3 rounded-lg mr-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Expert-Like Assistant
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Receive clear, detailed, and context-aware responses tailored to your specific questions, whether you're 
                an auditor, implementer, manager, or just learning about ISO 27001.
              </p>
            </div>

            {/* Streamline Compliance */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-3 rounded-lg mr-4">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Streamline Compliance Efforts
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Stop wasting time searching through documents or forums. Get precise information quickly to make 
                informed decisions and keep your ISMS project on track.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-20 bg-[#DD5100]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Simplify Your ISO 27001 Journey?
            </h2>
            
            <p className="text-lg md:text-xl text-orange-100 mb-10 leading-relaxed">
              Stop guessing and start getting clear answers. Try Ask ISMS today and experience the power of AI-driven 
              compliance assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* New styled button using AnimatedButton component */}
              <AnimatedButton 
                text="Try Ask ISMS for Free" 
                className="text-lg py-5 px-10 rounded-full"
              >
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Ask ISMS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by experts, powered by AI, trusted by professionals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-[#DD5100] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Accurate</h3>
              <p className="text-gray-600 text-sm">Based on official ISO 27001 standards</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Instant</h3>
              <p className="text-gray-600 text-sm">Get answers in seconds, not hours</p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Expert-Level</h3>
              <p className="text-gray-600 text-sm">Guidance from industry professionals</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Comprehensive</h3>
              <p className="text-gray-600 text-sm">Covers all aspects of ISO 27001</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}