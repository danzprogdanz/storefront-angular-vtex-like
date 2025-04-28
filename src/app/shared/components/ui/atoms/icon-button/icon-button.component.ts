import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  template: `
    <div class="icon-container">
      <span *ngIf="count && count > 0" class="notification-count">{{ count }}</span>
      <button class="icon-button" (click)="onClick.emit()" [attr.aria-label]="ariaLabel">
        <ng-content></ng-content>
      </button>
    </div>
  `,
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() count?: number;
  @Input() ariaLabel = '';
  @Output() onClick = new EventEmitter<void>();
}
