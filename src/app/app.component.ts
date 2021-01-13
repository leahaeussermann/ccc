import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  public isCollapsed = true;

  constructor(public router: Router) {
  }
  refresh() {
    this.router.navigate(['/home']);
  }
}
