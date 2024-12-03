import { Processor, Motherboard, RAM, GraphicsCard, Storage, PowerSupply, Case } from '../types/components';

export const processors: Processor[] = [
  // Intel Processors
  {
    id: 'intel-i9-13900k',
    name: 'Intel Core i9-13900K',
    manufacturer: 'Intel',
    price: 589.99,
    socket: 'LGA1700',
    memoryType: 'DDR5',
    cores: 24,
    clockSpeed: 5.8
  },
  {
    id: 'intel-i7-13700k',
    name: 'Intel Core i7-13700K',
    manufacturer: 'Intel',
    price: 409.99,
    socket: 'LGA1700',
    memoryType: 'DDR5',
    cores: 16,
    clockSpeed: 5.4
  },
  {
    id: 'intel-i5-13600k',
    name: 'Intel Core i5-13600K',
    manufacturer: 'Intel',
    price: 319.99,
    socket: 'LGA1700',
    memoryType: 'DDR5',
    cores: 14,
    clockSpeed: 5.1
  },
  // AMD Processors
  {
    id: 'amd-7950x',
    name: 'AMD Ryzen 9 7950X',
    manufacturer: 'AMD',
    price: 549.99,
    socket: 'AM5',
    memoryType: 'DDR5',
    cores: 16,
    clockSpeed: 5.7
  },
  {
    id: 'amd-7900x',
    name: 'AMD Ryzen 9 7900X',
    manufacturer: 'AMD',
    price: 449.99,
    socket: 'AM5',
    memoryType: 'DDR5',
    cores: 12,
    clockSpeed: 5.6
  },
  {
    id: 'amd-7700x',
    name: 'AMD Ryzen 7 7700X',
    manufacturer: 'AMD',
    price: 349.99,
    socket: 'AM5',
    memoryType: 'DDR5',
    cores: 8,
    clockSpeed: 5.4
  }
];

export const motherboards: Motherboard[] = [
  // Intel Motherboards
  {
    id: 'asus-z790-hero',
    name: 'ASUS ROG Maximus Z790 Hero',
    manufacturer: 'ASUS',
    price: 629.99,
    socket: 'LGA1700',
    memoryType: 'DDR5',
    chipset: 'Z790',
    formFactor: 'ATX'
  },
  {
    id: 'msi-z790-edge',
    name: 'MSI MPG Z790 Edge WiFi',
    manufacturer: 'MSI',
    price: 429.99,
    socket: 'LGA1700',
    memoryType: 'DDR5',
    chipset: 'Z790',
    formFactor: 'ATX'
  },
  {
    id: 'gigabyte-z790-aorus',
    name: 'Gigabyte Z790 AORUS Elite AX',
    manufacturer: 'Gigabyte',
    price: 349.99,
    socket: 'LGA1700',
    memoryType: 'DDR5',
    chipset: 'Z790',
    formFactor: 'ATX'
  },
  // AMD Motherboards
  {
    id: 'asus-x670e-hero',
    name: 'ASUS ROG Crosshair X670E Hero',
    manufacturer: 'ASUS',
    price: 699.99,
    socket: 'AM5',
    memoryType: 'DDR5',
    chipset: 'X670E',
    formFactor: 'ATX'
  },
  {
    id: 'msi-x670e-ace',
    name: 'MSI MEG X670E ACE',
    manufacturer: 'MSI',
    price: 599.99,
    socket: 'AM5',
    memoryType: 'DDR5',
    chipset: 'X670E',
    formFactor: 'ATX'
  },
  {
    id: 'asrock-x670e-taichi',
    name: 'ASRock X670E Taichi',
    manufacturer: 'ASRock',
    price: 499.99,
    socket: 'AM5',
    memoryType: 'DDR5',
    chipset: 'X670E',
    formFactor: 'ATX'
  }
];

export const rams: RAM[] = [
  {
    id: 'gskill-6400',
    name: 'G.SKILL Trident Z5 RGB 32GB',
    manufacturer: 'G.SKILL',
    price: 189.99,
    type: 'DDR5',
    capacity: 32,
    speed: 6400
  },
  {
    id: 'corsair-6000',
    name: 'Corsair Dominator Platinum RGB 32GB',
    manufacturer: 'Corsair',
    price: 199.99,
    type: 'DDR5',
    capacity: 32,
    speed: 6000
  },
  {
    id: 'teamgroup-6000',
    name: 'TeamGroup T-Force Delta RGB 32GB',
    manufacturer: 'TeamGroup',
    price: 159.99,
    type: 'DDR5',
    capacity: 32,
    speed: 6000
  },
  {
    id: 'crucial-5600',
    name: 'Crucial RAM 32GB',
    manufacturer: 'Crucial',
    price: 139.99,
    type: 'DDR5',
    capacity: 32,
    speed: 5600
  },
  {
    id: 'kingston-5200',
    name: 'Kingston FURY Beast 32GB',
    manufacturer: 'Kingston',
    price: 144.99,
    type: 'DDR5',
    capacity: 32,
    speed: 5200
  },
  {
    id: 'thermaltake-4800',
    name: 'Thermaltake TOUGHRAM RC 32GB',
    manufacturer: 'Thermaltake',
    price: 129.99,
    type: 'DDR5',
    capacity: 32,
    speed: 4800
  }
];

export const graphicsCards: GraphicsCard[] = [
  {
    id: 'nvidia-4090',
    name: 'NVIDIA GeForce RTX 4090',
    manufacturer: 'NVIDIA',
    price: 1599.99,
    interface: 'PCIe 4.0',
    powerRequirement: 450,
    vram: 24
  },
  {
    id: 'nvidia-4080',
    name: 'NVIDIA GeForce RTX 4080',
    manufacturer: 'NVIDIA',
    price: 1199.99,
    interface: 'PCIe 4.0',
    powerRequirement: 320,
    vram: 16
  },
  {
    id: 'nvidia-4070ti',
    name: 'NVIDIA GeForce RTX 4070 Ti',
    manufacturer: 'NVIDIA',
    price: 799.99,
    interface: 'PCIe 4.0',
    powerRequirement: 285,
    vram: 12
  },
  {
    id: 'amd-7900xtx',
    name: 'AMD Radeon RX 7900 XTX',
    manufacturer: 'AMD',
    price: 999.99,
    interface: 'PCIe 4.0',
    powerRequirement: 355,
    vram: 24
  },
  {
    id: 'amd-7900xt',
    name: 'AMD Radeon RX 7900 XT',
    manufacturer: 'AMD',
    price: 849.99,
    interface: 'PCIe 4.0',
    powerRequirement: 315,
    vram: 20
  },
  {
    id: 'amd-6950xt',
    name: 'AMD Radeon RX 6950 XT',
    manufacturer: 'AMD',
    price: 699.99,
    interface: 'PCIe 4.0',
    powerRequirement: 335,
    vram: 16
  }
];

export const storages: Storage[] = [
  {
    id: 'samsung-990-pro-2tb',
    name: 'Samsung 990 PRO 2TB',
    manufacturer: 'Samsung',
    price: 219.99,
    type: 'SSD',
    capacity: 2000,
    interface: 'NVMe'
  },
  {
    id: 'wd-black-sn850x-2tb',
    name: 'WD Black SN850X 2TB',
    manufacturer: 'Western Digital',
    price: 199.99,
    type: 'SSD',
    capacity: 2000,
    interface: 'NVMe'
  },
  {
    id: 'crucial-p5-plus-2tb',
    name: 'Crucial P5 Plus 2TB',
    manufacturer: 'Crucial',
    price: 179.99,
    type: 'SSD',
    capacity: 2000,
    interface: 'NVMe'
  },
  {
    id: 'seagate-firecuda-530-2tb',
    name: 'Seagate FireCuda 530 2TB',
    manufacturer: 'Seagate',
    price: 259.99,
    type: 'SSD',
    capacity: 2000,
    interface: 'NVMe'
  },
  {
    id: 'corsair-mp600-pro-2tb',
    name: 'Corsair Force MP600 PRO 2TB',
    manufacturer: 'Corsair',
    price: 229.99,
    type: 'SSD',
    capacity: 2000,
    interface: 'NVMe'
  },
  {
    id: 'sabrent-rocket-4-plus-2tb',
    name: 'Sabrent Rocket 4 Plus 2TB',
    manufacturer: 'Sabrent',
    price: 199.99,
    type: 'SSD',
    capacity: 2000,
    interface: 'NVMe'
  }
];

export const powerSupplies: PowerSupply[] = [
  {
    id: 'corsair-rm1000x',
    name: 'Corsair RM1000x',
    manufacturer: 'Corsair',
    price: 199.99,
    wattage: 1000,
    efficiency: '80+ Gold',
    modular: true
  },
  {
    id: 'evga-1000-g6',
    name: 'EVGA SuperNOVA 1000 G6',
    manufacturer: 'EVGA',
    price: 189.99,
    wattage: 1000,
    efficiency: '80+ Gold',
    modular: true
  },
  {
    id: 'seasonic-px-1000',
    name: 'Seasonic PRIME PX-1000',
    manufacturer: 'Seasonic',
    price: 259.99,
    wattage: 1000,
    efficiency: '80+ Platinum',
    modular: true
  },
  {
    id: 'thermaltake-toughpower-gf3',
    name: 'Thermaltake Toughpower GF3 1000W',
    manufacturer: 'Thermaltake',
    price: 209.99,
    wattage: 1000,
    efficiency: '80+ Gold',
    modular: true
  },
  {
    id: 'msi-mpg-a1000g',
    name: 'MSI MPG A1000G',
    manufacturer: 'MSI',
    price: 179.99,
    wattage: 1000,
    efficiency: '80+ Gold',
    modular: true
  },
  {
    id: 'be-quiet-dark-power-13',
    name: 'be quiet! Dark Power 13 1000W',
    manufacturer: 'be quiet!',
    price: 269.99,
    wattage: 1000,
    efficiency: '80+ Titanium',
    modular: true
  }
];

export const cases: Case[] = [
  {
    id: 'lian-li-o11',
    name: 'Lian Li O11 Dynamic EVO',
    manufacturer: 'Lian Li',
    price: 169.99,
    formFactor: ['ATX', 'microATX', 'Mini-ITX'],
    maxGpuLength: 420
  },
  {
    id: 'fractal-torrent',
    name: 'Fractal Design Torrent',
    manufacturer: 'Fractal Design',
    price: 189.99,
    formFactor: ['ATX', 'microATX', 'Mini-ITX'],
    maxGpuLength: 461
  },
  {
    id: 'corsair-5000d',
    name: 'Corsair 5000D Airflow',
    manufacturer: 'Corsair',
    price: 174.99,
    formFactor: ['ATX', 'microATX', 'Mini-ITX'],
    maxGpuLength: 400
  },
  {
    id: 'phanteks-p500a',
    name: 'Phanteks Eclipse P500A',
    manufacturer: 'Phanteks',
    price: 149.99,
    formFactor: ['ATX', 'microATX', 'Mini-ITX'],
    maxGpuLength: 435
  },
  {
    id: 'be-quiet-500dx',
    name: 'be quiet! Pure Base 500DX',
    manufacturer: 'be quiet!',
    price: 109.99,
    formFactor: ['ATX', 'microATX', 'Mini-ITX'],
    maxGpuLength: 369
  },
  {
    id: 'cooler-master-h500m',
    name: 'Cooler Master H500M',
    manufacturer: 'Cooler Master',
    price: 199.99,
    formFactor: ['ATX', 'microATX', 'Mini-ITX'],
    maxGpuLength: 412
  }
];