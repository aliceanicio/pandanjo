import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-button',
  templateUrl: './star-button.component.html',
  styleUrl: './star-button.component.css'
})
export class StarButtonComponent {

  @Input() isColored: boolean = false;

  toggleColor() {
    this.isColored = !this.isColored;
  }
}
