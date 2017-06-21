import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
  }

  add(): void {
    this.router.navigate(['add'], {relativeTo: this.route});
    // this.router.navigate(['projects/add']);
  }
  edit() : void {
    this.router.navigate(['edit', 1], {relativeTo: this.route});
    // this.router.navigate(['projects/edit', 1]);
  }

}
