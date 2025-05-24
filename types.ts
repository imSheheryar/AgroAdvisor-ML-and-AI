
export interface CropFeatures {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
}

export type FeatureKey = keyof CropFeatures;

export interface FeatureConfig {
  label: string;
  key: FeatureKey;
  placeholder: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
}
