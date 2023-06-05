import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export const s = {
  html: {iconClass: 'fa-brands fa-html5', tooltip: 'HTML'},
  css: {iconClass: 'fa-brands fa-css3', tooltip: 'CSS'},
  js: {iconClass: 'fa-brands fa-js', tooltip: 'Java Script'},
  bootstrap: {iconClass: 'fa-brands fa-bootstrap', tooltip: 'Bootstrap'},
  fontAwesome: {iconClass: 'fa-solid fa-font-awesome', tooltip: 'Font Awesome'},
  angular: {iconClass: 'fa-brands fa-angular', tooltip: 'Angular'},
  vue: {iconClass: 'fa-brands fa-vue', tooltip: 'Vue'},
  api: {iconClass: 'fa-solid fa-cloud-meatball', tooltip: 'Rest Api'}
}

@Component({
  selector: 'projects-section',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Adviceslips',
      description: 'Get random advices from the system generated advice cards',
      url: 'https://adviceslips.github.io',
      image: 'https://raw.githubusercontent.com/M1rix/image-store/master/previews/adviceslips.png',
      stacks: [s.html, s.css, s.bootstrap, s.fontAwesome, s.api]
    },
    {
      name: 'Pomodorix',
      description: 'Pomodorix is a project that provides pomodoro functionality for better time management',
      url: 'https://pomodorix.github.io',
      image: 'https://raw.githubusercontent.com/M1rix/image-store/master/previews/pomodorix.png',
      stacks: [s.html, s.css, s.bootstrap, s.fontAwesome, s.angular]
    },
    {
      name: 'Weatherix',
      description: 'Weatherix is a project that provides weather broadcasts',
      url: 'https://weatherix.github.io',
      image: 'https://raw.githubusercontent.com/M1rix/image-store/master/previews/weatherix.png',
      stacks: [s.html, s.css, s.bootstrap, s.fontAwesome, s.api]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
