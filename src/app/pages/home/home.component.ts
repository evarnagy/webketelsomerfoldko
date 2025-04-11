import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';  
import { MatIconModule } from '@angular/material/icon';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatSliderModule, FormsModule, MatIconModule, CommonModule] 
})
export class HomeComponent {
  features = [
    {
      icon: 'assets/icons/speed.svg',
      title: 'Gyors összehasonlítás',
      description: 'Pillanatok alatt összevetheted a legújabb gépeket.',
    },
    {
      icon: 'assets/icons/build.svg',
      title: 'Személyre szabott konfigurációk',
      description: 'Állítsd össze a számodra tökéletes gépet.',
    },
    {
      icon: 'assets/icons/compare.svg',
      title: 'Valós idejű adatok',
      description: 'Naprakész információk a legfrissebb hardverekről.',
    },
  ];

  sliderValue: number = 5000;  
  
  constructor(private router: Router) {}

  navigateToConfigurator(): void {
    this.router.navigate(['/konfigurator']);
  }
}
