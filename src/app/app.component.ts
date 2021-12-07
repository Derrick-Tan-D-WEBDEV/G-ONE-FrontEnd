import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netstorm';

  constructor(private route:Router) { }

  ngOnInit(): void {
    // console.log(this.route.url)
    // if(this.route.url == '/')
    //   this.route.navigateByUrl("/welcome-message/home")
  }
}
