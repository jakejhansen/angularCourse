import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component {
  public buttonIsClicked = false;
  public buttonClicks = [];

  public onClick() {
    this.buttonIsClicked = !this.buttonIsClicked;
    this.buttonClicks.push(new Date());
  }

  public getBackgroundColor(buttonData: number) {
    return buttonData < 5 ? '' : 'blue';
  }
}
