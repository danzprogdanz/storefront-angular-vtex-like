import { Component, Input } from '@angular/core';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

@Component({
  selector: 'app-heading',
  template: `
    <ng-container [ngSwitch]="level">
      <h1 *ngSwitchCase="'h1'" [class]="className">
        <ng-content></ng-content>
      </h1>
      <!-- Repeat for h2-h6 -->
    </ng-container>
  `,
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
  @Input() level: HeadingLevel = 'h1';
  @Input() className = '';
}
