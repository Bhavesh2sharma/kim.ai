import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const DROPDOWN_CONFIG = {
  services: {
    items: [
      { text: "AI Policy analyzer", link: "#" },
      { text: "AI ISMS audit", link: "#" },
      { text: "AI audit notes", link: "#" },
      { text: "Ask ISMS", link: "/ask-isms" },
      { text: "Ask AIMS", link: "/ask-aims" }
    ]
  },
  aboutUs: {
    items: [
      { text: "Team", link: "/team" },
      { text: "TurboAudit", link: "#" }
    ]
  },
  blogs: {
    items: ["Blog 1", "Blog 2", "Blog 3", "Blog 4", "Blog 5", "Blog 6"]
  }
};

const Header = ({ onNavigate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeButton, setActiveButton] = useState('home');
  const [hoveredButton, setHoveredButton] = useState(null);
  const [showDropdownContent, setShowDropdownContent] = useState(false);
  const loginButtonRef = useRef(null);
  const mobileLoginButtonRef = useRef(null);
  const expandTimeoutRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Desktop hover handlers with smooth animation
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      if (expandTimeoutRef.current) {
        clearTimeout(expandTimeoutRef.current);
      }
      setIsExpanded(true);
      
      // Delay showing dropdown content until header starts expanding
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      dropdownTimeoutRef.current = setTimeout(() => {
        setShowDropdownContent(true);
      }, 200); // Delay to sync with header expansion
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setShowDropdownContent(false);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      expandTimeoutRef.current = setTimeout(() => {
        setIsExpanded(false);
      }, 150);
    }
  };

  const handleLoginHover = () => {
    const pseudoEl = loginButtonRef.current?.querySelector('.pseudo-element');
    if (pseudoEl) {
      pseudoEl.style.width = "250%";
      pseudoEl.style.backgroundColor = "#f97316";
    }
  };

  const handleLoginLeave = () => {
    const pseudoEl = loginButtonRef.current?.querySelector('.pseudo-element');
    if (pseudoEl) {
      pseudoEl.style.width = "0";
    }
  };

  const handleMobileLoginHover = () => {
    const pseudoEl = mobileLoginButtonRef.current?.querySelector('.pseudo-element');
    if (pseudoEl) {
      pseudoEl.style.width = "250%";
      pseudoEl.style.backgroundColor = "#f97316";
    }
  };

  const handleMobileLoginLeave = () => {
    const pseudoEl = mobileLoginButtonRef.current?.querySelector('.pseudo-element');
    if (pseudoEl) {
      pseudoEl.style.width = "0";
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (type) => {
    setActiveMobileDropdown(activeMobileDropdown === type ? null : type);
  };

  const handleButtonClick = (buttonName, path = '/') => {
    // Update active button state
    setActiveButton(buttonName);
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setActiveMobileDropdown(null);
    }
    
    if (onNavigate) {
      onNavigate(path);
    } else {
      if (path === '/') {
        window.location.href = '/';
      } else {
        window.location.href = path;
      }
    }
  };

  const handleDropdownItemClick = (item, buttonName) => {
    // For dropdown items, don't change the active button state
    // Just handle navigation
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setActiveMobileDropdown(null);
    }
    
    const link = typeof item === 'string' ? '#' : item.link;
    
    if (onNavigate) {
      onNavigate(link);
    } else {
      if (link === '/') {
        window.location.href = '/';
      } else {
        window.location.href = link;
      }
    }
  };

  const handleButtonHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleButtonLeave = () => {
    setHoveredButton(null);
  };

  const getButtonClasses = (buttonName) => {
    const isActive = activeButton === buttonName;
    const isHovered = hoveredButton === buttonName;
    const showUnderline = isActive || isHovered;
    
    return `relative hover:text-orange-500 transition-colors duration-300 py-2 cursor-pointer font-bold ${
      showUnderline ? 'text-orange-500' : ''
    }`;
  };

  const renderUnderline = (buttonName) => {
    const isActive = activeButton === buttonName;
    const isHovered = hoveredButton === buttonName;
    const showUnderline = isActive || isHovered;
    
    return (
      <div 
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transition-all duration-300 ${
          showUnderline ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />
    );
  };

  return (
    <>
      <header 
        className={`bg-white shadow-md px-2 sm:px-4 w-full fixed top-0 z-50 transition-all duration-700 ease-out ${
          isExpanded ? 'h-90' : 'h-20'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-full h-20 flex items-center justify-between relative">
          {/* Mobile - Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-1.5 rounded-full bg-orange-400 text-white hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          {/* Logo - Center on mobile, Left on desktop */}
          <button 
            onClick={() => handleButtonClick('home', '/')}
            className="flex items-center z-10 lg:order-1 cursor-pointer ml-1 lg:ml-10 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none"
          >
            <img src="/KimAi.png" alt="Kimova Logo" className="h-8 sm:h-10 lg:h-12 object-contain" />
          </button>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 text-[#1f1f1f] font-medium transition-all duration-300 lg:order-2 gap-30">
            <button 
              className={getButtonClasses('home')}
              onClick={() => handleButtonClick('home', '/')}
              onMouseEnter={() => handleButtonHover('home')}
              onMouseLeave={handleButtonLeave}
            >
              Home
              {renderUnderline('home')}
            </button>
            
            <div className="relative group">
              <button 
                className={getButtonClasses('services')}
                onClick={() => handleButtonClick('services')}
                onMouseEnter={() => handleButtonHover('services')}
                onMouseLeave={handleButtonLeave}
              >
                Services
                {renderUnderline('services')}
              </button>
              <div className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 p-2 z-10 transition-all duration-500 ease-out ${
                isExpanded && showDropdownContent ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
              }`}>
                {DROPDOWN_CONFIG.services.items.map((item, index) => (
  <button
    key={`services-${index}`}
    onClick={() => handleDropdownItemClick(item, 'services')}
    className="block w-full px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 text-center rounded"
  >
    {item.text} {/* Access the text property */}
  </button>
))}
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className={getButtonClasses('blogs')}
                onClick={() => handleButtonClick('blogs')}
                onMouseEnter={() => handleButtonHover('blogs')}
                onMouseLeave={handleButtonLeave}
              >
                Blogs
                {renderUnderline('blogs')}
              </button>
              <div className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 p-2 z-10 transition-all duration-500 ease-out ${
                isExpanded && showDropdownContent ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
              }`}>
                {DROPDOWN_CONFIG.blogs.items.map((item, index) => (
                  <button
                    key={`blogs-${index}`}
                    onClick={() => handleButtonClick('blogs')}
                    className="block w-full px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 text-center rounded"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className={getButtonClasses('about')}
                onClick={() => handleButtonClick('about')}
                onMouseEnter={() => handleButtonHover('about')}
                onMouseLeave={handleButtonLeave}
              >
                About
                {renderUnderline('about')}
              </button>
              <div className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 p-2 z-10 transition-all duration-500 ease-out ${
                isExpanded && showDropdownContent ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
              }`}>
                {DROPDOWN_CONFIG.aboutUs.items.map((item, index) => (
                  <button
                    key={`about-${index}`}
                    onClick={() => handleButtonClick('about', typeof item === 'string' ? '#' : item.link)}
                    className="block w-full px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 text-center rounded"
                  >
                    {typeof item === 'string' ? item : item.text}
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              className={getButtonClasses('contact')}
              onClick={() => handleButtonClick('contact', '/contact')}
              onMouseEnter={() => handleButtonHover('contact')}
              onMouseLeave={handleButtonLeave}
            >
              Contact
              {renderUnderline('contact')}
            </button>
          </nav>

          {/* Desktop Login Button - Right */}
          <button
            ref={loginButtonRef}
            className="hidden lg:flex relative items-center px-16 py-2 text-[#DD5100] font-semibold rounded-full bg-white border border-[#DD5100] overflow-hidden transition-all duration-300 group lg:order-3"
            onMouseEnter={handleLoginHover}
            onMouseLeave={handleLoginLeave}
            onClick={() => alert('Login functionality to be implemented')}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-base">
              Login
            </span>
            <span className="pseudo-element absolute left-[-20px] w-0 h-[500px] bg-[#DD5100] rotate-[-29deg] transition-all duration-500"></span>
          </button>

          {/* Mobile placeholder to maintain layout */}
          <div className="lg:hidden w-6"></div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        mobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-gray-900 transition-opacity duration-300 ${
            mobileMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={toggleMobileMenu}
        />

        {/* Menu Content */}
        <div className={`absolute top-20 left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-out transform ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        } overflow-y-auto max-h-[calc(100vh-80px)]`}>
          <div className="container mx-auto px-0.5 py-2">
            {/* Top Row - Home and Contact */}
            <div className="grid grid-cols-2 gap-0.5 mb-2 pb-2 border-b border-gray-200">
              <button 
                onClick={() => handleButtonClick('home', '/')}
                className="block px-1 py-1.5 text-xs font-bold text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200 text-center transform hover:scale-105"
              >
                Home
              </button>
              <button 
                onClick={() => handleButtonClick('contact', '/contact')}
                className="block px-1 py-1.5 text-xs font-bold text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200 text-center transform hover:scale-105"
              >
                Contact
              </button>
            </div>
            
            {/* Bottom Row - Dropdown items */}
            <div className="grid grid-cols-3 gap-0.5 mb-2">
              {/* Services Dropdown */}
              <div className="mb-1">
                <button
                  onClick={() => toggleMobileDropdown('services')}
                  className="flex flex-col items-center justify-center w-full px-0.5 py-1.5 text-xs font-bold text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-2.5 h-2.5 mt-0.5 transition-transform duration-300 ${
                    activeMobileDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                  activeMobileDropdown === 'services' 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="mt-0.5 space-y-0.5">
                  {DROPDOWN_CONFIG.services.items.map((item, index) => (
  <button
    key={`mobile-services-${index}`}
    onClick={() => handleDropdownItemClick(item, 'services')}
    className="block w-full px-0.5 py-0.5 text-xs text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded transition-colors duration-200 text-center"
  >
    {item.text} {/* Access the text property */}
  </button>
))}
                  </div>
                </div>
              </div>
              
              {/* Blogs Dropdown */}
              <div className="mb-1">
                <button
                  onClick={() => toggleMobileDropdown('blogs')}
                  className="flex flex-col items-center justify-center w-full px-0.5 py-1.5 text-xs font-bold text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <span>Blogs</span>
                  <ChevronDown className={`w-2.5 h-2.5 mt-0.5 transition-transform duration-300 ${
                    activeMobileDropdown === 'blogs' ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                  activeMobileDropdown === 'blogs' 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="mt-0.5 space-y-0.5">
                    {DROPDOWN_CONFIG.blogs.items.map((item, index) => (
                      <button
                        key={`mobile-blogs-${index}`}
                        onClick={() => handleButtonClick('blogs')}
                        className="block w-full px-0.5 py-0.5 text-xs text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded transition-colors duration-200 text-center"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* About Dropdown */}
              <div className="mb-1">
                <button
                  onClick={() => toggleMobileDropdown('aboutUs')}
                  className="flex flex-col items-center justify-center w-full px-0.5 py-1.5 text-xs font-bold text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <span>About</span>
                  <ChevronDown className={`w-2.5 h-2.5 mt-0.5 transition-transform duration-300 ${
                    activeMobileDropdown === 'aboutUs' ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                  activeMobileDropdown === 'aboutUs' 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="mt-0.5 space-y-0.5">
                    {DROPDOWN_CONFIG.aboutUs.items.map((item, index) => (
                      <button
                        key={`mobile-about-${index}`}
                        onClick={() => handleButtonClick('about', typeof item === 'string' ? '#' : item.link)}
                        className="block w-full px-0.5 py-0.5 text-xs text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded transition-colors duration-200 text-center"
                      >
                        {typeof item === 'string' ? item : item.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Login Button - Below all content */}
            <div className="flex justify-center pt-2 border-t border-gray-200">
              <button
                ref={mobileLoginButtonRef}
                className="relative flex items-center px-20 py-1.5 text-[#DD5100] font-semibold rounded-full bg-white border border-[#DD5100] overflow-hidden transition-all duration-300 group text-xs"
                onMouseEnter={handleMobileLoginHover}
                onMouseLeave={handleMobileLoginLeave}
                onClick={() => alert('Login functionality to be implemented')}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Login
                </span>
                <span className="pseudo-element absolute left-[-20px] w-0 h-[500px] bg-[#DD5100] rotate-[-29deg] transition-all duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
};

export default Header;