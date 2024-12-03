import React, { useState, useEffect } from 'react';
import { Settings, Plus, Edit2, Trash2, AlertCircle } from 'lucide-react';

interface Component {
  id: string;
  name: string;
  price: number;
  manufacturer_name?: string;
  [key: string]: any;
}

export function Admin() {
  const [componentType, setComponentType] = useState('processors');
  const [components, setComponents] = useState<Component[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentComponent, setCurrentComponent] = useState<Component | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComponents();
  }, [componentType]);

  const fetchComponents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`http://localhost:3000/api/components/${componentType}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch components');
      }
      
      const data = await response.json();
      setComponents(data);
    } catch (error) {
      console.error('Error fetching components:', error);
      setError('Failed to load components. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const componentData = Object.fromEntries(formData.entries());

    try {
      setError(null);
      const url = `http://localhost:3000/api/admin/${componentType}${
        isEditing && currentComponent ? `/${currentComponent.id}` : ''
      }`;
      
      const response = await fetch(url, {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(componentData),
      });

      if (!response.ok) {
        throw new Error('Failed to save component');
      }

      await fetchComponents();
      setIsEditing(false);
      setCurrentComponent(null);
    } catch (error) {
      console.error('Error saving component:', error);
      setError('Failed to save component. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this component?')) return;

    try {
      setError(null);
      const response = await fetch(`http://localhost:3000/api/admin/${componentType}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete component');
      }

      await fetchComponents();
    } catch (error) {
      console.error('Error deleting component:', error);
      setError('Failed to delete component. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-8">
          <Settings className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex items-center space-x-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              <p>{error}</p>
            </div>
          </div>
        )}

        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Component Type
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={componentType}
              onChange={(e) => setComponentType(e.target.value)}
            >
              <option value="processors">Processors</option>
              <option value="motherboards">Motherboards</option>
              <option value="ram_modules">RAM</option>
              <option value="graphics_cards">Graphics Cards</option>
              <option value="storage_devices">Storage</option>
              <option value="power_supplies">Power Supplies</option>
              <option value="cases">Cases</option>
            </select>
          </div>

          <div className="mb-8">
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentComponent(null);
              }}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Component
            </button>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <p className="text-center py-4 text-gray-600">Loading components...</p>
            ) : components.length === 0 ? (
              <p className="text-center py-4 text-gray-600">No components found</p>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Manufacturer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {components.map((component) => (
                    <tr key={component.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{component.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{component.manufacturer_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${component.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          onClick={() => {
                            setIsEditing(true);
                            setCurrentComponent(component);
                          }}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(component.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;