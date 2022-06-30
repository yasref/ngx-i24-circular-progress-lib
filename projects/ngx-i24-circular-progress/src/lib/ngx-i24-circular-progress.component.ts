import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ngx-i24-circular-progress',
  templateUrl: `./ngx-i24-circular-progress.component.html`,
  styleUrls: ['./ngx-i24-circular-progress.component.scss']
})
export class NgxI24CircularProgressComponent implements OnChanges {
  @Input() option: I24CircularProgressOptions = {
    primaryColor: '#0495fc',
    secondaryColor: '#191919',
    percentColor: '#000',
    textColor: '#000000bf',
    percent: 50,
    text: 'css',
    circleRadius: 70
  };
  size = '150px';
  steps = 440;
  ngOnChanges() {
    this.option.primaryColor = this.option.primaryColor ? this.option.primaryColor : '#0495fc';
    this.option.secondaryColor = this.option.secondaryColor ? this.option.secondaryColor : '#191919';
    this.option.percentColor = this.option.percentColor ? this.option.percentColor : '#000';
    this.option.textColor = this.option.textColor ? this.option.textColor : '#000000bf';

    this.option.circleRadius = this.option.circleRadius ? this.option.circleRadius : 70;

    this.size = ((this.option.circleRadius * 2) + 10) + 'px';
    this.steps = Math.round(6.2857 * this.option.circleRadius);
  }
  // get size() {
  //   return ((this.option.circleRadius * 2) + 10) + 'px';
  // }
  // get steps() {
  //   return Math.round(6.2857 * this.option.circleRadius);
  // }
}
export interface I24CircularProgressOptions {
  primaryColor?: string
  secondaryColor?: string
  percentColor?: string
  textColor?: string
  percent: number
  text?: string
  circleRadius?: number
}