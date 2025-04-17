import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { HeadingComponent } from './shared/components/ui/typography/heading/heading.component';
import { TextComponent } from './shared/components/ui/typography/text/text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeadingComponent, TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'storefront-angular-vtex-like';
}
