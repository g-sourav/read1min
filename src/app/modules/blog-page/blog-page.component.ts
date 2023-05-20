import { Component, Input, OnInit } from '@angular/core';
import { SharedBlogDataService } from '../shared-blog-data.service';
import { HttpClient } from '@angular/common/http';
import { BlogDetail, BlogDetailsList } from 'src/app/model/blog_data';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  htmlData: string = '<p>Unable to load</p>';

  constructor(private http: HttpClient,private sharedBlogData: SharedBlogDataService) { }
  blogDetail1!: BlogDetail;
  isOn: Boolean=false;
  ngOnInit(): void {
    this.isOn=this.sharedBlogData.isSearchOff;
 this.blogDetail1= this.sharedBlogData.blogDetail;
    let path = 'assets/' + this.sharedBlogData.blogDetail.dataPath+ 'data.html';
    this.http.get(path, {responseType: "text"}).subscribe(
    data => {
      this.htmlData= data;
    });
  }

}
