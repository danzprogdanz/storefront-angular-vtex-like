import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Slide {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss'],
})
export class HeroCarouselComponent {
  @Input() slides: Slide[] = [];
  currentIndex = 0;
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.scrollToCurrentSlide();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.scrollToCurrentSlide();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.scrollToCurrentSlide();
  }

  private scrollToCurrentSlide() {
    const container = this.carouselContainer.nativeElement;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: slideWidth * this.currentIndex,
      behavior: 'smooth',
    });
  }
}
