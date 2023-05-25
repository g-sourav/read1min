import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar-details',
  templateUrl: './nav-bar-details.component.html',
  styleUrls: ['./nav-bar-details.component.css']
})
export class NavBarDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("in on : "+ this.route.snapshot.component?.toString);
 
    //this.router.navigate(['blog'])
  }

}
