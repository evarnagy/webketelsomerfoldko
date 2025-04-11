import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface BaseComponent {
  id: number;
  name: string;
  price: number;
}

export interface Processor extends BaseComponent {
  cores: number;
  speed: number;
}

export interface Motherboard extends BaseComponent {
  chipset: string;
}

export interface Ram extends BaseComponent {
  capacity: number; 
  speed: number;
}

export interface Gpu extends BaseComponent {
  memory: number; 
}

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
  imports:[CommonModule]
})
export class ConfiguratorComponent {

  
  processors: Processor[] = [
    { id: 1, name: 'Intel i9', price: 500, cores: 8, speed: 3.6 },
    { id: 2, name: 'AMD Ryzen 7', price: 400, cores: 8, speed: 3.8 }
  ];
  motherboards: Motherboard[] = [
    { id: 1, name: 'ASUS ROG', price: 250, chipset: 'Z490' },
    { id: 2, name: 'MSI MAG', price: 200, chipset: 'B550' }
  ];
  rams: Ram[] = [
    { id: 1, name: 'Corsair Vengeance', price: 100, capacity: 16, speed: 3200 },
    { id: 2, name: 'G.SKILL Ripjaws', price: 90, capacity: 16, speed: 3000 }
  ];
  gpus: Gpu[] = [
    { id: 1, name: 'NVIDIA RTX 3080', price: 800, memory: 10 },
    { id: 2, name: 'AMD Radeon RX 6800', price: 750, memory: 16 }
  ];

  selectedProcessor: Processor | null = null;
  selectedMotherboard: Motherboard | null = null;
  selectedRam: Ram | null = null;
  selectedGpu: Gpu | null = null;

  totalPrice: number = 0;

  selectComponent(componentType: string, component: BaseComponent) {
    switch (componentType) {
      case 'processor':
        this.selectedProcessor = component as Processor;
        break;
      case 'motherboard':
        this.selectedMotherboard = component as Motherboard;
        break;
      case 'ram':
        this.selectedRam = component as Ram;
        break;
      case 'gpu':
        this.selectedGpu = component as Gpu;
        break;
      default:
        break;
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let price = 0;
    if (this.selectedProcessor) price += this.selectedProcessor.price;
    if (this.selectedMotherboard) price += this.selectedMotherboard.price;
    if (this.selectedRam) price += this.selectedRam.price;
    if (this.selectedGpu) price += this.selectedGpu.price;
    this.totalPrice = price;
  }

  saveConfiguration() {
    console.log('Configuration Saved:', {
      processor: this.selectedProcessor,
      motherboard: this.selectedMotherboard,
      ram: this.selectedRam,
      gpu: this.selectedGpu,
      totalPrice: this.totalPrice
    });
  }
}
