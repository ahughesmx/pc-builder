import React from 'react';
import { ManufacturerOption } from '../types/manufacturers';

interface ManufacturerSelectorProps {
  options: ManufacturerOption[];
  selected?: ManufacturerOption;
  onSelect: (manufacturer: ManufacturerOption) => void;
}

export function ManufacturerSelector({ options, selected, onSelect }: ManufacturerSelectorProps) {
  return (
    <div className="flex gap-6 justify-center">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option)}
          className={`flex-1 max-w-[200px] p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
            selected?.id === option.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          }`}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-sm">
              <img
                src={option.logo}
                alt={option.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="font-medium text-lg">{option.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
}