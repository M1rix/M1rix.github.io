import { Component } from '@angular/core';
import { ThreeSceneComponent } from '../../hero/three-scene/three-scene.component';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ThreeSceneComponent,
    NgOptimizedImage
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
