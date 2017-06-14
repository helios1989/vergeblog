import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Http, Response } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class BlogService {
  private blogsURI = '/api/blogs';
  private blogAddnew = '/api/blogaddnew'
  constructor(private http: Http) { }

  getBlogs(): Promise<Blog[]> {
         return this.http.get(this.blogsURI)
                  .toPromise()
                  .then(response => response.json() as Blog[])
                  .catch(this.handleError);
  }

  // post api/blogs
  createBlog(newBlog: Blog): Promise<Blog> {
    return this.http.post(this.blogAddnew, newBlog)
                .toPromise()
                .then(response => response.json() as Blog)
                .catch(this.handleError);
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
