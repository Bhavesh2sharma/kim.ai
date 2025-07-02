import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ isHeaderHovered = false }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log('Searching for:', searchValue);
      // Add your search logic here
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <div className="relative z-10 w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
      <div onSubmit={handleSearch} className="w-full">
        <div 
          className={`
            flex items-center relative overflow-hidden cursor-pointer
            transition-all duration-300 ease-in-out
            ${isHeaderHovered 
              ? 'w-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 md:px-6' 
              : 'w-20 sm:w-24 md:w-28 lg:w-32 h-8 sm:h-9 md:h-10 px-3 sm:px-4'
            }
            ${isFocused 
              ? 'bg-orange-600 border-orange-400 shadow-lg ring-2 ring-orange-200' 
              : 'bg-[#DD5100] border-[#DD5100] hover:bg-orange-600 hover:border-orange-600'
            }
            border-2 rounded-full shadow-md
          `}
        >
          {/* Search Icon */}
          <Search 
            className={`
              text-white flex-shrink-0 transition-all duration-300 ease-in-out
              ${isHeaderHovered 
                ? 'w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3' 
                : 'w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2'
              }
            `}
          />

          {/* Search Input */}
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search..."
            className={`
              flex-1 bg-transparent border-none outline-none text-white
              placeholder-white/70 transition-all duration-300 ease-in-out
              ${isHeaderHovered 
                ? 'opacity-100 w-full pointer-events-auto text-sm sm:text-base md:text-lg' 
                : 'opacity-0 w-0 pointer-events-none text-xs sm:text-sm'
              }
            `}
          />

          {/* Search Text (visible when collapsed) */}
          <span 
            className={`
              text-white font-medium whitespace-nowrap transition-all duration-300 ease-in-out
              ${isHeaderHovered 
                ? 'opacity-0 pointer-events-none' 
                : 'opacity-100 text-xs sm:text-sm md:text-base'
              }
            `}
          >
            Search
          </span>

          {/* Clear Button (visible when expanded and has content) */}
          {isHeaderHovered && searchValue && (
            <button
              type="button"
              onClick={handleClear}
              className="
                ml-2 p-1 text-white/70 hover:text-white 
                transition-colors duration-200 flex-shrink-0
                focus:outline-none focus:ring-2 focus:ring-white/30 rounded-full
              "
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
        </div>
        </div>

      {/* Mobile-specific adjustments */}
      <style jsx>{`
        @media (max-width: 480px) {
          .search-container {
            max-width: 280px;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchBar;