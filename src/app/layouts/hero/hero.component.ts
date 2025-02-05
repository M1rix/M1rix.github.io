import { Component } from '@angular/core'
import { ThreeSceneComponent } from './three-scene/three-scene.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ThreeSceneComponent,
    RouterLink
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
