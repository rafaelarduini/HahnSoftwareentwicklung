import { IfStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  clientSelected: boolean = true;
  @Output() click = new EventEmitter();

  public handleClientsButtonClick() {
    if (!this.clientSelected) {
      this.clientSelected = true;
      this.click.emit(this.clientSelected);
    }
  }

  public handleProductsButtonClick() {
    if (this.clientSelected) {
      this.clientSelected = false;
      this.click.emit(this.clientSelected);
    }
  }
}
