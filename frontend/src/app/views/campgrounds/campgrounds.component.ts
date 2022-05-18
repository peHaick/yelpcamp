import { Component, OnInit } from '@angular/core';
import { CampgroundService } from 'src/app/services/campground.service';
import Campground from 'src/models/campground';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campgrounds.component.html',
  styleUrls: ['./campgrounds.component.css'],
})
export class CampgroundsComponent implements OnInit {
  campgrounds!: Campground[];

  constructor(private campgroundService: CampgroundService) {}

  ngOnInit(): void {
    this.campgroundService
      .fetchAll()
      .subscribe((campgrounds) => (this.campgrounds = campgrounds));
  }
}
