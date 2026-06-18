import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mx-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {
  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    document.documentElement.style.setProperty('--mx-spotlight-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mx-spotlight-y', `${event.clientY}px`);
  }
}
