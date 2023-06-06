import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { delay } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('slide', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0, zIndex: 200}),
          animate('500ms')
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
