import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stack: 'Front-End' | 'Back-End'| 'Full-Stack' = 'Front-End';
  title = 'portfolio';
}
