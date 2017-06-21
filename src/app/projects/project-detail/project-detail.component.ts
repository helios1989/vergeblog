import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit, CanComponentDeactivate {
  allowedit = false;
  changesSaved = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (paramId: Params) => {
          // console.log(paramId);
          this.allowedit = paramId['id'] === '1' ? true : false;
        }
      )
  }

  save() {
    this.changesSaved = true;
    this.router.navigate([''], { relativeTo: this.route})
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowedit) {
      return true;
    } else {
      return confirm("Do you want to discard your changes");
    }
    // if (this.servername !== this.erv)
  }
}
