import { Injectable } from '@angular/core';
import { BlogDetail, BlogDetailsList } from 'src/app/model/blog_data';

@Injectable({
  providedIn: 'root'
})
export class SharedBlogDataService {

  constructor() { }

  
  public blogDetail!: BlogDetail;
  public isSearchOff: boolean=false;

}
