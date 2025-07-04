import React, { useRef } from 'react';
import { FileText, MessageCircle, RefreshCw, ArrowRight, CheckCircle, Users, Award, Zap, Brain, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "@fontsource/poppins"; // Loads default weight (400)



export default function AskAIMSLanding() {
  // Reusable button component with animation (copied from AIAgents.jsx)
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
              Ask AIMS: Your AI Expert for ISO 42001 & AI Governance
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Navigate the complexities of AI management systems with confidence. Ask AIMS, part of the{' '}
              <span className="font-semibold text-white">Kimova AI TurboAudit platform</span>, 
              provides instant, AI-powered answers to simplify ISO 42001 compliance and responsible AI practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {/* <button className="group relative inline-flex items-center gap-4 bg-white text-[#DD5100] hover:bg-[#DD5100] hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#DD5100]/30 hover:scale-105 border-2 border-white">
                <span className="text-lg">Try Ask AIMS for Free</span>
                <div className="relative ml-2">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute -inset-3 border border-white rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-140 transition-all duration-500"></div>
                </div>
              </button> */}
              
              {/* New styled button using AnimatedButton component */}
              <AnimatedButton 
                text="Try Ask AIMS for Free" 
                className="text-lg py-5 px-10 rounded-full"
              >
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </AnimatedButton>
              
              {/* <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#DD5100] font-semibold py-4 px-8 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-white/30 hover:scale-105">
                <span className="text-lg">Contact Us</span>
              </button> */}
            </div>
            
            {/* <div className="text-orange-200">
              <p className="text-sm mb-4">Trusted by AI professionals worldwide</p>
              <div className="flex justify-center items-center space-x-6 md:space-x-8 opacity-80">
                <div className="text-xl md:text-2xl font-bold">ISO</div>
                <div className="text-xl md:text-2xl font-bold">42001</div>
                <div className="text-xl md:text-2xl font-bold">AI</div>
                <div className="text-xl md:text-2xl font-bold">Governance</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Instant Expertise Section */}
      <div className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Instant Expertise for AI Governance
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your AI governance implementation with expert guidance and responsible AI practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ISO 42001 Guidance */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#DD5100]">
              <div className="flex items-center mb-6">
                <div className="bg-[#DD5100] p-3 rounded-lg mr-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  ISO 42001 Guidance
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Get comprehensive support for ISO 42001, the international standard for AI management systems. 
                Understand requirements, implementation steps, and best practices.
              </p>
            </div>

            {/* AI Governance Support */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 p-3 rounded-lg mr-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  AI Governance Support
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Explore key concepts in AI governance, including ethical AI, risk management, and responsible AI 
                development. Ask AIMS helps you build trustworthy AI systems.
              </p>
            </div>

            {/* Expert Answers */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-3 rounded-lg mr-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Expert Answers, Instantly
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Whether you're an AI developer, a compliance officer, or leading an AI initiative, Ask AIMS provides 
                tailored answers to your specific questions.
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
              Ready to Master AI Governance and ISO 42001?
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              Stop searching and start getting clear, AI-driven answers. Try Ask AIMS today and accelerate your journey 
              towards responsible AI implementation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* <button className="group relative inline-flex items-center gap-4 bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-10 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/30 hover:scale-105 border-2 border-white">
                <span className="text-lg">Try Ask AIMS for Free</span>
                <div className="relative ml-2">
                  <Zap className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute -inset-3 border border-white rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-140 transition-all duration-500"></div>
                </div>
              </button> */}
              
              {/* New styled button using AnimatedButton component */}
              <AnimatedButton 
                text="Try Ask AIMS for Free" 
                className="text-lg py-5 px-10 rounded-full"
              >
                <Zap className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </AnimatedButton>
              
              {/* <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-10 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-white/30 hover:scale-105">
                <span className="text-lg">Contact Us</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Ask AIMS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by experts, powered by AI, trusted by professionals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Accurate</h3>
              <p className="text-gray-600 text-sm">Based on official ISO 42001 standards</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              <p className="text-gray-600 text-sm">Guidance from AI governance professionals</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Comprehensive</h3>
              <p className="text-gray-600 text-sm">Covers all aspects of AI governance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}