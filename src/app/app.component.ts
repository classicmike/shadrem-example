import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShadowExampleComponent } from './shadow-example/shadow-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ShadowExampleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shadrem-example';
}
