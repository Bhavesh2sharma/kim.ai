import React from 'react';

const Screens = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto">

      
      {/* Laptop Screen Content*/}
      <div className="absolute top-[21.2%] left-[15.9%] w-[68%] h-[42.2%] overflow-hidden z-[-1]">
        <img 
          src="/SSHomepage.png" 
          className="w-full h-full "
          alt="Laptop screen content"
          style={{ 
            transform: 'perspective(1200px)',
            transformOrigin: 'top center'
          }}
          draggable="false"
        />
      </div>
      
      {/* Phone Screen Content*/}
      <div className="absolute top-[48%] left-[77.8%] w-[15.6%] h-[33.4%] overflow-hidden rounded-[6%] z-[-1]">
        <img 
          src="/SSHome.png" 
          className="w-full h-full"
          alt="Phone screen content"
          draggable="false"
        />
      </div>

      {/* Base devices image*/}
      <img 
        src="/laptopphone.png" 
        alt="Laptop and phone collection"
        className="w-full h-auto relative z-10"
        draggable="false"
      />
    </div>
  );
};

export default Screens;