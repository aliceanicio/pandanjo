import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css'],
})
export class CarouselItemComponent implements AfterViewInit {
  items: HTMLElement[] = [];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const carouselItems = this.elementRef.nativeElement.querySelectorAll(
      '.carousel-items .item'
    );

    this.items = Array.from(carouselItems);
  }

  nextSlide() {
    if (this.items.length <= 1) return;

    const firstItem = this.items.shift();
    if (firstItem) {
      this.items.push(firstItem);
      this.updateCarousel();
    } else {
      console.error('First item is undefined');
    }
  }

  prevSlide() {
    if (this.items.length <= 1) return;

    const lastItem = this.items.pop();
    if (lastItem) {
      this.items.unshift(lastItem);
      this.updateCarousel();
    } else {
      console.error('Last item is undefined');
    }
  }

  updateCarousel() {
    this.items.forEach((item, index) => {
      item.style.order = String(index);
    });
  }
}
