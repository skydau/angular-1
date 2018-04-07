import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Hello World!';
    soNumber: string;

    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
        this.title = 'test debug mode';
        this.title = 'test debug mode1';
        this.soNumber = '123456';
    }

    search(event) {
      if (event.keyCode === 13) {
        this.title = this.soNumber;
      }
    }
}
