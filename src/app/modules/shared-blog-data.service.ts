import { Injectable } from '@angular/core';
import { BlogDetail, BlogDetailsList } from 'src/app/model/blog_data';

@Injectable({
  providedIn: 'root'
})
export class SharedBlogDataService {

  blogDetails: Array<BlogDetail> = BlogDetailsList;

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

  get(id: string) {
    return { ...this.blogDetails.find(p => p.id === id) };
  }

  getBy(url?: string) {
    return { ...this.blogDetails.find(p => p.id === url) };
  }

}
