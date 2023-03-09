import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output()
  public clickOutput = new EventEmitter<MouseEvent>();

  public handleClick(event: MouseEvent) {
    console.log(event);
    this.clickOutput.emit(event);
  }
}
