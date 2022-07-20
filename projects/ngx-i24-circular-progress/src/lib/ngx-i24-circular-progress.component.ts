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

    strokeWidth: 2,
    dotWidth: 10,

    numberColor: '#000',
    percentColor: '#000',
    textColor: '#000000bf',

    text: 'css',
    circleRadius: 70,

    numberFontSize: '2.5em',
    percentFontSize: '0.5em',
    textFontSize: '0.75em',

  };
  @Input() number: number = 0;

  size = '150px';
  steps = 440;

  strokeWidth = '2px';
  dotWidth = '10px';
  dotTop = '-5px';
  strokeDashoffset = 0;
  ngOnChanges() {
    this.init();
  }
  init() {
    this.option.primaryColor = this.option.primaryColor ? this.option.primaryColor : '#0495fc';
    this.option.secondaryColor = this.option.secondaryColor ? this.option.secondaryColor : '#191919';

    this.option.strokeWidth = this.option.strokeWidth ? this.option.strokeWidth : 2;
    this.option.dotWidth = this.option.dotWidth ? this.option.dotWidth : 10;


    this.option.numberColor = this.option.numberColor ? this.option.numberColor : '#000';
    this.option.percentColor = this.option.percentColor ? this.option.percentColor : '#000';
    this.option.textColor = this.option.textColor ? this.option.textColor : '#000000bf';

    this.option.circleRadius = this.option.circleRadius ? this.option.circleRadius : 70;

    this.option.numberFontSize = this.option.numberFontSize ? this.option.numberFontSize : '2.5em';
    this.option.percentFontSize = this.option.percentFontSize ? this.option.percentFontSize : '0.5em';
    this.option.textFontSize = this.option.textFontSize ? this.option.textFontSize : '0.75em';
    this.option.spaceBetweenNumberPercent = this.option.spaceBetweenNumberPercent ? this.option.spaceBetweenNumberPercent : '3px';

    this.size = ((this.option.circleRadius * 2) + 10) + 'px';
    this.steps = Math.round(6.2857 * this.option.circleRadius);

    this.strokeWidth = this.option.strokeWidth + 'px';
    this.dotWidth = this.option.dotWidth + 'px';
    this.dotTop = '-' + Math.round(this.option.dotWidth / 2) + 'px';

    this.strokeDashoffset = this.steps - ((this.steps * this.number) / 100);
  }
  // get size() {
  //   return ((this.option.circleRadius * 2) + 10) + 'px';
  // }
  // get steps() {
  //   return Math.round(6.2857 * this.option.circleRadius);
  // }
}
export interface I24CircularProgressOptions {
  primaryColor?: string;
  secondaryColor?: string;

  strokeWidth?: number;
  dotWidth?: number;

  numberColor?: string;
  percentColor?: string;
  textColor?: string;

  spaceBetweenNumberPercent?: string;

  text?: string;
  circleRadius?: number;

  numberFontSize?: string;
  percentFontSize?: string;
  textFontSize?: string;
}