import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectDetailPageComponent } from './pages/project-detail-page/project-detail-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Mirix | Systems that ship',
  },
  {
    path: 'projects/:slug',
    component: ProjectDetailPageComponent,
    title: 'Mirix | Case Study',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
