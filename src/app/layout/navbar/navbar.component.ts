import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() changeStack: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeNav: EventEmitter<any> = new EventEmitter<any>();

  allStack = ['Front-End','Back-End','Full-Stack'];
  selectedStack = 'Full-Stack';
  stackForSelect: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.handleStackForSelect(this.selectedStack);
  }

  handleStackForSelect(stack: any): void {
    this.selectedStack = stack;
    this.changeStack.emit(this.selectedStack);
    this.stackForSelect = this.allStack.filter(s=> s!== this.selectedStack);
    window.document.getElementById('home')?.scrollIntoView({behavior:'smooth'});
  }
}
