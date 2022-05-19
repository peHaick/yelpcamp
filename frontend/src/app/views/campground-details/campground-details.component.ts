import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampgroundService } from 'src/app/services/campground.service';
import Campground from 'src/models/Campground';

@Component({
  selector: 'app-campground-details',
  templateUrl: './campground-details.component.html',
  styleUrls: ['./campground-details.component.css'],
})
export class CampgroundDetailsComponent implements OnInit {
  id!: string;
  campground!: Campground;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campgroundService: CampgroundService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.campgroundService
      .fetchById(this.id)
      .subscribe((campground) => (this.campground = campground));
  }
}
