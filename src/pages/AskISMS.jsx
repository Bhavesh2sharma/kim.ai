import React from 'react';
import { FileText, MessageCircle, RefreshCw, ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AskISMSLanding() {
  return (
    
    <div className="min-h-screen bg-white">
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
               <button className="group relative inline-flex items-center gap-4 bg-white text-[#DD5100] hover:bg-[#DD5100] hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#DD5100]/30 hover:scale-105 border-2 border-white">
                              <span className="text-lg">Try Ask AIMS for Free</span>
                              <div className="relative ml-2">
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                <div className="absolute -inset-3 border border-white rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-140 transition-all duration-500"></div>
                              </div>
                            </button>
              {/* <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#DD5100] font-semibold py-4 px-8 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-white/30 hover:scale-105">
                <span className="text-lg">Contact Us</span>
              </button> */}
            </div>
            
            {/* <div className="text-orange-200">
              <p className="text-sm mb-4">Trusted by security professionals worldwide</p>
              <div className="flex justify-center items-center space-x-6 md:space-x-8 opacity-80">
                <div className="text-xl md:text-2xl font-bold">ISO</div>
                <div className="text-xl md:text-2xl font-bold">27001</div>
                <div className="text-xl md:text-2xl font-bold">ISMS</div>
                <div className="text-xl md:text-2xl font-bold">AI</div>
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
      <div className="py-16 md:py-20 bg-gradient-to-r from-[#DD5100] to-[#F97316]">
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
               <button className="group relative inline-flex items-center gap-4 bg-white text-[#DD5100] hover:bg-[#DD5100] hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#DD5100]/30 hover:scale-105 border-2 border-white">
                              <span className="text-lg">Try Ask AIMS for Free</span>
                              <div className="relative ml-2">
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                <div className="absolute -inset-3 border border-white rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-140 transition-all duration-500"></div>
                              </div>
                            </button>
              {/* <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#DD5100] font-semibold py-4 px-10 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-white/30 hover:scale-105">
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