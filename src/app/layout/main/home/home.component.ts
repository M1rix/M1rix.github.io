import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-section',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() stack!: 'Front-End' | 'Back-End'| 'Full-Stack';

  constructor() { }

  ngOnInit(): void {
  }

}
