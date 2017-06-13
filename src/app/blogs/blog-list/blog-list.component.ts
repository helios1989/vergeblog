import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import * as moment from 'moment';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {
  blogs: Blog[]
  constructor(private blogService: BlogService) { }
  // testDate: string
  ngOnInit() {
    // const raw = '2017-06-13T05:36:22.474Z';
    // this.testDate = moment(raw).format('MMMM do YYYY h:mm:ss a');
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
