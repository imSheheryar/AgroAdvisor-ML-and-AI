
import React, { useState } from 'react';
import type { CropFeatures, FeatureKey } from '../types';
import { FEATURE_CONFIGS, INITIAL_FEATURES } from '../constants';

interface CropInputFormProps {
  onSubmit: (features: CropFeatures) => void;
  isLoading: boolean;
}

const InputField: React.FC<{
  config: typeof FEATURE_CONFIGS[0];
  value: string;
  onChange: (key: FeatureKey, value: string) => void;
}> = ({ config, value, onChange }) => (
  <div className="mb-5">
    <label htmlFor={config.key} className="block text-sm font-medium text-brand-brown-dark mb-1">
      {config.label} {config.unit && `(${config.unit})`}
    </label>
    <input
      type="number"
      id={config.key}
      name={config.key}
      value={value}
      onChange={(e) => onChange(config.key, e.target.value)}
      placeholder={config.placeholder}
      min={config.min}
      max={config.max}
      step={config.step}
      required
      className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-green focus:border-brand-green sm:text-sm transition-colors duration-150 ease-in-out hover:border-gray-400"
    />
  </div>
);


export const CropInputForm: React.FC<CropInputFormProps> = ({ onSubmit, isLoading }) => {
  const [formValues, setFormValues] = useState<{ [K in FeatureKey]: string }>(INITIAL_FEATURES);

  const handleChange = (key: FeatureKey, value: string) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Fix: Cast to unknown first, then to CropFeatures to resolve the type error.
    // The structure of formValues and the mapping operation ensure that the resulting object
    // will have the correct shape for CropFeatures.
    const features: CropFeatures = Object.fromEntries(
      Object.entries(formValues).map(([key, value]) => [key, parseFloat(value)])
    ) as unknown as CropFeatures;
    onSubmit(features);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
        {FEATURE_CONFIGS.map(config => (
          <InputField
            key={config.key}
            config={config}
            value={formValues[config.key]}
            onChange={handleChange}
          />
        ))}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-brand-green hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-dark transition-all duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          'Get Recommendation'
        )}
      </button>
    </form>
  );
};
