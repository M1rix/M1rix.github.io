import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { ThreeSceneComponent } from '../../hero/three-scene/three-scene.component';
import { NgClass, NgForOf, NgStyle } from '@angular/common';
import { gsap } from 'gsap';
import { clearTimeout } from "node:timers";

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
      title: 'adviceslips',
      description: 'Short info about project one.',
      details: 'Detailed information about this project.',
      image: 'https://raw.githubusercontent.com/M1rix/image-store/refs/heads/master/previews/adviceslips.png'
    },
    {
      title: 'pomodorix',
      description: 'Short info about project two.',
      details: 'Detailed information about this project.',
      image: 'https://raw.githubusercontent.com/M1rix/image-store/refs/heads/master/previews/pomodorix.png'
    },
    {
      title: 'weatherix',
      description: 'Short info about project three.',
      details: 'Detailed information about this project.',
      image: 'https://raw.githubusercontent.com/M1rix/image-store/refs/heads/master/previews/weatherix.png'
    },
  ];

  activeIndex = 0;
  touchStartY = 0;

  scrollTimeout?: any;

  trackByFn(index: number, item: any): number {
    return index;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.scrollTimeout) {
      window.clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = window.setTimeout(()=>{
      const touchEndY = event.touches[0].clientY;
      const deltaY = touchEndY - this.touchStartY;
      if (deltaY > 0) {
        console.log(deltaY)
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

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      if (this.activeIndex < this.projects.length - 1) {
        this.activeIndex++;
      }
    } else {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    }
  }

  setActiveIndex(index: number) {
    if (index < 0 || index >= this.projects.length) return;

    gsap.to(this, {
      duration: 1,
      activeIndex: index,
      ease: 'power2.out',
      onUpdate: () => {
        this.activeIndex = Math.round(this.activeIndex);
      },
    });
  }
}
