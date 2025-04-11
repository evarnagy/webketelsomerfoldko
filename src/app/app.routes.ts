import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfiguratorComponent } from './pages/configurator/configurator.component';
import { ComparisonComponent } from './pages/comparison/comparison.component';
import { CartComponent } from './pages/cart/cart.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'configurator', component: ConfiguratorComponent },
  { path: 'comparison', component: ComparisonComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }  
];
