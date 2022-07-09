import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
    percent: 75,
    text: 'html',
    circleRadius: 70,
  };
  darkCssOption = {
    ...this.darkHtmlOption,
    text: 'css',
    percent: 60,
    primaryColor: '#04fc43',
  };
  darkJsOption = {
    ...this.darkHtmlOption,
    text: 'js',
    percent: 40,
    primaryColor: '#e91e63',
  };

  lightHtmlOption = {
    primaryColor: '#f44336',
    secondaryColor: '#dadada',
    percentColor: '#000',
    textColor: '#000bf',
    percent: 95,
    text: 'html',
    circleRadius: 70,
  };
  lightCssOption = {
    ...this.lightHtmlOption,
    text: 'css',
    percent: 40,
    primaryColor: '#673ab7',
  };
  lightJsOption = {
    ...this.lightHtmlOption,
    text: 'js',
    percent: 65,
    primaryColor: '#ffc107',
  };
}