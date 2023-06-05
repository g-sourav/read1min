import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { SharedBlogDataService } from '../shared-blog-data.service';
import { HttpClient } from '@angular/common/http';
import { BlogDetail, BlogDetailsList } from 'src/app/model/blog_data';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
})
export class BlogPageComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private sharedBlogData: SharedBlogDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  htmlData: string = '';
  searchForm!: FormGroup;
  searchString: string = '';
  navigationPath: Array<String> = ['blog'];

  blogDetail1!: BlogDetail;
  isOn: Boolean = false;
  blogDetails: Array<BlogDetail> = [];
  blogName: string = '';
  url: string = '';
  post: any;
  isload: boolean = true;
  windowScrolled!: boolean;

  @HostListener("window:scroll", [])

  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } 
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) { 
      this.windowScrolled = false;
    }
  } 
  
  scrollToTop() {
    window.scroll(0,0);

  }

  
  ngOnInit(): void {
    window.scroll(0,0);
    this.isload=true;
    this.url = 'https%3A%2F%2Fwww.factyard.com%2F%23%2Fpage%2F';
    this.searchForm = this.formBuilder.group({
      search: new FormControl(),
    });
    this.searchString = this.sharedBlogData.searchData;
    this.blogName = JSON.stringify(this.route.snapshot.params.id);
    this.blogName= this.blogName.split('~')[0]
      .replace('\"', '').replace('\"', '');
    this.isOn = false;
    this.blogDetails=this.sharedBlogData.getAllBloginOrder();
    this.blogDetail1 = this.blogDetails[parseInt(this.blogName) - 1];
    let path = 'assets/' + this.blogDetail1.dataPath + 'data.html';
    this.http.get(path, { responseType: 'text' }).subscribe((data) => {
      this.htmlData = data;
      if(this.htmlData != '')
      {
          this.isload =false;
      }
    });

   
    this.navigationPath = this.blogDetail1.dataPath.split('/');
    this.navigationPath.splice(-1);
  }

  searchArticles(source: string) {
    source= this.searchForm.value.search;
    this.sharedBlogData.searchData = this.searchForm.value.search;
    this.router.navigate(['blog/' + source]);
  }

  onBlog(source: String) {
    source = JSON.stringify(source).replace('"', '');
    source = source.replace('"', '');
    this.sharedBlogData.searchData = String(source);
    this.router.navigate(['blog/' + source]);
  }
}
