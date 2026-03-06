import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app-home/app-home').then(m => m.AppHome),
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience').then(m => m.Experience),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./pages/project-detail/project-detail').then(m => m.ProjectDetail),
  },
  { path: '**', redirectTo: '' },
];
