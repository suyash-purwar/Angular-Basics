import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonDisabled = true;

  constructor() {

    setTimeout(() => {
      this.buttonDisabled = false;
    }, 2000);

  }
}
