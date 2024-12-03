export interface Component {
  id: string;
  name: string;
  price: number;
  manufacturer: string;
}

export interface Processor extends Component {
  socket: string;
  memoryType: string;
  cores: number;
  clockSpeed: number;
}

export interface Motherboard extends Component {
  socket: string;
  memoryType: string;
  chipset: string;
  formFactor: string;
}

export interface RAM extends Component {
  type: string;
  capacity: number;
  speed: number;
}

export interface GraphicsCard extends Component {
  interface: string;
  powerRequirement: number;
  vram: number;
}

export interface Storage extends Component {
  type: 'SSD' | 'HDD';
  capacity: number;
  interface: 'SATA' | 'NVMe';
}

export interface PowerSupply extends Component {
  wattage: number;
  efficiency: string;
  modular: boolean;
}

export interface Case extends Component {
  formFactor: string[];
  maxGpuLength: number;
}

export interface BuildConfiguration {
  processor?: Processor;
  motherboard?: Motherboard;
  ram?: RAM;
  graphicsCard?: GraphicsCard;
  storage?: Storage;
  powerSupply?: PowerSupply;
  case?: Case;
}