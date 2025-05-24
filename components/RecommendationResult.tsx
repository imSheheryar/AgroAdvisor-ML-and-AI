
import React from 'react';

interface RecommendationResultProps {
  recommendation: string | null;
  isLoading: boolean;
}

export const RecommendationResult: React.FC<RecommendationResultProps> = ({ recommendation, isLoading }) => {
  if (isLoading) {
    return (
      <div className="mt-8 p-6 bg-green-50 border-2 border-dashed border-brand-green-light rounded-lg text-center">
        <div className="animate-pulse">
          <div className="h-4 bg-slate-300 rounded w-3/4 mx-auto mb-3"></div>
          <div className="h-8 bg-slate-400 rounded w-1/2 mx-auto"></div>
        </div>
         <p className="text-brand-green-dark font-medium mt-2">Analyzing data...</p>
      </div>
    );
  }

  if (!recommendation) {
    return (
      <div className="mt-8 p-6 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg text-center">
        <p className="text-gray-500">Enter your farm's data above to get a crop recommendation.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 p-6 bg-brand-green-light/30 border-2 border-brand-green rounded-lg text-center shadow-lg">
      <h2 className="text-xl font-semibold text-brand-brown-dark mb-2">Recommended Crop:</h2>
      <p className="text-3xl font-bold text-brand-green-dark animate-fadeIn">
        {recommendation}
      </p>
      <p className="mt-3 text-sm text-gray-600">
        This recommendation is based on the provided data and a simplified model. For precise agricultural decisions, consult with a local expert.
      </p>
       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
