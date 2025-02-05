import { Routes } from '@angular/router';
import { HeroComponent } from './layouts/hero/hero.component';
import { ProjectsComponent } from "./layouts/pages/projects/projects.component";
import { MeComponent } from "./layouts/pages/me/me.component";

export const routes: Routes = [
  {path: '', component: HeroComponent, data: { animation: 'HomePage' }},
  {path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' }},
  {path: 'me', component: MeComponent, data: { animation: 'MePage' }},
  { path: '**', redirectTo: '' }
];
