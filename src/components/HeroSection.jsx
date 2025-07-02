import React from 'react';
import { Upload, Brain, Download, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Process Section First */}
      <div className="container mx-auto px-6 pt-16 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
            What TurboAudit Does
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps to comprehensive cybersecurity assessment
          </p>
        </div>

        {/* Process Steps - Horizontal Flow */}
        <div className="relative mb-20">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400 transform -translate-y-1/2 z-0" style={{background: 'linear-gradient(to right, #3B82F6, #DD5100)'}}></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-orange-400 to-green-400 transform -translate-y-1/2 z-0" style={{background: 'linear-gradient(to right, #DD5100, #10B981)'}}></div>

            {/* Step 1 */}
            <div className="relative z-10">
              <div className="bg-white rounded-3xl p-8 h-full border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Upload Documents</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Securely upload your current information security policies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Submit procedures and compliance evidence</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Enterprise-grade security encryption</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10">
              <div className="bg-white rounded-3xl p-8 h-full border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2" style={{borderColor: '#FFD580'}}>
                <div className="flex items-center justify-between mb-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center bg-[#FFD580]/40" style={{opacity: 1}}>
                    <Brain className="w-8 h-8" style={{color: '#DD5100'}} />
                  </div>
                  <div className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg" style={{backgroundColor: '#DD5100'}}>
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">AI Analysis & Mapping</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#DD5100'}}></div>
                    <p className="text-slate-600">AI engine processes your documents intelligently</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#DD5100'}}></div>
                    <p className="text-slate-600">Maps content against ISO 27001:2022 controls</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#DD5100'}}></div>
                    <p className="text-slate-600">Identifies gaps and compliance status</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10">
              <div className="bg-white rounded-3xl p-8 h-full border border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <Download className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Actionable Reports</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Comprehensive gap analysis reports</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Actionable insights for security enhancement</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Priority-ranked recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TurboAudit Introduction */}
        <div className="bg-gray-800 rounded-3xl p-12 border border-gray-700">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-4 mr-4">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-5xl font-bold text-white mb-2">TurboAudit</h2>
                <div className="flex items-center space-x-2">
                  {/* <Shield className="w-5 h-5" style={{color: '#DD5100'}} /> */}
                  <span className="font-semibold text-gray-300">AI-Powered Cybersecurity Compliance</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced AI-driven platform that transforms complex ISO 27001:2022 compliance assessment into a streamlined, intelligent process
            </p>
          </div>

          {/* What TurboAudit Does */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 mr-3" style={{color: '#DD5100'}} />
                  <h4 className="font-bold text-white">Automated Assessment</h4>
                </div>
                <div className="w-full h-32 bg-gray-600/50 rounded-lg mb-4 flex items-center justify-center group-hover:opacity-30 transition-opacity duration-300">
                  <Shield className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 bg-gray-800/90 p-3 rounded-lg">Analyzes security policies and procedures against ISO 27001:2022 standards with precision and automated intelligence</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 mr-3" style={{color: '#DD5100'}} />
                  <h4 className="font-bold text-white">Gap Analysis</h4>
                </div>
                <div className="w-full h-32 bg-gray-600/50 rounded-lg mb-4 flex items-center justify-center group-hover:opacity-30 transition-opacity duration-300">
                  <Brain className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 bg-gray-800/90 p-3 rounded-lg">Identifies compliance gaps and vulnerabilities in your current security posture with detailed recommendations</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 mr-3" style={{color: '#DD5100'}} />
                  <h4 className="font-bold text-white">Risk Assessment</h4>
                </div>
                <div className="w-full h-32 bg-gray-600/50 rounded-lg mb-4 flex items-center justify-center group-hover:opacity-30 transition-opacity duration-300">
                  <Zap className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 bg-gray-800/90 p-3 rounded-lg">Evaluates potential security risks and their organizational impact with comprehensive threat modeling</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 mr-3" style={{color: '#DD5100'}} />
                  <h4 className="font-bold text-white">Compliance Mapping</h4>
                </div>
                <div className="w-full h-32 bg-gray-600/50 rounded-lg mb-4 flex items-center justify-center group-hover:opacity-30 transition-opacity duration-300">
                  <Upload className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 bg-gray-800/90 p-3 rounded-lg">Maps existing controls to ISO 27001:2022 requirements systematically with detailed cross-referencing</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 mr-3" style={{color: '#DD5100'}} />
                  <h4 className="font-bold text-white">Actionable Insights</h4>
                </div>
                <div className="w-full h-32 bg-gray-600/50 rounded-lg mb-4 flex items-center justify-center group-hover:opacity-30 transition-opacity duration-300">
                  <Download className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 bg-gray-800/90 p-3 rounded-lg">Provides detailed reports with specific improvement recommendations and implementation roadmaps</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 mr-3" style={{color: '#DD5100'}} />
                  <h4 className="font-bold text-white">Continuous Monitoring</h4>
                </div>
                <div className="w-full h-32 bg-gray-600/50 rounded-lg mb-4 flex items-center justify-center group-hover:opacity-30 transition-opacity duration-300">
                  <ArrowRight className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-300 bg-gray-800/90 p-3 rounded-lg">Ongoing assessment to maintain and enhance security posture with real-time compliance tracking</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;