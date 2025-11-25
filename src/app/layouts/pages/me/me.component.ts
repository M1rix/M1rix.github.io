import { Component } from '@angular/core';
import { ThreeSceneComponent } from "../../hero/three-scene/three-scene.component";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [
    ThreeSceneComponent,
    NgForOf
  ],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent {

  skills = {
    frontend: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'Tailwind CSS',
      'CSS3',
      'HTML5',
      'Three.js'
    ],
    backend: [
      'Java',
      'Spring',
      'Spring Boot',
      'PostgreSQL',
      'Hibernate',
      'JWT',
      'REST API'
    ],
    tools: [
      'Git',
      'GitHub',
      'IntelliJ IDEA',
      'VS Code',
      'Postman',
      'Maven',
      'npm'
    ]
  };

  downloadCV() {
    // Create a link to the CV file in assets folder
    const link = document.createElement('a');
    link.href = 'assets/cv/Mirshod_Allaberganov_CV.pdf';
    link.download = 'Mirshod_Allaberganov_CV.pdf';
    link.target = '_blank';

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Show a toast notification or console log
    console.log('CV download initiated');
  }
}
