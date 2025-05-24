import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClimbingBoxLoader } from "react-spinners";
import notFoundImage from '../assets/not-found.png';
import notFoundPhoneImage from '../assets/not-found-phone.png';

const NotFound = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for short time to match other pages' behavior
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <ClimbingBoxLoader color="#2563EB" loading={true} size={15} />
      </div>    );
  }
  
  return (
    <div className="relative min-h-screen overflow-hidden">      {/* Background Image - Full Screen with responsive image switching */}
      <img 
        src={notFoundImage} 
        alt="Space Background" 
        className="absolute inset-0 w-full h-full object-cover object-center hidden sm:block"
      />
      {/* Mobile-specific Background Image */}
      <img 
        src={notFoundPhoneImage} 
        alt="Space Background Mobile" 
        className="absolute inset-0 w-full h-full object-cover object-center block sm:hidden"
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-black/60"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 drop-shadow-lg">
          Oops! Lost in Cyberspace? <span className="inline-block animate-pulse">🚀💫</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-blue-100 mb-8 sm:mb-10 md:mb-14 max-w-xs sm:max-w-md mx-auto text-sm sm:text-base font-medium drop-shadow-md">
          Looks like this page went off the grid. Let's get you back on track! <span className="inline-block">🧭</span>
        </p>
        
        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center bg-blue-600/80 hover:bg-blue-500 text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-xl border border-blue-400/30 backdrop-blur-[2px] text-sm sm:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Return to Mission Control
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
