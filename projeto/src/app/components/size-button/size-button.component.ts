import { Component } from '@angular/core';

@Component({
  selector: 'app-size-button',
  templateUrl: './size-button.component.html',
  styleUrl: './size-button.component.css'
})
export class SizeButtonComponent {

  selectedSize: string | null = null;

  selectSize(size: string) {
    this.selectedSize = size;
  }

}
