import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('slide', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0, zIndex:100}),
          animate('500ms')
        ]),
        transition(':leave', [
          style({transform: '*', opacity: '*', zIndex:100}),
          animate('1000ms',style({transform:'translateX(100%)',zIndex:200, opacity:0}))
        ])
      ]
    )]
})
export class MainComponent implements OnInit, AfterViewInit {

  @Input() stack!: 'Front-End' | 'Back-End'| 'Full-Stack';
  @Input() currentNav!: 'home' | 'about'| 'projects'| 'contact';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    window.document.getElementById('home')?.scrollIntoView({behavior:'smooth'});
  }

}
