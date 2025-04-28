import { Component } from '@angular/core';
import { HeroCarouselComponent } from '../../shared/components/ui/organism/hero-carousel/hero-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroCarouselComponent],
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
  ];

  handleClick() {
    console.log('Button clicked!');
  }
}
