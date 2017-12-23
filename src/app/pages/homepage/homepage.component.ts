import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <p>
      {{ 'HELLO_WORLD' | translate }}
    </p>
  `,
  styles: []
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
