import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
