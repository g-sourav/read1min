import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }
  htmlData: string = '<p>Unable to load</p>';

  ngOnInit(): void {
    let path = 'assets/' + 'healthiswealth' + '.html';
    this.http.get(path, {responseType: "text"}).subscribe(
    data => {
      this.htmlData= data;
    });
  }

}
