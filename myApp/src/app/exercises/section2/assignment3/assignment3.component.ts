import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component implements OnInit {
  public buttonIsClicked = false;
  public buttonClicks = [];

  constructor() {}

  ngOnInit(): void {}

  public onClick() {
    this.buttonIsClicked = true;
    this.buttonClicks.push(this.buttonClicks.length);
  }

  public getBackgroundColor(buttonData: number) {
    return buttonData < 5 ? '' : 'blue';
  }
}
