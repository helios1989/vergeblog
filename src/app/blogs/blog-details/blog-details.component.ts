import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
  providers: [BlogService]
})
export class BlogDetailsComponent implements OnInit {
  //using reactiveform template
  //Form Group Array
  blogForm: FormGroup;
  private sub: any;
  id: any;
  blogData:  Blog;
  constructor(
    private router: Router,
    private blogService: BlogService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //automatically pull the params in ActivatedRoute
    let blogForm = {};
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; //(+) converts string 'id' to a number
       if(this.id !== 0) {
         this.blogService.getBlogDetail(this.id).then((blogDetail: Blog) => {
            // blogForm.name = blogDetail.name;
            // console.log(blogDetail);
            // blogForm.name = name;
            // blogData._id =
            blogForm = blogDetail;
            console.log('>>>>>>');
            console.log(blogForm);
         });
       }
       // In a real app: dispatch action to load the details here.
    });
    // this.router.paramss
    this.blogForm = this.fb.group({
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
    console.log(this.blogForm.value);
    this.blogService.createBlog(this.blogForm.value).then((newBlog: Blog) => {
      // console.log('successfully addded ' + newBlog);
    });
  }

}
