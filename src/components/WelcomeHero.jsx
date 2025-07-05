import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Screens from './Screens.jsx';

const WelcomeHero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const overlay = overlayRef.current;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (overlay) {
        overlay.style.clipPath = `circle(120px at ${x}px ${y}px)`;
      }
    };

    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const GradientCTAButton = ({ text }) => {
    const isDemo = text.toLowerCase().includes('demo');

    const baseClasses =
      'group relative inline-flex items-center justify-center gap-4 z-50 min-w-[260px] font-semibold py-6 px-12 whitespace-nowrap rounded-full transition-all duration-500 overflow-hidden';

    const arrowWrapper = 'relative ml-2';
    const arrowCircle =
      'absolute -inset-2 border rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500';

    if (isDemo) {
      return (
        <button
          className={`${baseClasses} bg-[#DD5100] text-white border-2 border-white hover:bg-white hover:text-[#DD5100] hover:border-[#DD5100]`}
        >
          <span className="text-lg sm:text-xl">{text}</span>
          <div className={arrowWrapper}>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 text-white group-hover:text-[#DD5100]" />
            <div className={`${arrowCircle} border-white`}></div>
          </div>
        </button>
      );
    }

    return (
      <button
        className={`${baseClasses} bg-white text-[#00283b] border-2 border-[#DD5100] hover:bg-[#DD5100] hover:text-white hover:border-white`}
      >
        <span className="text-lg sm:text-xl">{text}</span>
        <div className={arrowWrapper}>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          <div className={`${arrowCircle} border-[#DD5100]`}></div>
        </div>
      </button>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#DD5100] overflow-hidden flex items-center justify-center min-h-[90vh]"
      
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main Layer */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-screen-2xl flex flex-col md:flex-row items-center justify-between py-12">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-white text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold mt-6 sm:mt-0 mb-8 leading-tight font-sans">
            TurboAudit
          </h2>
          <p className="text-white text-xl md:text-2xl lg:text-3xl mb-10 font-normal">
            AI for Smarter ISMS Compliance & Audits
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-12 z-40 relative">
            <GradientCTAButton text="Contact for Demo" />
            <GradientCTAButton text="Try AI Free" />
          </div>
        </div>
        <div className="w-full flex justify-center mt-10 md:mt-0 relative md:pl-12">
          <Screens />
        </div>
      </div>

      {/* Hover Reveal Overlay */}
      <div
        ref={overlayRef}
        className={`absolute inset-0 bg-white z-30 transition-all duration-200 ease-out pointer-events-none ${
          isHovering ? 'block' : 'hidden'
        }`}
        style={{
          clipPath: 'circle(0px at 0px 0px)',
        }}
      >
        <div className="w-full h-full pointer-events-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-screen-2xl mx-auto py-12">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-[#DD5100] text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold mt-6 sm:mt-0 mb-8 leading-tight font-sans">
              TurboAudit
            </h2>
            <p className="text-[#DD5100] text-xl md:text-2xl lg:text-3xl mb-10 font-normal">
              AI for Smarter ISMS Compliance & Audits
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-12 z-40 relative">
              <GradientCTAButton text="Contact for Demo" />
              <GradientCTAButton text="Try AI Free" />
            </div>
          </div>
          <div className="w-full flex justify-center mt-10 md:mt-0 relative md:pl-12">
            <Screens />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;