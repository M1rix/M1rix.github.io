import { Component } from '@angular/core';
import { ThreeSceneComponent } from '../../hero/three-scene/three-scene.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ThreeSceneComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
