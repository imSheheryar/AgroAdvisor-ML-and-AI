
import type { FeatureConfig, FeatureKey } from './types';

export const CROP_MAP: { [key: number]: string } = {
  0: 'Rice',
  1: 'Maize',
  2: 'Chickpea',
  3: 'Kidney Beans',
  4: 'Pigeon Peas',
  5: 'Moth Beans',
  6: 'Mung Bean',
  7: 'Black Gram',
  8: 'Lentil',
  9: 'Pomegranate',
  10: 'Banana',
  11: 'Mango',
  12: 'Grapes',
  13: 'Watermelon',
  14: 'Muskmelon',
  15: 'Apple',
  16: 'Orange',
  17: 'Papaya',
  18: 'Coconut',
  19: 'Cotton',
  20: 'Jute',
  21: 'Coffee'
};

export const FEATURE_CONFIGS: FeatureConfig[] = [
  { label: 'Nitrogen (N)', key: 'nitrogen', placeholder: 'e.g., 90', min: 0, max: 200, step: 1, unit: 'kg/ha' },
  { label: 'Phosphorus (P)', key: 'phosphorus', placeholder: 'e.g., 50', min: 0, max: 150, step: 1, unit: 'kg/ha' },
  { label: 'Potassium (K)', key: 'potassium', placeholder: 'e.g., 50', min: 0, max: 250, step: 1, unit: 'kg/ha' },
  { label: 'Temperature', key: 'temperature', placeholder: 'e.g., 25', min: -10, max: 50, step: 0.1, unit: '°C' },
  { label: 'Humidity', key: 'humidity', placeholder: 'e.g., 70', min: 0, max: 100, step: 0.1, unit: '%' },
  { label: 'pH Value', key: 'ph', placeholder: 'e.g., 6.5', min: 0, max: 14, step: 0.1, unit: '' },
  { label: 'Rainfall', key: 'rainfall', placeholder: 'e.g., 100', min: 0, max: 500, step: 0.1, unit: 'mm' },
];

export const INITIAL_FEATURES: { [K in FeatureKey]: string } = {
  nitrogen: '90',
  phosphorus: '50',
  potassium: '50',
  temperature: '25',
  humidity: '70',
  ph: '6.5',
  rainfall: '100',
};
