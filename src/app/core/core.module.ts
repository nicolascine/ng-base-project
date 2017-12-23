import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellModule } from './shell/shell.module';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from '../pages/pages.module';
import { LazyModule } from '../pages/lazy/lazy.module';

@NgModule({
  imports: [
    CommonModule,
    ShellModule,
    PagesModule,
    LazyModule
  ],
  declarations: []
})
export class CoreModule { }
