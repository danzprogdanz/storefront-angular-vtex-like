import { Component } from '@angular/core';
import { HeroCarouselComponent } from '../../shared/components/ui/organism/hero-carousel/hero-carousel.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/ui/molecules/product-card/product-card.component';
import { mockFoodProducts } from '../../mocks/models/product.mock';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, // Needed for *ngFor
    HeroCarouselComponent,
    ProductCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slides = [
    {
      image:
        'https://cdn.pickuplimes.com/cache/e2/19/e219de50cf7fd7b3fe887ffad8f38699.jpg',
      title: 'Fresh Organic Meals',
      subtitle: 'Delivered straight to your door',
      ctaText: 'Order Now',
      ctaLink: '/menu',
    },
    {
      image:
        'https://cdn.pickuplimes.com/cache/e7/91/e7918142491c36372448a1f6ce6be995.jpg',
      title: 'Healthy Breakfast Options',
      subtitle: 'Start your day right with our nutrient-packed meals',
      ctaText: 'Explore Breakfast',
      ctaLink: '/breakfast',
    },
    {
      image:
        'https://cdn.pickuplimes.com/cache/c4/17/c417d9d1069f6abe4b39546815d3367d.jpg',
      title: 'Healthy Fruits Options',
      subtitle: 'Start your day right with our nutrient-packed meals',
      ctaText: 'Explore Breakfast',
      ctaLink: '/breakfast',
    },
  ];

  products = mockFoodProducts;

  handleClick() {
    console.log('Button clicked!');
  }
}
