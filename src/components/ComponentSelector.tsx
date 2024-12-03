import React from 'react';
import { Component } from '../types/components';

interface ComponentSelectorProps<T extends Component> {
  label: string;
  options: T[];
  value?: T;
  onChange: (component: T | undefined) => void;
  disabled?: boolean;
}

export function ComponentSelector<T extends Component>({
  label,
  options,
  value,
  onChange,
  disabled = false
}: ComponentSelectorProps<T>) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        className="w-full p-2 border rounded-md bg-white disabled:bg-gray-100"
        value={value?.id || ''}
        onChange={(e) => {
          const selected = options.find(opt => opt.id === e.target.value);
          onChange(selected);
        }}
        disabled={disabled}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name} - ${option.price.toFixed(2)}
          </option>
        ))}
      </select>
    </div>
  );
}