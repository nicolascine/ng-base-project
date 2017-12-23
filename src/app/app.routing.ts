import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
