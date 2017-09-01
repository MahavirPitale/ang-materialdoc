import { Component } from '@angular/core';
import { RouterLink, Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(router: Router, route: ActivatedRoute){

  }
}
