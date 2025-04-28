import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { HeroCarouselComponent } from './components/ui/organism/hero-carousel/hero-carousel.component';
import { ButtonComponent } from './components/ui/atoms/button/button.component';
import { InputComponent } from './components/ui/atoms/input/input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroCarouselComponent,
    ButtonComponent,
    InputComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    HeroCarouselComponent,
    ButtonComponent,
    InputComponent,
  ],
})
export class SharedModule {}
