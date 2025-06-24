import { Component, HostListener } from '@angular/core';
import { ThreeSceneComponent } from '../../hero/three-scene/three-scene.component';
import { NgClass, NgForOf, NgStyle } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ThreeSceneComponent,
    NgClass,
    NgForOf,
    NgStyle
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  projects = [
    {
      title: 'pomodorix',
      description: 'Pomodorix is a minimalist Pomodoro timer web app that helps improve focus and productivity using the Pomodoro Technique.',
      details: 'Pomodorix is a sleek, browser-based Pomodoro timer designed to support time management through structured work and break sessions.' +
        ' It follows the traditional Pomodoro cycle—25 minutes of focused work followed by 5-minute short breaks and a longer break after several sessions. ' +
        'The interface is clean and distraction-free, featuring intuitive controls to start, pause, and reset timers. Built with HTML, CSS, and JavaScript,' +
        ' it runs entirely in the browser, requires no login, and stores session preferences using local storage. Ideal for students, developers, or anyone' +
        ' wanting to boost productivity without installing extra software.',
      image: 'https://raw.githubusercontent.com/M1rix/image-store/refs/heads/master/previews/pomodorix.png',
      url: 'https://wowix.vercel.app/',
      stacks: ['Angular', 'HTML', 'SCSS']
    },
    {
      title: 'adviceslips',
      description: 'Short info about project one.',
      details: 'Detailed information about this project.',
      image: 'https://raw.githubusercontent.com/M1rix/image-store/refs/heads/master/previews/adviceslips.png',
      url: 'https://wowix.vercel.app/',
      stacks: ['JavaScript', 'HTML', 'CSS', 'REST', 'API']
    },
    {
      title: 'wowix',
      description: 'Short info about project wowix.',
      details: 'Detailed information about this project.',
      image: 'https://raw.githubusercontent.com/M1rix/image-store/refs/heads/master/previews/wowix.jpg',
      url: 'https://wowix.vercel.app/',
      stacks: ['Angular', 'REST', 'API', 'Python', 'Flask']
    },
    {
      title: 'weatherix',
      description: 'Short info about project three.',
      details: 'Detailed information about this project.',
      image: 'https://raw.githubusercontent.com/M1rix/image-store/refs/heads/master/previews/weatherix.png',
      url: 'https://weatherix.github.io/',
      stacks: ['Angular', 'HTML', 'SCSS', 'REST', 'API']
    },
  ];

  activeIndex = 0;
  touchStartY = 0;

  scrollTimeout?: any;

  trackByFn(index: number, item: any): number {
    return index;
  }

  @HostListener('window:touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.scrollTimeout) {
      window.clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = window.setTimeout(() => {
      const touchEndY = event.touches[0].clientY;
      const deltaY = touchEndY - this.touchStartY;
      if (deltaY > 0) {
        if (this.activeIndex > 0) {
          this.activeIndex--;
        }
      } else {
        if (this.activeIndex < this.projects.length - 1) {
          this.activeIndex++;
        }
      }

      this.touchStartY = touchEndY;
    }, 50);
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.scrollTimeout) {
      window.clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = window.setTimeout(() => {
      if (event.deltaY > 0) {
        if (this.activeIndex < this.projects.length - 1) {
          this.activeIndex++;
        }
      } else {
        if (this.activeIndex > 0) {
          this.activeIndex--;
        }
      }
    }, 50);
  }

  @HostListener('window:keyup', ['$event'])
  onClickArrows(event: KeyboardEvent) {
    if (this.scrollTimeout) {
      window.clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = window.setTimeout(() => {
      switch (event.key) {
        case "ArrowUp":
          if (this.activeIndex > 0) {
            this.activeIndex--;
          }
          break;
        case "ArrowDown":
          if (this.activeIndex < this.projects.length - 1) {
            this.activeIndex++;
          }
          break;
      }
    }, 50);
  }

  setActiveIndex(index: number) {
    if (index < 0 || index >= this.projects.length) return;

    gsap.to(this, {
      duration: 1,
      activeIndex: index,
      ease: 'elastic.out',
      onUpdate: () => {
        this.activeIndex = Math.round(this.activeIndex);
      },
    });
  }
}
