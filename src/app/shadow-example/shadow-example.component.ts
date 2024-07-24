import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-example',
  styleUrls: ['shadow-example.component.scss'],
  standalone: true,
  template: `
    <div class="shadow-example-body">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>
              This Element is in the Shadow DOM. The expected computed font size
              should be 40px based on a shadow root font size of 16px.
            </h1>
            <h1 class="display-1">
              This Element is in the Shadow DOM. The expected computed font size
              should be 80px based on a shadow root font size of 16px.
            </h1>
            <button class="btn btn-primary">Some Button Demo</button>
          </div>
        </div>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowExampleComponent {}
