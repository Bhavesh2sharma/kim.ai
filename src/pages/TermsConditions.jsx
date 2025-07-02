import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsConditions = () => {
  return (
    <>
    <Header />
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-700 pt-30">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Terms & Conditions
      </h1>
      <p className="mb-4">
        Welcome to <span className="font-semibold">TurboAudit by Kimova.AI</span>. By using our services, you agree to the following terms:
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Service Overview</h2>
      <p>
        Kimova.AI provides direct services, Audits, and security consultations.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Third-Party Services</h2>
      <p>
        We collaborate with third-party service providers, but all service-related payments **must be made through KIMOVA.AI**. We are responsible for service coordination, but third-party providers are responsible for their policies and service execution.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
      <p>
        Users must provide accurate cyber information and follow our payment terms. KIMOVA.AI is not liable for misrepresentation of technical conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact Us</h2>
      <p>
        For inquiries, please reach out to us at{" "}
        <a href="mailto:info@kimova.ai" className="text-blue-500">
          info@kimova.ai
        </a>
      </p>
    </div>
    <Footer />
    </>
  );
};

export default TermsConditions;

