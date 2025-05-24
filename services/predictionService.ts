
import type { CropFeatures } from '../types';
import { CROP_MAP } from '../constants';

// Simulated means and standard deviations for scaling.
// These would typically come from a trained StandardScaler object.
const FEATURE_STATS = {
  nitrogen: { mean: 90, std: 35 }, // Adjusted std for more variability
  phosphorus: { mean: 55, std: 30 }, // Adjusted std
  potassium: { mean: 50, std: 25 }, // Adjusted std
  temperature: { mean: 25.5, std: 6 }, // Adjusted mean and std
  humidity: { mean: 70.0, std: 20 }, // Adjusted mean and std
  ph: { mean: 6.4, std: 0.8 }, // Adjusted mean and std
  rainfall: { mean: 103.0, std: 55 }, // Adjusted mean and std
};

// Simulate StandardScaler's transform method
const scaleFeatures = (features: CropFeatures): number[] => {
  // Basic validation to prevent division by zero or NaN results if std is 0
  const safeDivide = (value: number, mean: number, std: number): number => {
    if (std === 0) return (value - mean); // Avoid division by zero, return difference from mean
    return (value - mean) / std;
  };

  return [
    safeDivide(features.nitrogen, FEATURE_STATS.nitrogen.mean, FEATURE_STATS.nitrogen.std),
    safeDivide(features.phosphorus, FEATURE_STATS.phosphorus.mean, FEATURE_STATS.phosphorus.std),
    safeDivide(features.potassium, FEATURE_STATS.potassium.mean, FEATURE_STATS.potassium.std),
    safeDivide(features.temperature, FEATURE_STATS.temperature.mean, FEATURE_STATS.temperature.std),
    safeDivide(features.humidity, FEATURE_STATS.humidity.mean, FEATURE_STATS.humidity.std),
    safeDivide(features.ph, FEATURE_STATS.ph.mean, FEATURE_STATS.ph.std),
    safeDivide(features.rainfall, FEATURE_STATS.rainfall.mean, FEATURE_STATS.rainfall.std),
  ];
};

// Simulate the ML model prediction.
// This is a very naive simulation. A real model would use complex calculations.
const predictCropIndex = (scaledFeatures: number[]): number => {
  // A simple weighted sum approach for demonstration, then modulo by number of crops.
  // Weights are arbitrary for this simulation.
  const weights = [0.15, 0.15, 0.15, 0.2, 0.15, 0.05, 0.15]; 
  let weightedSum = 0;

  for (let i = 0; i < scaledFeatures.length; i++) {
    // Ensure features are numbers and not NaN before calculation
    const featureValue = isNaN(scaledFeatures[i]) ? 0 : scaledFeatures[i];
    weightedSum += featureValue * weights[i];
  }
  
  const numCrops = Object.keys(CROP_MAP).length;
  if (numCrops === 0) return 0; // Should not happen if CROP_MAP is populated

  // Make the index deterministic but pseudo-random based on the weighted sum
  // Using Math.abs and modulo to ensure it's within the bounds of CROP_MAP indices
  // Multiply by a prime number to spread values more
  const pseudoRandomIndex = Math.abs(Math.floor(weightedSum * 10007)) % numCrops;
  
  return pseudoRandomIndex;
};

export const getCropRecommendation = (features: CropFeatures): string => {
  // Basic input validation
  for (const key in features) {
    if (isNaN(features[key as keyof CropFeatures])) {
      throw new Error(`Invalid input: ${key} is not a number.`);
    }
  }

  const scaled = scaleFeatures(features);
  const cropIndex = predictCropIndex(scaled);
  
  const recommendedCrop = CROP_MAP[cropIndex];
  
  if (!recommendedCrop) {
    // Fallback if index somehow is out of bounds (shouldn't happen with modulo)
    console.warn(`No crop found for index: ${cropIndex}. Defaulting.`);
    return CROP_MAP[0] || "Default Crop"; 
  }
  
  return recommendedCrop;
};
