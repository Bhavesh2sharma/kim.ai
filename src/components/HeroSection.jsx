import React, { useState, useEffect, useRef } from 'react';
import { FileText, Cpu, BarChart3, Target, TrendingUp, Monitor, Brain, Download } from 'lucide-react';

const HeroSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  const features = [
    {
      id: 1,
      title: "Automated Assessment",
      description: "Analyzes security policies and procedures against ISO 27001:2022 standards with precision and automated intelligence",
      icon: Target,
      gradient: "from-[#DD5100]/80 to-[#DD5100]",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
    },
    {
      id: 2,
      title: "Gap Analysis",
      description: "Identifies compliance gaps and vulnerabilities in your current security posture with detailed recommendations",
      icon: BarChart3,
      gradient: "from-[#DD5100]/80 to-[#DD5100]",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Risk Assessment",
      description: "Evaluates potential security risks and their organizational impact with comprehensive threat modeling",
      icon: TrendingUp,
      gradient: "from-[#DD5100]/80 to-[#DD5100]",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 4,
      title: "Compliance Mapping",
      description: "Maps existing controls to ISO 27001:2022 requirements systematically with detailed cross-referencing",
      icon: Cpu,
      gradient: "from-[#DD5100]/80 to-[#DD5100]",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      id: 5,
      title: "Actionable Insights",
      description: "Provides detailed reports with specific improvement recommendations and implementation roadmaps",
      icon: FileText,
      gradient: "from-[#DD5100]/80 to-[#DD5100]",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 6,
      title: "Continuous Monitoring",
      description: "Ongoing assessment to maintain and enhance security posture with real-time compliance tracking",
      icon: Monitor,
      gradient: "from-[#DD5100]/80 to-[#DD5100]",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen">
     <div className="container mx-auto px-6 pt-16 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
            What TurboAudit Does
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps to comprehensive cybersecurity assessment
          </p>
        </div>

        {/* Process Steps - UPDATED: Increased horizontal gap utilizing empty space */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-3 gap-1 md:gap-24 relative pl-0 lg:pl-6">

            {/* Step 1 */}
            <div className="relative z-10 p-2 mb-6">
              <div className="relative h-full">
                {/* Watermark Number*/}
                <div className="absolute inset-0 flex items-center justify-center text-[20rem] font-bold text-blue-100 select-none z-0 leading-none">
                  1
                </div>
                
                {/* Content*/}
                <div className="relative z-10">
                  <div className="flex items-center justify-start mb-3">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-blue-600" />
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
            </div>

            {/* Step 2 */}
            <div className="relative z-10 p-2 mb-6">
              <div className="relative h-full">
                {/* Watermark Number  */}
                <div className="absolute inset-0 flex items-center justify-center text-[20rem] font-bold select-none z-0 leading-none" style={{color: 'rgba(221, 81, 0, 0.1)'}}>
                  2
                </div>
                
                {/* Content   */}
                <div className="relative z-10">
                  <div className="flex items-center justify-start mb-3">
                    <div className="rounded-full w-16 h-16 flex items-center justify-center bg-[#FFD580]/40" style={{opacity: 1}}>
                      <Brain className="w-8 h-8" style={{color: '#DD5100'}} />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 whitespace-nowrap">AI Analysis & Mapping</h3>
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
            </div>

            {/* Step 3 */}
            <div className="relative z-10 p-2 mb-6">
              <div className="relative h-full">
                {/* Watermark Number  */}
                <div className="absolute inset-0 flex items-center justify-center text-[20rem] font-bold text-green-100 select-none z-0 leading-none">
                  3
                </div>
                
                {/* Content   */}
                <div className="relative z-10">
                  <div className="flex items-center justify-start mb-3">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                      <Download className="w-8 h-8 text-green-600" />
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
        </div>


        {/* TurboAudit Header*/}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-6">

            <div>
              <h2 className="text-5xl font-bold text-slate-800 mb-2">TurboAudit</h2>
              <div className="flex items-center justify-center space-x-2">
                <span className="font-semibold text-slate-600">AI-Powered Cybersecurity Compliance</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Advanced AI-driven platform that transforms complex ISO 27001:2022 compliance assessment into a streamlined, intelligent process
          </p>
        </div>

        {/* Features with Alternating Layout*/}
        <div className="space-y-8 md:space-y-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={feature.id}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Content */}
                <div
                  className={`${isEven ? 'lg:order-1' : 'lg:order-2'} ${
                    isVisible
                      ? 'transform translate-x-0 opacity-100'
                      : `transform ${
                          isEven ? '-translate-x-16' : 'translate-x-16'
                        } opacity-0`
                  } transition-all duration-800 ease-out`}
                >
                  {/* Desktop version - icon above heading */}
                  <div className="hidden md:flex items-center mb-6 md:mb-8">
                    <div className={`bg-gradient-to-r ${feature.gradient} rounded-xl p-3 md:p-4 mr-4 md:mr-6 shadow-lg`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="w-2 h-8 md:h-12 bg-[#DD5100] rounded-full"></div>
                  </div>
                  
                  {/* Mobile version - icon next to heading */}
                  <div className="flex md:hidden items-center mb-4">
                    <div className={`bg-gradient-to-r ${feature.gradient} rounded-xl p-2 mr-1 shadow-lg`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-2 h-8 md:h-12 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full mr-2"></div>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Desktop heading */}
                  <h3 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={`${isEven ? 'lg:order-2' : 'lg:order-1'} ${
                    isVisible
                      ? 'transform translate-x-0 opacity-100'
                      : `transform ${
                          isEven ? 'translate-x-16' : '-translate-x-16'
                        } opacity-0`
                  } transition-all duration-800 ease-out`}
                  style={{
                    transitionDelay: isVisible ? '200ms' : '0ms'
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 md:h-64 lg:h-90 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;