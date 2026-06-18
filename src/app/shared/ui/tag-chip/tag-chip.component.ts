import { Component, input } from '@angular/core';

@Component({
  selector: 'mx-tag-chip',
  standalone: true,
  template: '<span class="chip"><ng-content />{{ label() }}</span>',
})
export class TagChipComponent {
  readonly label = input('');
}
