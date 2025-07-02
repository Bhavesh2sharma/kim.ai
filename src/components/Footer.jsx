import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Text above footer */}
      <div className="py-4">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p className="italic text-lg text-gray-700">
            Built on secure Google Cloud infrastructure & supported by the Google Cloud for Startups Program.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#DD5100] text-white pt-16 pb-10">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Footer Navigation - Organized in sections */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1 Mobile: Navigation & Resources */}
            <div className="lg:col-span-1">
              {/* Navigation */}
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h3 className="text-xl font-bold mb-4 text-white">Navigation</h3>
                <div className="space-y-2">
                  <Link 
                    to="/" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Resources - Shows under Navigation on mobile */}
              <div className="text-center lg:text-left lg:hidden">
                <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
                <div className="space-y-2">
                  <Link 
                    to="/blog1" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Blog 1
                  </Link>
                  <Link 
                    to="/blog2" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Blog 2
                  </Link>
                  <Link 
                    to="/blog3" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Blog 3
                  </Link>
                  <Link 
                    to="/blog4" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Blog 4
                  </Link>
                  <Link 
                    to="/team" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Team
                  </Link>
                  <Link 
                    to="/turboadit" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    TurboAudit
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2 Mobile: Legal & Services */}
            <div className="lg:col-span-1">
              {/* Legal */}
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h3 className="text-xl font-bold mb-4 text-white">Legal</h3>
                <div className="space-y-2">
                  <Link 
                    to="/terms" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Terms & Conditions
                  </Link>
                  <Link 
                    to="/privacy" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Services - Shows under Legal on mobile */}
              <div className="text-center lg:text-left lg:hidden">
                <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
                <div className="space-y-2">
                  <Link 
                    to="/ai-policy" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    AI Policy Analyzer
                  </Link>
                  <Link 
                    to="/ai-audit" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    AI ISMS Audit
                  </Link>
                  <Link 
                    to="/ai-notes" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    AI Audit Notes
                  </Link>
                  <Link 
                    to="/ask-isms" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Ask ISMS
                  </Link>
                  <Link 
                    to="/ask-aims" 
                    className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                  >
                    Ask AIMS
                  </Link>
                </div>
              </div>
            </div>

            {/* Services - Desktop only */}
            <div className="hidden lg:block text-center lg:text-left">
              <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
              <div className="space-y-2">
                <Link 
                  to="/ai-policy" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  AI Policy Analyzer
                </Link>
                <Link 
                  to="/ai-audit" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  AI ISMS Audit
                </Link>
                <Link 
                  to="/ai-notes" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  AI Audit Notes
                </Link>
                <Link 
                  to="/ask-isms" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  Ask ISMS
                </Link>
                <Link 
                  to="/ask-aims" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  Ask AIMS
                </Link>
              </div>
            </div>

            {/* Resources - Desktop only */}
            <div className="hidden lg:block text-center lg:text-left">
              <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
              <div className="space-y-2">
                <Link 
                  to="/blog1" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  {/* Blog 1 */}
                  Blogs
                </Link>
                {/* <Link 
                  to="/blog2" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  Blog 2
                </Link>
                <Link 
                  to="/blog3" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  Blog 3
                </Link>
                <Link 
                  to="/blog4" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  Blog 4
                </Link> */}
                <Link 
                  to="/team" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  Team
                </Link>
                <Link 
                  to="/turboadit" 
                  className="block hover:underline transition duration-300 text-lg hover:text-orange-200"
                >
                  TurboAudit
                </Link>
              </div>
            </div>
          </div>

          {/* Logo - Centered on mobile */}
          <div className="flex justify-center mb-8 lg:hidden">
            <img 
              src="/kimova.png" 
              alt="Kimova Logo" 
              className="h-16 w-auto "
            />
          </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/30 pt-8 text-center text-base">
            © Copyright 2025 Kimova AI OÜ. All rights reserved. <Link to="/impressum" className="hover:underline hover:text-orange-200 transition duration-300">Impressum</Link>
          </div>
        
      </footer>
    </>
  );
};

export default Footer;