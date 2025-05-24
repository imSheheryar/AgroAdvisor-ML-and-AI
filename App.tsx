
import React, { useState, useCallback } from 'react';
import { CropInputForm } from './components/CropInputForm';
import { RecommendationResult } from './components/RecommendationResult';
import { getCropRecommendation } from './services/predictionService';
import type { CropFeatures } from './types';
import { LeafIcon } from './components/LeafIcon';
import { IntroScreen } from './components/IntroScreen'; // Import IntroScreen

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true); // State for intro screen
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleProceedToApp = useCallback(() => {
    setShowIntro(false);
  }, []);

  const handlePrediction = useCallback(async (features: CropFeatures) => {
    setIsLoading(true);
    setError(null);
    setRecommendation(null);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    try {
      const cropName = getCropRecommendation(features);
      setRecommendation(cropName);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred during prediction.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (showIntro) {
    return <IntroScreen onProceed={handleProceedToApp} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      <main className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-xl w-full max-w-2xl overflow-hidden">
        <header className="bg-brand-green p-6 sm:p-8 text-white text-center">
          <div className="flex items-center justify-center space-x-3">
            <LeafIcon className="h-10 w-10 text-white" />
            <h1 className="text-3xl sm:text-4xl font-serif font-bold">AgroAdvisor</h1>
          </div>
          <p className="mt-2 text-sm sm:text-base text-green-100">
            Smart Crop Recommendations for Modern Farming
          </p>
        </header>

        <div className="p-6 sm:p-8">
          <CropInputForm onSubmit={handlePrediction} isLoading={isLoading} />
          
          {error && (
            <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md">
              <p className="font-semibold">Error</p>
              <p>{error}</p>
            </div>
          )}

          <RecommendationResult recommendation={recommendation} isLoading={isLoading} />
        </div>
        
        <footer className="bg-gray-100/50 px-6 py-4 text-center text-xs text-gray-600 border-t border-gray-200">
          <p>&copy; {new Date().getFullYear()} AgroAdvisor. Created by Sheheryar Yousaf.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;