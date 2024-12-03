import React from 'react';
import { BuildConfiguration } from '../types/components';
import { checkCompatibility } from '../utils/compatibility';
import { ShoppingCart, AlertTriangle, Check } from 'lucide-react';

interface BuildSummaryProps {
  configuration: BuildConfiguration;
}

export function BuildSummary({ configuration }: BuildSummaryProps) {
  const { compatible, issues } = checkCompatibility(configuration);
  const totalPrice = Object.values(configuration).reduce(
    (sum, component) => sum + (component?.price || 0),
    0
  );

  return (
    <div className="lg:fixed lg:right-0 lg:top-0 lg:h-screen lg:w-80 bg-white shadow-lg p-4 overflow-y-auto">
      <div className="sticky top-0 bg-white pb-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Build Summary</h2>
          {compatible ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          )}
        </div>
      </div>
      
      <div className="space-y-4 mt-4">
        {Object.entries(configuration).map(([key, component]) => (
          component && (
            <div key={key} className="border-b pb-2">
              <p className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              <p className="text-sm text-gray-600">{component.name}</p>
              <p className="text-sm text-gray-800">${component.price.toFixed(2)}</p>
            </div>
          )
        ))}
      </div>

      <div className="sticky bottom-0 bg-white pt-4 border-t mt-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-bold">Total:</p>
          <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
        </div>

        <button
          className={`w-full py-2 px-4 rounded-md flex items-center justify-center gap-2 ${
            compatible
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 cursor-not-allowed text-gray-600'
          }`}
          disabled={!compatible}
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Checkout Build</span>
        </button>
      </div>

      {!compatible && issues.length > 0 && (
        <div className="mt-4 p-3 bg-amber-50 rounded-md border border-amber-200">
          <p className="text-amber-700 font-medium flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Compatibility Issues:
          </p>
          <ul className="text-sm text-amber-600 list-disc pl-4 mt-2">
            {issues.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}