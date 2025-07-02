import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaPaperclip, FaTimes, FaComment } from 'react-icons/fa';

const FloatingForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null
  });
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const pseudoElementRef = useRef(null);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    } else {
      setFileName('');
    }
  };

  const handleRemoveFile = () => {
    setFileName('');
    setFormData(prev => ({ ...prev, file: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent successfully!');
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    gsap.to(pseudoElementRef.current, {
      width: '250%',
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pseudoElementRef.current, {
      width: '0',
      duration: 0.5,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    if (isOpen) {
      gsap.from(formRef.current, {
        duration: 0.5,
        y: 100,
        opacity: 0,
        ease: "back.out(1.7)"
      });
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Attractive Icon Button */}
      <button
        ref={buttonRef}
        onClick={toggleForm}
        className="relative flex items-center justify-center w-16 h-16 bg-[#DD5100] rounded-full shadow-xl hover:bg-[#C44600] border border-white hover:border-[#DD5100] transition-all duration-300 overflow-hidden group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FaComment className="text-white text-2xl z-10" />
        <span
          ref={pseudoElementRef}
          className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
        ></span>
      </button>

      {/* Floating Form with exact colors from reference */}
      {isOpen && (
        <div 
          ref={formRef}
          className="absolute bottom-24 right-0 bg-white rounded-xl shadow-2xl w-96 max-h-[80vh] overflow-y-auto p-8 border border-gray-200"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-[#00283b]">Get you Comprehensive ISMS guide</h3>
            <button 
              onClick={toggleForm}
              className="text-gray-500 hover:text-white text-xl"
            >
              <FaTimes />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6 relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-3 border-b border-gray-300 focus:outline-none focus:border-[#00283b] bg-transparent"
                required
              />
              <label 
                htmlFor="name" 
                className={`absolute left-0 transition-all duration-200 ${formData.name ? '-top-5 text-sm text-[#00283b]' : 'top-3 text-gray-500'}`}
              >
                Name *
              </label>
            </div>

            <div className="mb-6 relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-3 border-b border-gray-300 focus:outline-none focus:border-[#00283b] bg-transparent"
                required
              />
              <label 
                htmlFor="email" 
                className={`absolute left-0 transition-all duration-200 ${formData.email ? '-top-5 text-sm text-[#00283b]' : 'top-3 text-gray-500'}`}
              >
                E-mail *
              </label>
            </div>

            <div className="mb-6 relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-3 border-b border-gray-300 focus:outline-none focus:border-[#00283b] bg-transparent"
                required
              ></textarea>
              <label 
                htmlFor="message" 
                className={`absolute left-0 transition-all duration-200 ${formData.message ? '-top-5 text-sm text-[#00283b]' : 'top-3 text-gray-500'}`}
              >
                What we can do for you? *
              </label>
            </div>

            {/* File Attachment */}
            {fileName && (
              <div className="mb-6 py-2 px-3 bg-gray-50 rounded-md flex items-center">
                <FaPaperclip className="text-[#00283b] flex-shrink-0" />
                <span className="ml-2 text-sm text-[#00283b] truncate max-w-[calc(100%-60px)]">{fileName}</span>
                <button 
                  type="button" 
                  className="ml-auto text-gray-500 hover:text-[#00283b] p-1"
                  onClick={handleRemoveFile}
                >
                  <FaTimes />
                </button>
              </div>
            )}

            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="text-[#00283b] hover:text-black flex items-center text-sm font-medium"
                >
                  <FaPaperclip className="mr-2" />
                  <span>Attach file</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              <button
                type="submit"
                className="relative inline-flex items-center px-6 py-3 text-white bg-[#00283b] border border-[#00283b] rounded-full hover:text-[#00283b] hover:bg-[#001a2b] transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10 font-medium">
                Download E-Book
                </span>
                <span
                  className="absolute left-[-20px] w-0 h-[500px] bg-white rotate-[-29deg] transition-all duration-500 group-hover:w-[250%]"
                ></span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FloatingForm;