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

    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; //(+) converts string 'id' to a number
       if(this.id !== 0) {
         this.blogService.getBlogDetail(this.id).then((blogDetail: Blog) => {
           console.log(blogDetail.title);
            this.blogForm = this.fb.group({
            //first argument is the initial value and second the valdiatio
            'title': new FormControl(blogDetail.title, Validators.required),
            'description': new FormControl(blogDetail.description, Validators.required),
            'email': new FormControl(blogDetail.email, Validators.required),
            'contact':  this.fb.group({
              'mobile': new FormControl(blogDetail.contact.mobile, Validators.required),
              'telephone': new FormControl(blogDetail.contact.telephone, Validators.required),
            })
          });
         });
       } else {
         this.blogForm = this.fb.group({
            //first argument is the initial value and second the valdiation
            'title': [null, Validators.required],
            'description': [null, Validators.required], // multiple validator
            'email': [null, [Validators.required, Validators.email]],
            'contact':  this.fb.group({
              'mobile': [null, Validators.required],
              'telephone': [null, Validators.required]
            })
          });
       }
       // In a real app: dispatch action to load the details here.
    });
    // this.router.paramss
    

  }
  save() {
    console.log(this.blogForm.value);
    this.blogService.createBlog(this.blogForm.value).then((newBlog: Blog) => {
      // console.log('successfully addded ' + newBlog);
    });
  }

}
