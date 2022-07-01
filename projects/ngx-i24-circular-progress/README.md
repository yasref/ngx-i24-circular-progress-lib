# NgxI24CircularProgress

 Lightweight plugin to render simple, animated and retina optimized pie charts
 
## Features
[![](https://raw.githubusercontent.com/yasref/ngx-i24-circular-progress-lib/master/demo/images/ngx-i24-circular-progress-lib.png)](https://stackblitz.com/edit/ngx-i24-circular-progress-demo)

* highly customizable
* very easy to implement
* [DEMO](https://stackblitz.com/edit/ngx-i24-circular-progress-demo)
## Get started
#### Installation
```
$ npm i ngx-i24-circular-progress@latest
```
#### Example
##### TS
###### Module
```typescript 
import { NgxI24CircularProgressModule } from 'ngx-i24-circular-progress';
@NgModule({
  declarations: [ AppComponent ],
  imports: [BrowserModule, NgxI24CircularProgressModule  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
 ###### Component
 ```typescript 
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  option = {
    primaryColor: '#0495fc',
    secondaryColor: '#191919',
    percentColor: '#fff',
    textColor: '#ffffffbf',
    percent: 75,
    text: 'html',
    circleRadius: 70
  };
```
##### HTML
```html 
<ngx-i24-circular-progress [option]="option"></ngx-i24-circular-progress>
``` 

## Options

| Property (Type) | Default | Description|
| - | - | - |
| primaryColor | #0495fc | The color of the active bar |
| secondaryColor | #191919 | The color of the inactive bar |
| strokeWidth | 2 | The stroke width of the circle |
| dotWidth | 5 | The width and the height of the dot |
| numberColor | #000 | The color of the number |
| percentColor | #000 | The color of the percent sign |
| textColor | #000000bf | The color of the text |
| numberFontSize |  '2.5em' | The font size of the number |
| percentFontSize |  '0.5em' | The font size of the percent sign |
| textFontSize |  '0.75em' | The font size of the text |
| percent | 50 | The value must be between `0 - 100` |
| text | 'css' | - |
| circleRadius | 70 | The radius of the circle |

## Copyright
Copyright (c) 2022 Yaseen Alrefaee, contributors. Released under the MIT

<!-- This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-i24-circular-progress` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-i24-circular-progress`.
> Note: Don't forget to add `--project ngx-i24-circular-progress` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-i24-circular-progress` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-i24-circular-progress`, go to the dist folder `cd dist/ngx-i24-circular-progress` and run `npm publish`.

## Running unit tests

Run `ng test ngx-i24-circular-progress` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
