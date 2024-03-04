import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-toggle',
  templateUrl: './dropdown-toggle.component.html',
  styleUrl: './dropdown-toggle.component.css',
})
export class DropdownToggleComponent {
  showFirstDropdown = false;
  showSecondDropdown = false;

  toggleFirstDropdown() {
    this.showFirstDropdown = !this.showFirstDropdown;
  }
  toggleSecondDropdown() {
    this.showSecondDropdown = !this.showSecondDropdown;
  }
}
