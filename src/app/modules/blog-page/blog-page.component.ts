import { Component, Input, OnInit } from '@angular/core';
import { SharedBlogDataService } from '../shared-blog-data.service';
import { HttpClient } from '@angular/common/http';
import { BlogDetail, BlogDetailsList } from 'src/app/model/blog_data';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  htmlData: string = '<p>Unable to load</p>';
	searchForm!: FormGroup;
 searchString : string = "";
 navigationPath : Array<String>=["blog"];
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,private sharedBlogData: SharedBlogDataService
    ,private router: Router ,
    private route: ActivatedRoute) { }
  blogDetail1!: BlogDetail;
  isOn: Boolean=false;
  blogDetails: Array<BlogDetail> = BlogDetailsList;
  blogName:string="";

  post: any;
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: new FormControl()
    });
   this.blogName=JSON.stringify( this.route.snapshot.params.id).split('~')[0].replace("\"","");

    this.isOn=false;
    this.blogDetail1= this.blogDetails[parseInt(this.blogName)-1];
    let path = 'assets/' + this.blogDetail1.dataPath+ 'data.html';
    console.log("pat "+ path)
    this.http.get(path, {responseType: "text"}).subscribe(
    data => {
      this.htmlData = data;
    });

    this.navigationPath= this.blogDetail1.dataPath.split("/");

  }


  searchArticles(source: string)  {
    source= JSON.stringify(source).replace("{\"search\":\"","");
	  source=source.replace("\"}","");
    this.router.navigate(['blog/'+source]);

  }

  onBlog(source: String){

    source= JSON.stringify(source).replace("\"","");
	  source=source.replace("\"","");
    this.router.navigate(['blog/'+source]);


  }

}
