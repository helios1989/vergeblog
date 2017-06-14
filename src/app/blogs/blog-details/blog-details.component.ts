import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  //using reactiveform template
  blogForm: FormGroup;
  constructor(
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    // this.router.params
    this.blogForm = new FormGroup({
      //first argument is the initial value and second the valdiation
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required), // multiple validator
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'contact': new FormGroup({
        'mobile': new FormControl(null, Validators.required),
        'telephone': new FormControl(null, Validators.required)
      })
    });
  }
  save() {
    
    this.blogService.createBlog(this.blogForm.value).then((newBlog: Blog) => {
      console.log('successfully addded ' + newBlog);
    });
    
  }

}
