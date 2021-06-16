import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onActivate(event: any) {
    window.scroll(0,0);
    /*
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 70);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 1);
    */
  }
}
