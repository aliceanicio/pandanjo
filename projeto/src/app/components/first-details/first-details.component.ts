import { Component } from '@angular/core';

@Component({
  selector: 'app-first-details',
  templateUrl: './first-details.component.html',
  styleUrl: './first-details.component.css'
})
export class FirstDetailsComponent {
  showFirstDropdown = false;
  showSecondDropdown = false;

  toggleFirstDropdown() {
    this.showFirstDropdown = !this.showFirstDropdown;
  }
  toggleSecondDropdown() {
    this.showSecondDropdown = !this.showSecondDropdown;
  }

}
