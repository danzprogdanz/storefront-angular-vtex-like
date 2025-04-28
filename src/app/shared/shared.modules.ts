import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { HeroCarouselComponent } from './components/ui/organism/hero-carousel/hero-carousel.component';
import { ButtonComponent } from './components/ui/atoms/button/button.component';
import { InputComponent } from './components/ui/atoms/input/input.component';
import { ProductCardModule } from './components/ui/molecules/product-card/product-card.module';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroCarouselComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ProductCardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroCarouselComponent,
    ButtonComponent,
    InputComponent,
    ProductCardModule
  ],
})
export class SharedModule {}
