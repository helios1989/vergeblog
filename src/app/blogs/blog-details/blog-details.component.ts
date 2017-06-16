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
  blogData: Blog;
  constructor(
    private router: Router,
    private blogService: BlogService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //automatically pull the params in ActivatedRoute
    let name: string;
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; //(+) converts string 'id' to a number
       if(this.id !== 0) {
         this.blogService.getBlogDetail(this.id).then((blogDetail: Blog) => {
            this.blogData = blogDetail;
            this.blogData._id = blogDetail._id;
            this.blogData.name = blogDetail.name;
            this.blogData.email = blogDetail.email;
            this.blogData.contact = blogDetail.contact;
            this.blogData.description = blogDetail.description;
            name = blogDetail.name;
            console.log(name);
            // for ( var i in blogDetail) {
            //   this.blogData[i] = blogDetail[i];
            // }
          });
       }
       console.log(name);
       // In a real app: dispatch action to load the details here.
       console.log(this.blogData);
       this.initForm(this.blogData);
    });


  }
  initForm(blogData: any) {
    // this.router.paramss
    console.log(blogData);
    this.blogForm = this.fb.group({
      //first argument is the initial value and second the valdiation
      'title': [null, Validators.required],
      'description': [null, Validators.required], // multiple validator
      'email': [null, [Validators.required, Validators.email]],
      'contact': this.fb.group({
        'mobile': [null, Validators.required],
        'telephone': [null, Validators.required]
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
