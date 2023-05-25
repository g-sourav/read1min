import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  searchPlaceholder: string="search here...";
  titleJson!: any;
  titleChar! : any;
  searchResults: any[] = [];
  isNotSearching: Boolean=true;
  url: string="";
  navUrl: string="";
  public searchText: string="";
  public result: [] = [];
  blogDetails: Array<BlogDetail> = BlogDetailsList;
  htmlData: string = '<p>Unable to load</p>';
  isload: Boolean=false;
  isSearchFull: Boolean=false;
  pathVal: number=0;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router, private route: ActivatedRoute,
    private sharedBlogData: SharedBlogDataService) {
   }


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: new FormControl()
    });    
    this.sharedBlogData.isSearchOff=false;
    this.isNotSearching=false;

    if(JSON.stringify( this.route.snapshot.params.id) != null)
    {
      this.searchForm.patchValue({search : this.route.snapshot.params.id});
      this.searchArticles(this.route.snapshot.params.id);
    }

    else{
    this.searchResults=this.blogDetails;
    }
  }
  copyMessage(shareLinkBlog: BlogDetail){
    this.pathVal= ((shareLinkBlog.dataPath).toLowerCase().split("/")).length -1;
    this.navUrl ="https://www.read1min.co.uk/#/page/"+shareLinkBlog.id+"~"+"null"+"~"+((shareLinkBlog.dataPath).toLowerCase().split("/"))[this.pathVal-1];
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value ='Hey I found this awesome article on '+shareLinkBlog.title+' on read1min : '+ this.navUrl;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  public sharefb(shareLinkBlog:BlogDetail) {
    this.createURL(shareLinkBlog,'https://www.facebook.com/sharer/sharer.php?u=');
    return window.open(this.navUrl, "_blank");
  }

  public shareWap(shareLinkBlog:BlogDetail) {
    this.createURL(shareLinkBlog,'https://wa.me?text=');
    return window.open(this.navUrl);
  }

  public shareTwitter(shareLinkBlog:BlogDetail) {
    this.createURL(shareLinkBlog,'https://twitter.com/share?url=');
    console.log(this.navUrl);
    return window.open(this.navUrl);
  }

  createURL(shareLinkBlog: BlogDetail, link: string)
  {
    this.pathVal= ((shareLinkBlog.dataPath).toLowerCase().split("/")).length -1;
   this.navUrl =link+"https%3A%2F%2Fwww.read1min.co.uk%2F%23%2Fpage%2F"+shareLinkBlog.id+"~"+"null"+"~"+((shareLinkBlog.dataPath).toLowerCase().split("/"))[this.pathVal-1];
    console.log("url : "+ this.navUrl)
    this.pathVal=0;
  }

  readMore(blogDetail1: BlogDetail){

    this.pathVal= ((blogDetail1.dataPath).toLowerCase().split("/")).length -1;
    this.sharedBlogData.blogDetail= blogDetail1;
    this.url="page/"+this.sharedBlogData.blogDetail.id+"~"+this.searchForm.value.search+"~"+((blogDetail1.dataPath).toLowerCase().split("/"))[this.pathVal-1];
    this.router.navigate([this.url]);
    this.sharedBlogData.isSearchOff=true;
    this.isNotSearching=true;
    this.searchResults=[];
  }
  searchArticles(source: string)  {

    if(!this.searchForm.value.search)
    {
    }
    else{
    this.isload=true;
    source= JSON.stringify(source).replace("{\"search\":\"","");
	  source=source.replace("\"}","");
    this.sharedBlogData.isSearchOff=false;
    this.isNotSearching=false;
    const options = {
      includeScore: true,
      keys: ["fulltitle", "publishBy", "date","topic","subTopics"],
    };
  
    const fuse = new Fuse(this.blogDetails, options);
    const result = fuse.search(source);
    this.isload=false;

    this.searchResults = result.map((item) => item.item);

    if(this.searchResults.length ===0)
    {
      this.isSearchFull= true;
    }
  }

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


  // searchArticles(source: string) {
  //   source= JSON.stringify(source).replace("{\"search\":\"","");
	// 	source=source.replace("\"}","");

  //   this.titleChar= source.split(' ');

  //   let path = 'assets/' + 'jsons/blog_titles' + '.json';
  //   this.http.get(path).subscribe(
  //   data => {
  //     this.titleJson= data;
  //     console.log(this.titleJson.length);

  //     for (let index = 0; index < this.titleJson.length; index++) {
  //      // console.log( this.titleJson[index]);
  //   }
  //   });
  //   console.log("search starts :  "+source);

  // }
}
