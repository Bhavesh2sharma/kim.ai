import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ 
  isExpanded, 
  onSearch, 
  placeholder = "Search...", 
  className = "",
  isMobile = false,
  isVisible = true 
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isExpanded && isVisible && inputRef.current) {
      // Small delay to ensure the animation has started
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isExpanded, isVisible]);

  const handleSubmit = () => {
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClear();
    } else if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (isMobile) {
    return (
      <div className={`transition-all duration-300 ease-out ${className}`}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={`w-full pl-10 pr-10 py-2 text-sm border border-gray-300 rounded-full 
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
              transition-all duration-300 ${
                isFocused ? 'shadow-lg' : 'shadow-md'
              }`}
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`transition-all duration-500 ease-out ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full pl-12 pr-12 py-3 text-base border border-gray-300 rounded-full 
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
            transition-all duration-300 ${
              isFocused ? 'shadow-lg bg-white' : 'shadow-md bg-gray-50'
            }`}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;