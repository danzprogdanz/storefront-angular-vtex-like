import { Component, Input } from "@angular/core";

// text.component.ts
export type TextVariant =
  | 'body'
  | 'caption'
  | 'overline'
  | 'subtitle';

@Component({
  selector: 'app-text',
  template: `
    <span [class]="variant + ' ' + className">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() variant: TextVariant = 'body';
  @Input() className = '';
}
