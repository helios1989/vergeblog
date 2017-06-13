import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {
  blogs: Blog[]
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs()
      .then((blogs: Blog[]) => {
        if (blogs) {
        this.blogs = blogs.map((blogs) => {
          if(!blogs.name) {
            console.log('no contact')
          }
            console.log(blogs);
            return blogs;
          });
        }
      });
  }

}
