import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  template: `
    <p>
      {{ 'HELLO_WORLD' | translate }}
    </p>
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
