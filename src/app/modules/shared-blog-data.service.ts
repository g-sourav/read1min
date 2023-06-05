import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';
import { BlogDetail, BlogDetailsList } from 'src/app/model/blog_data';

@Injectable({
  providedIn: 'root'
})
export class SharedBlogDataService {

  blogDetails: Array<BlogDetail> = BlogDetailsList;
  allBlogDetails: Array<BlogDetail> = BlogDetailsList;
  customBloglist: Array<BlogDetail> = BlogDetailsList;

  constructor() {
    const local_posts = localStorage.getItem('posts');
    // console.log(local_posts);
    if (local_posts) {
      this.blogDetails = JSON.parse(local_posts);
    } else {
      localStorage.setItem('posts', JSON.stringify(this.blogDetails));
    }
   }

  
  public blogDetail!: BlogDetail;
  public isSearchOff: boolean=false;
  public searchData: string="";


  getSearchedBlogList(searchKey: string) {
    const options = {
      includeScore: true,
      keys: ['fulltitle', 'publishBy', 'date', 'topic', 'subTopics'],
    };

    const fuse = new Fuse(this.getAllBlog(), options);
    const result = fuse.search(searchKey);

    return result.map((item) => item.item);

  }

  getAllBlog(){
    this.customBloglist=[]
    for (let index = this.allBlogDetails.length; index > 0; index--)
    {
          this.customBloglist.push(this.allBlogDetails[index -1])
    }
    return this.customBloglist;  
  }
  getAllBloginOrder(){
    this.customBloglist=this.allBlogDetails;
    return this.customBloglist;  
  }

  gettop20(){
    this.customBloglist=[]
    for (let index = this.allBlogDetails.length; index > 0; index--)
    {
          this.customBloglist.push(this.allBlogDetails[index -1])
          if(this.customBloglist.length ==20)
          {
            break;
          }
    }
    return this.customBloglist;
  }

  get(id: string) {
    return { ...this.blogDetails.find(p => p.id === id) };
  }

  getBy(url?: string) {
    return { ...this.blogDetails.find(p => p.id === url) };
  }

}
