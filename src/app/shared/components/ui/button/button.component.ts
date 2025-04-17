import { Component, Input, Output, EventEmitter } from '@angular/core';

export type ButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ButtonType = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() icon: string | null = null;
  @Input() ariaLabel: string | null = null;

  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event) {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    } else {
      event.preventDefault();
    }
  }

  get buttonClasses(): string {
    return `btn btn--${this.type} btn--${this.size} ${this.loading ? 'btn--loading' : ''}`;
  }
}
