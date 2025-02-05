import { Component } from '@angular/core';
import { ThreeSceneComponent } from "../../hero/three-scene/three-scene.component";

@Component({
  selector: 'app-me',
  standalone: true,
    imports: [
        ThreeSceneComponent
    ],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent {

}
