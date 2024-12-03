import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BuildConfiguration } from './types/components';
import { ManufacturerOption } from './types/manufacturers';
import { ComponentSelector } from './components/ComponentSelector';
import { ManufacturerSelector } from './components/ManufacturerSelector';
import { BuildSummary } from './components/BuildSummary';
import { manufacturerOptions } from './data/manufacturers';
import { processors, motherboards, rams, graphicsCards, storages, powerSupplies, cases } from './data/components';
import { Cpu, MonitorCheck, Settings } from 'lucide-react';
import Admin from './pages/Admin';

function PCBuilder() {
  const [manufacturer, setManufacturer] = useState<ManufacturerOption>();
  const [configuration, setConfiguration] = useState<BuildConfiguration>({});

  const filteredProcessors = processors.filter(
    (proc) => !manufacturer || proc.manufacturer === manufacturer.id
  );

  const filteredMotherboards = motherboards.filter(
    (board) => !configuration.processor || configuration.processor.socket === board.socket
  );

  const filteredRam = rams.filter(
    (ram) => !configuration.motherboard || ram.type === configuration.motherboard.memoryType
  );

  const filteredCases = cases.filter(
    (case_) => !configuration.motherboard || case_.formFactor.includes(configuration.motherboard.formFactor)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MonitorCheck className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">PC Builder</h1>
            </div>
            <Link
              to="/admin"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <Settings className="h-5 w-5" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:pr-96">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center space-x-2 mb-6">
            <Cpu className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold">Choose Your Components</h2>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Select Processor Manufacturer</h3>
            <ManufacturerSelector
              options={manufacturerOptions}
              selected={manufacturer}
              onSelect={(mfg) => {
                setManufacturer(mfg);
                setConfiguration({});
              }}
            />
          </div>

          <ComponentSelector
            label="Processor"
            options={filteredProcessors}
            value={configuration.processor}
            onChange={(processor) => setConfiguration({ ...configuration, processor, motherboard: undefined })}
            disabled={!manufacturer}
          />

          <ComponentSelector
            label="Motherboard"
            options={filteredMotherboards}
            value={configuration.motherboard}
            onChange={(motherboard) => setConfiguration({ ...configuration, motherboard })}
            disabled={!configuration.processor}
          />

          <ComponentSelector
            label="Memory"
            options={filteredRam}
            value={configuration.ram}
            onChange={(ram) => setConfiguration({ ...configuration, ram })}
            disabled={!configuration.motherboard}
          />

          <ComponentSelector
            label="Graphics Card"
            options={graphicsCards}
            value={configuration.graphicsCard}
            onChange={(graphicsCard) => setConfiguration({ ...configuration, graphicsCard })}
            disabled={!configuration.motherboard}
          />

          <ComponentSelector
            label="Storage"
            options={storages}
            value={configuration.storage}
            onChange={(storage) => setConfiguration({ ...configuration, storage })}
            disabled={!configuration.motherboard}
          />

          <ComponentSelector
            label="Power Supply"
            options={powerSupplies}
            value={configuration.powerSupply}
            onChange={(powerSupply) => setConfiguration({ ...configuration, powerSupply })}
            disabled={!configuration.motherboard}
          />

          <ComponentSelector
            label="Case"
            options={filteredCases}
            value={configuration.case}
            onChange={(case_) => setConfiguration({ ...configuration, case: case_ })}
            disabled={!configuration.motherboard}
          />
        </div>
      </main>

      <BuildSummary configuration={configuration} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PCBuilder />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;