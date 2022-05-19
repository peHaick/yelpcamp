import { Component, OnInit } from '@angular/core';
import { CampgroundService } from 'src/app/services/campground.service';
import { ActivatedRoute, Router } from '@angular/router';
import Campground from 'src/models/Campground';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campgrounds.component.html',
  styleUrls: ['./campgrounds.component.css'],
})
export class CampgroundsComponent implements OnInit {
  campgrounds!: Campground[];

  constructor(
    private campgroundService: CampgroundService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.campgroundService
      .fetchAll()
      .subscribe((campgrounds) => (this.campgrounds = campgrounds));
  }

  selectCampground(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
