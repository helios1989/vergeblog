import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Http, Response } from '@angular/http';
import * as rxjs from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogService {
  private blogsURI = '/api/blogs';

  constructor(private http: Http) { }

  getBlogs(): Promise<Blog[]> {
    return this.http.get(this.blogsURI)
            .toPromise()
            .then(response => response.json() as Blog[])
            .catch(this.handleError);
  }

  getBlogDetail(blogId: String): Promise<Blog[]> {
    return this.http.get(this.blogsURI + '/' + blogId)
            .toPromise()
            .then(response => response.json() as Blog)
            .catch(this.handleError);
  }
  // post api/blogss
  createBlog(newBlog: Blog): Promise<Blog> {
    return this.http.post(this.blogsURI, newBlog)
            .toPromise()
            .then(response => response.json() as Blog)
            .catch(this.handleError);
  }

  // delete("/api/blogs/:id")
  deleteBlog(blogId: String): Promise<String> {
      return this.http.delete(this.blogsURI + '/' + blogId)
            .toPromise()
            .then(response => response.json() as String)
            .catch(this.handleError);
  }

  // put("/api/blogs/:id")
  updateContact(putBlog: Blog): Promise<Blog> {
    var putUrl = this.blogsURI + '/' + putBlog._id;
    return this.http.put(putUrl, putBlog)
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
