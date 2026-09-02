import { Component } from '@angular/core';
import { NgxI24CircularProgressComponent } from 'projects/ngx-i24-circular-progress/src/public-api';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NgxI24CircularProgressComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkHtmlOption = {
    primaryColor: '#0495fc',
    secondaryColor: '#191919',
    numberColor: '#fff',
    percentColor: '#fff',
    textColor: '#ffffffbf',
    text: 'html',
    circleRadius: 70,
  };
  darkCssOption = {
    ...this.darkHtmlOption,
    text: 'css',
    primaryColor: '#04fc43',
  };
  darkJsOption = {
    ...this.darkHtmlOption,
    text: 'js',
    primaryColor: '#e91e63',
  };

  lightHtmlOption = {
    primaryColor: '#f44336',
    secondaryColor: '#dadada',
    percentColor: '#000',
    textColor: '#000bf',
    text: 'html',
    circleRadius: 70,
  };
  lightCssOption = {
    ...this.lightHtmlOption,
    text: 'css',
    primaryColor: '#673ab7',
  };
  lightJsOption = {
    ...this.lightHtmlOption,
    text: 'js',
    primaryColor: '#ffc107',
  };
}