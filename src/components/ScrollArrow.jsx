import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const ScrollArrow = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToNextSection = () => {
    if (!sections || sections.length === 0) return;

    const nextSection = (currentSection + 1) % sections.length;
    sections[nextSection].current.scrollIntoView({
      behavior: 'smooth'
    });
    setCurrentSection(nextSection);
  };

  return (
    <div 
      className="scroll-arrow"
      onClick={scrollToNextSection}
    >
      <FaArrowDown />
    </div>
  );
};

export default ScrollArrow;