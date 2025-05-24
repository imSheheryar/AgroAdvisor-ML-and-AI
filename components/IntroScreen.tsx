
import React from 'react';
import { LeafIcon } from './LeafIcon';

interface IntroScreenProps {
  onProceed: () => void;
}

// Simple SVG Icons for details
const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2-2h10v10H5V3z" />
    <path d="M15 4v12H5V4h10zm-2 2H7v8h6V6z" />
    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
     <path d="M4 14.585V5a1 1 0 011-1h10a1 1 0 011 1v9.585A3.5 3.5 0 0112.5 16H7.5A3.5 3.5 0 014 14.585zM5.5 4a.5.5 0 00-.5.5v9.585a2.5 2.5 0 002.5 2.5h5a2.5 2.5 0 002.5-2.5V5a.5.5 0 00-.5-.5h-9z"/>
    <path d="M9 5.5a.5.5 0 00-.5.5v8a.5.5 0 001 0v-8a.5.5 0 00-.5-.5z"/>
  </svg>
);


const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10.394 2.006a2 2 0 00-1.938 0L2.5 5.586A2 2 0 002 7.382V11a2 2 0 00.949 1.721L9 16.994V19a1 1 0 102 0v-2.006l6.051-4.273A2 2 0 0018 11V7.382a2 2 0 00-.5-1.796l-5.957-3.58zM10 14.395L4 10.362V7.382l5.95-3.57 6.05 3.57v2.98L10 14.395z" />
    <path d="M6 11.586l4 2.368 4-2.368V9.414l-4 2.368-4-2.368v2.172zM16.5 6.006L10.551 2.43A1 1 0 0010 2a1 1 0 00-.551.43L3.5 6.006M2 7.382v.001"/> 
  </svg>
);

const BuildingLibraryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v1H3V4zm0 3h14v9a1 1 0 01-1 1H4a1 1 0 01-1-1V7zm2 2h2v5H5V9zm4 0h2v5H9V9zm4 0h2v2h-2V9z" clipRule="evenodd" />
  </svg>
);


export const IntroScreen: React.FC<IntroScreenProps> = ({ onProceed }) => {
  const details = [
    { label: "Created by", value: "Sheheryar Yousaf", Icon: UserIcon },
    { label: "Course", value: "ML AND AI", Icon: BookOpenIcon },
    { label: "Professor", value: "Fiammetta Marulli", Icon: AcademicCapIcon },
    { label: "University", value: 'Università degli Studi della Campania "Luigi Vanvitelli"', Icon: BuildingLibraryIcon },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 font-sans bg-gradient-to-br from-brand-green-light via-brand-cream to-yellow-100">
      <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl w-full max-w-2xl p-8 sm:p-12 text-center overflow-hidden">
        
        <div className="animate-fadeInUp delay-200ms">
           <LeafIcon className="h-20 w-20 sm:h-24 sm:w-24 text-brand-green mx-auto mb-4 animate-pulseSlow" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-green-dark mb-2 animate-fadeInUp delay-400ms">
          Welcome to AgroAdvisor
        </h1>
        <p className="text-md sm:text-lg text-brand-brown-dark mb-8 animate-fadeInUp delay-600ms">
          Smart Crop Recommendations for Modern Farming
        </p>

        <div className="animate-fadeInUp delay-800ms max-w-lg mx-auto mb-10 space-y-4">
          {details.map((item, index) => (
            <div 
              key={index} 
              className="bg-brand-cream/50 p-4 rounded-lg shadow-md border border-brand-green-light/50 flex items-center space-x-3"
            >
              <item.Icon className="h-6 w-6 text-brand-green-dark flex-shrink-0" />
              <div>
                <span className="block text-xs sm:text-sm font-semibold text-brand-brown-dark uppercase tracking-wider">{item.label}</span>
                <span className="block text-sm sm:text-base text-gray-700">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onProceed}
          className="w-full max-w-xs mx-auto flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-brand-green hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-dark transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95 animate-fadeInUp delay-1000ms"
        >
          Launch AgroAdvisor
        </button>
        
         <p className="mt-10 text-xs text-gray-500 animate-fadeInUp delay-1200ms">
          &copy; {new Date().getFullYear()} AgroAdvisor Project
        </p>
      </div>
    </div>
  );
};
