import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Fuse from 'fuse.js';
import { SharedBlogDataService } from '../shared-blog-data.service';
import { BlogDetail, BlogDetailsList } from 'src/app/model/blog_data';
//import FuzzySearch from "fuzzy-search";


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

	searchForm!: FormGroup;
  titleJson!: any;
  titleChar! : any;
  searchResults: any[] = [];
  isOnC: Boolean=true;
  url: string="";
  public searchText: string="";
  public result: [] = [];
  blogDetails: Array<BlogDetail> = BlogDetailsList;
  htmlData: string = '<p>Unable to load</p>';

  @Output () total = new EventEmitter<BlogDetail>();

  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router, private sharedBlogData: SharedBlogDataService) {
   }


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: new FormControl()
    });
  }

  readMore(blogDetail1: BlogDetail){
    this.sharedBlogData.blogDetail= blogDetail1;
    this.url="navbar/blog/page/"+this.sharedBlogData.blogDetail.title.replace(" ","-");
    this.router.navigate([this.url]);
    this.sharedBlogData.isSearchOff=true;
    this.isOnC=true;
    this.searchResults=[];
  }
  onSearchText() {
    this.sharedBlogData.isSearchOff=false;
    this.isOnC=false;
    console.log("is on   :  "+this.sharedBlogData.isSearchOff);
    const options = {
      includeScore: true,
      keys: ["title", "publishBy", "date","topic","subTopics"],
    };
  
    const fuse = new Fuse(this.blogDetails, options);
    const result = fuse.search(this.searchText);

    this.searchResults = result.map((item) => item.item);

    console.log("res :  "+this.searchResults[0]);

  //   for (let index = 0; index < this.searchResults.length; index++) {

  //   let path = 'assets/' + this.searchResults + '.html';
  //   this.http.get(path, {responseType: "text"}).subscribe(
  //   data => {
  //     this.htmlData= data;
  //   });

  // }

   // this.result = this.searcher.search(this.searchText);
   // console.log(this.searchText, ": ", this.result);
  }

  // searcher = new FuzzySearch(this.blogDetails, ["title", "publishBy", "date","topic","subTopics"], {
  //   caseSensitive: false
  // });


  searchArticles(source: string) {
    source= JSON.stringify(source).replace("{\"search\":\"","");
		source=source.replace("\"}","");

    this.titleChar= source.split(' ');

    let path = 'assets/' + 'jsons/blog_titles' + '.json';
    this.http.get(path).subscribe(
    data => {
      this.titleJson= data;
      console.log(this.titleJson.length);

      for (let index = 0; index < this.titleJson.length; index++) {
       // console.log( this.titleJson[index]);
    }
    });
    console.log("search starts :  "+source);

    // const options = {
    //   includeScore: true,
    //   keys: ['title', 'author', 'description'],
    // };
  
    // const fuse = new Fuse(this.items, options);
    // const result = fuse.search(source);

    // this.searchResults = result.map((item) => item.item);

    // console.log("res :  "+this.searchResults[0]);
  }
}
