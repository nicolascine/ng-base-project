import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellModule } from './shell/shell.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ShellModule,
  ],
  declarations: []
})
export class CoreModule { }
