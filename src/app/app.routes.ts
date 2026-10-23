import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Details } from './pages/details/details';
import { Registro } from './pages/registro/registro';
import { Pasatiempos } from './pages/pasatiempos/pasatiempos';

export const routes: Routes = [
  { path: '', component: Dashboard, title: 'Dashboard' },
  { path: 'details/:id', component: Details, title: 'Detalles' },
  { path: 'registro', component: Registro, title: 'Registro' },
  { path: 'pasatiempos', component: Pasatiempos, title: 'Pasatiempos' },
  { path: '**', redirectTo: '' }
];
