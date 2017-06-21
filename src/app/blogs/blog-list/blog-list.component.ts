import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
// import { BlogDetailsComponent } from '../blogs/blog-details/blog-details.component';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {
  blogs: Blog[]
  selectedBlog: Blog
  constructor(
    private blogService: BlogService,
    private router: Router,
    private localStorageService: LocalStorageService
    ) { }
  // testDate: string
  ngOnInit() {
    // const raw = '2017-06-13T05:36:22.474Z';
    // this.testDate = moment(raw).format('MMMM do YYYY h:mm:ss a');
    this.blogService.getBlogs()
      .then((blogs: Blog[]) => {
        if (blogs) {
        this.blogs = blogs.map((blogs) => {
          if(!blogs.title) {
            // console.log('no contact')
          }
            // console.log(blogs);
            return blogs;
          });
        }
      });
  }

  newBlog() {
    // // Create a dummy session id
    // let sessionId = 123456789;
    // //add new blog
    // let navigationExtras: NavigationExtras = {
    //   queryParams: { 'session_id': sessionId }
    // };
    this.router.navigate(['blog', 0]);
    return false;
  }

  updateBlog(id: string) {
    // const idx = this.getIndexOfBlog(blog._id);
    this.router.navigate(['blog', id]);
  }

  private getIndexOfBlog = (blogId: String) => {
    return this.blogs.findIndex((blogs) => {
      return blogs._id === blogId;
    });
  }

  deleteBlog(id: string) {
    // this.blogs;
    this.blogService.deleteBlog(id).then((deletedContactId: String) => {
      var idx = this.getIndexOfBlog(deletedContactId);
      if (idx !== -1) {
          this.blogs.splice(idx, 1);
          this.selectContact(null);
      }
      return this.blogs;
    });
  }

  selectContact(blog: Blog) {
    this.selectedBlog = blog;
  }
}
