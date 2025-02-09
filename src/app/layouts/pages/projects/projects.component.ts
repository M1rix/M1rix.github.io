import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { ThreeSceneComponent } from '../../hero/three-scene/three-scene.component';
import { CommonModule, NgClass, NgForOf } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ThreeSceneComponent,
    NgClass,
    NgForOf
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

  constructor(private cdr: ChangeDetectorRef) {}

  trackByFn(index: number, item: any): number {
    return index;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    const touchEndY = event.touches[0].clientY;
    const deltaY = touchEndY - this.touchStartY;

    if (deltaY > 0) {
      if (this.activeIndex < this.projects.length - 1) {
        this.activeIndex++;
        this.cdr.detectChanges();
      }
    } else {
      if (this.activeIndex > 0) {
        this.activeIndex--;
        this.cdr.detectChanges();
      }
    }

    this.touchStartY = touchEndY; // Update start position
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      if (this.activeIndex < this.projects.length - 1) {
        this.activeIndex++;
        this.cdr.detectChanges();
      }
    } else {
      if (this.activeIndex > 0) {
        this.activeIndex--;
        this.cdr.detectChanges();
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
        this.cdr.detectChanges();
      },
    });
  }
}
