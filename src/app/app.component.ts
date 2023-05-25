import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'read1min';
  constructor(private router: Router) { }
  ngOnInit() {
    //this.router.navigate(['']);
  }
}
