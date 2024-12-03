import { BuildConfiguration, PowerSupply, GraphicsCard, Case, Motherboard } from '../types/components';

export function checkCompatibility(config: BuildConfiguration): { compatible: boolean; issues: string[] } {
  const issues: string[] = [];

  // CPU and Motherboard compatibility
  if (config.processor && config.motherboard) {
    if (config.processor.socket !== config.motherboard.socket) {
      issues.push(`CPU socket ${config.processor.socket} is not compatible with motherboard socket ${config.motherboard.socket}`);
    }
    if (config.processor.memoryType !== config.motherboard.memoryType) {
      issues.push(`Memory type ${config.processor.memoryType} is not supported by this combination`);
    }
  }

  // RAM compatibility
  if (config.ram && config.motherboard) {
    if (config.ram.type !== config.motherboard.memoryType) {
      issues.push(`RAM type ${config.ram.type} is not compatible with motherboard memory type ${config.motherboard.memoryType}`);
    }
  }

  // Power Supply compatibility
  if (config.powerSupply && config.graphicsCard) {
    const totalPowerNeeded = calculateTotalPowerRequirement(config);
    if (config.powerSupply.wattage < totalPowerNeeded) {
      issues.push(`Power supply wattage (${config.powerSupply.wattage}W) is insufficient for system requirements (${totalPowerNeeded}W needed)`);
    }
  }

  // Case compatibility
  if (config.case && config.motherboard) {
    if (!config.case.formFactor.includes(config.motherboard.formFactor)) {
      issues.push(`Case does not support ${config.motherboard.formFactor} motherboards`);
    }
  }

  // GPU length compatibility
  if (config.case && config.graphicsCard) {
    const gpuLength = getGpuLength(config.graphicsCard);
    if (gpuLength > config.case.maxGpuLength) {
      issues.push(`Graphics card length (${gpuLength}mm) exceeds case maximum GPU length (${config.case.maxGpuLength}mm)`);
    }
  }

  return {
    compatible: issues.length === 0,
    issues
  };
}

function calculateTotalPowerRequirement(config: BuildConfiguration): number {
  let totalPower = 0;
  
  // Base system power (motherboard, fans, etc.)
  totalPower += 100;
  
  // CPU power
  if (config.processor) {
    // Estimate based on high-end CPUs
    totalPower += config.processor.cores * 15;
  }
  
  // GPU power
  if (config.graphicsCard) {
    totalPower += config.graphicsCard.powerRequirement;
  }
  
  // RAM power (rough estimate)
  if (config.ram) {
    totalPower += 10;
  }
  
  // Storage power
  if (config.storage) {
    totalPower += config.storage.type === 'SSD' ? 7 : 15;
  }
  
  // Add 20% overhead for safety
  return Math.ceil(totalPower * 1.2);
}

function getGpuLength(gpu: GraphicsCard): number {
  // This would normally come from the GPU specs
  // Using a mapping for demonstration
  const gpuLengths: Record<string, number> = {
    'nvidia-4090': 336,
    'nvidia-4080': 304,
    'nvidia-4070ti': 285,
    'amd-7900xtx': 287,
    'amd-7900xt': 287,
    'amd-6950xt': 267
  };
  
  return gpuLengths[gpu.id] || 300; // Default length if not found
}