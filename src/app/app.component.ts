import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QA / Tester Interview';

  isShown: boolean = false; // hidden by default
  toggleShow() {

    this.isShown = !this.isShown;

  }
}

