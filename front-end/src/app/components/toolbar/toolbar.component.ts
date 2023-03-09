import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  clientSelected!: boolean;

  constructor(private router: Router) {}

  public handleClientsButtonClick() {
    if (!this.clientSelected) {
      this.clientSelected = true;
      this.router.navigate(['/clients']);
    }
  }

  public handleProductsButtonClick() {
    if (this.clientSelected) {
      this.clientSelected = false;
      this.router.navigate(['/products']);
    }
  }
}
