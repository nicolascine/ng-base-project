import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/shell/layout/layout.component';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    LayoutComponent
  ]
})

export class AppModule { }
