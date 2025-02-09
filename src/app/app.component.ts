import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { ThreeSceneComponent } from "./layouts/hero/three-scene/three-scene.component";
import { animate, query, style, transition, trigger } from '@angular/animations';
import { inject } from '@vercel/analytics'

export const routeAnimations = trigger('routeAnimations', [
  transition('* => HomePage', [
    style({zIndex: 3}), // Home is the top layer
    query(':enter', [
      style({opacity: 0, transform: 'translateZ(-100px) scale(0.8)'}),
      animate('300ms ease-in-out', style({opacity: 1, transform: 'translateZ(0) scale(1)'}))
    ]),
    query(':leave', [
      animate('300ms ease-in-out', style({opacity: 0, transform: 'translateZ(100px) scale(1.2)'}))
    ], {optional: true})
  ]),
  transition('* => ProjectsPage', [
    style({zIndex: 2}), // ProjectsPage in the middle
    query(':enter', [
      style({opacity: 0, transform: 'translateX(-100%)'}),
      animate('300ms ease-in-out', style({opacity: 1, transform: 'translateX(0)'}))
    ]),
    query(':leave', [
      animate('300ms ease-in-out', style({opacity: 0, transform: 'translateX(100%)'}))
    ], {optional: true})
  ]),
  transition('* => MePage', [
    style({zIndex: 1}), // MePage is the back layer
    query(':enter', [
      style({opacity: 0, transform: 'translateY(100%)'}),
      animate('300ms ease-in-out', style({opacity: 1, transform: 'translateY(0)'}))
    ]),
    query(':leave', [
      animate('300ms ease-in-out', style({opacity: 0, transform: 'translateY(-100%)'}))
    ], {optional: true})
  ])
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ThreeSceneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  title = 'Mirix';

  ngOnInit(): void {
    // inject();
  }

  getRouteState(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || '';
  }
}
