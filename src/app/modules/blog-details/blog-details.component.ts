import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Fuse from 'fuse.js';
import { SharedBlogDataService } from '../shared-blog-data.service';
import { BlogDetail, BlogDetailsList } from 'src/app/model/blog_data';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  searchForm!: FormGroup;
  searchPlaceholder: string = 'search here...';
  titleJson!: any;
  titleChar!: any;
  searchResults: any[] = [];
  navList: any[] = [
    'top',
    'travel',
    'career',
    'entertainment',
    'sports',
    'food',
    'science',
    'history',
    'lifestyle',
    'others'
  ];
  navitemno: number = 0;
  isNotSearching: Boolean = true;
  url: string = '';
  navUrl: string = '';
  public searchText: string = '';
  public result: [] = [];
  blogDetails: Array<BlogDetail> = [];
  htmlData: string = '<p>Unable to load</p>';
  isload: Boolean = false;
  isSearchFull: Boolean = false;
  pathVal: number = 0;
  noOfarticle: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private sharedBlogData: SharedBlogDataService
  ) {}

  ngOnInit(): void {
    this.navitemno = 0;
    this.searchForm = this.formBuilder.group({
      search: new FormControl(),
    });

    this.sharedBlogData.isSearchOff = false;
    this.isNotSearching = false;

    if (JSON.stringify(this.route.snapshot.params.id) != null) {
      console.log("back track");
      for (let index = 0; index < this.navList.length; index++) {
        if (this.navList[index] === this.route.snapshot.params.id) {
          this.navitemno = index;
          console.log(this.navitemno);
        }
      }
      if(this.navitemno === 0)
      {
          this.searchResults = this.sharedBlogData.gettop20();
          this.noOfarticle = this.searchResults.length;

      }
      else{
      this.searchForm.patchValue({ search: this.route.snapshot.params.id });
      this.searchArticles(this.route.snapshot.params.id);
      this.noOfarticle = this.searchResults.length;
      }
    } else {
      this.searchResults = this.sharedBlogData.getAllBlog();
      this.noOfarticle = this.searchResults.length;
    }
  }
  copyMessage(shareLinkBlog: BlogDetail) {
    this.pathVal = shareLinkBlog.dataPath.toLowerCase().split('/').length - 1;
    this.navUrl =
      'https://www.factyard.com/#/page/' +
      shareLinkBlog.id +
      '~' +
      shareLinkBlog.dataPath.toLowerCase().split('/')[this.pathVal - 1];
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value =
      'Hey I found this awesome article on ' +
      shareLinkBlog.title +
      ' on factyard : ' +
      this.navUrl;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  public sharefb(shareLinkBlog: BlogDetail) {
    this.createURL(
      shareLinkBlog,
      'https://www.facebook.com/sharer/sharer.php?u='
    );
    return window.open(this.navUrl, '_blank');
  }

  public shareWap(shareLinkBlog: BlogDetail) {
    this.createURL(shareLinkBlog, 'https://wa.me?text=');
    return window.open(this.navUrl);
  }

  public shareTwitter(shareLinkBlog: BlogDetail) {
    this.createURL(shareLinkBlog, 'https://twitter.com/share?url=');
    console.log(this.navUrl);
    return window.open(this.navUrl);
  }

  createURL(shareLinkBlog: BlogDetail, link: string) {
    this.pathVal = shareLinkBlog.dataPath.toLowerCase().split('/').length - 1;
    this.navUrl =
      link +
      'https%3A%2F%2Fwww.factyard.com%2F%23%2Fpage%2F' +
      shareLinkBlog.id;
    console.log('url : ' + this.navUrl);
    this.pathVal = 0;
  }
  navToggle(navi: number) {
    this.navitemno = navi;
    if (!this.searchForm.value.search) {
      this.searchForm.value.search = this.navList[this.navitemno];
    }
    if(this.navitemno !=0)
    {
    this.searchArticles(this.navList[this.navitemno]);
    }
    else
    {
      this.searchResults = this.sharedBlogData.gettop20();
      this.noOfarticle= this.searchResults.length;
    }

    window.scroll(0,0);

  }
  readMore(blogDetail1: BlogDetail) {
    this.pathVal = blogDetail1.dataPath.toLowerCase().split('/').length - 1;
    console.log(this.pathVal);
    this.sharedBlogData.blogDetail = blogDetail1;
    this.sharedBlogData.searchData = this.searchForm.value.search;
    this.url =
      'page/' +
      this.sharedBlogData.blogDetail.id +
      '~' +
    blogDetail1.dataPath.toLowerCase().split('/')[this.pathVal - 1];
    this.router.navigate([this.url]);
    this.sharedBlogData.isSearchOff = true;
    this.isNotSearching = true;
    this.searchResults = [];
    this.noOfarticle = this.searchResults.length;
  }
  searchArticles(source: string) {
    this.isload = true;
    source = JSON.stringify(source).replace('{"search":"', '');
    source = source.replace('"}', '');

    if (this.navitemno === 0 && !this.searchForm.value.search) {
      this.searchResults = this.sharedBlogData.getAllBlog();
      this.isload = false;
      if (this.searchResults.length === 0) {
        this.isSearchFull = true;
      }
    }
    else {
      this.sharedBlogData.isSearchOff = false;
      this.isNotSearching = false;
      this.searchResults = this.sharedBlogData.getSearchedBlogList(source);
      this.isload = false;
      this.noOfarticle = this.searchResults.length;

      if (this.searchResults.length === 0) {
        this.isSearchFull = true;
      }
    }
    window.scroll(0,0);

  }
}
