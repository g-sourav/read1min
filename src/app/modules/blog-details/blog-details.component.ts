import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Fuse from 'fuse.js';

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
  items: any[] = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A classic novel about the Jazz Age' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A story about racial injustice' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A romantic novel set in 19th-century England' },

    { title: 'Prejudice', author: 'Jane Austen', description: 'A romantic novel set in 19th-century England' },

    { title: 'Rest in p', author: 'Jane Austen', description: 'A romantic novel set in 19th-century England' },

    { title: 'cricket', author: 'Jane Austen', description: 'A romantic novel set in 19th-century England' },

    { title: 'football', author: 'Jane Austen', description: 'A romantic novel set in 19th-century England' },

    { title: 'movie', author: 'Jane Austen', description: 'A romantic novel set in 19th-century England' },
    // Add more sample items as needed
  ];
  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
   }


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: new FormControl()
    });
  }
  fullName: string="asdfg dc c scsc";

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

    const options = {
      includeScore: true,
      keys: ['title', 'author', 'description'],
    };
  
    const fuse = new Fuse(this.items, options);
    const result = fuse.search(source);

    this.searchResults = result.map((item) => item.item);

    console.log("res :  "+this.searchResults[0]);
  }
}
