import { Component } from '@angular/core'
import { ThreeSceneComponent } from './three-scene/three-scene.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ThreeSceneComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
