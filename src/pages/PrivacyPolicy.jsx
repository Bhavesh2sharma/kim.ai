import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      <div className="max-w-3xl mx-auto px-6 py-10 text-gray-700 pt-30">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="mb-4">
          At <span className="font-semibold">Kimova.AI</span>, we prioritize your privacy and security.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Data Collection</h2>
        <p>
          We collect essential personal and technical data to provide accurate audits and security services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Data Security</h2>
        <p>
          We do not share user data with any third parties unless required for cybersecurity services. Our app ensures that login user data is fully secured.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Third-Party Services</h2>
        <p>
          While we manage third-party services, we are not responsible for their privacy policies. Please review their terms before using their services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact Us</h2>
        <p>
          For privacy concerns, contact{" "}
          <a href="mailto:info@kimova.ai" className="text-blue-500">
            info@kimova.ai
          </a>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
