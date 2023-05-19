import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-details',
  templateUrl: './nav-bar-details.component.html',
  styleUrls: ['./nav-bar-details.component.css']
})
export class NavBarDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['navbar/blog/desh-aysae-banega'])
  }

}
