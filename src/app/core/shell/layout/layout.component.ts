import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  template: `
    <h1>Ng Base Project</h1>
      <nav>
        <a routerLink="">Home page</a>
        <a routerLink="pages/lazy">Lazy Module</a>
      </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor(
    translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }

}
