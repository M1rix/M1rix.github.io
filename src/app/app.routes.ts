import { Routes } from '@angular/router';
import { HeroComponent } from './layouts/hero/hero.component';

export const routes: Routes = [
  {path: '', component: HeroComponent},
  { path: '**', redirectTo: '' }
];
