import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampgroundService } from 'src/app/services/campground.service';
import Campground from 'src/models/Campground';

@Component({
  selector: 'app-campground-create',
  templateUrl: './campground-create.component.html',
  styleUrls: ['./campground-create.component.css'],
})
export class CampgroundCreateComponent implements OnInit {
  constructor(
    private campgroundService: CampgroundService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createCampground(campground: Campground) {
    this.campgroundService.create(campground).subscribe((data) => {
      this.router.navigate(['campgrounds', data._id]);
    });
  }
}
