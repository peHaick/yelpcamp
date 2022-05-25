import { Location } from '@angular/common';
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
  modalOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campgroundService: CampgroundService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));

    this.campgroundService.fetchById(this.id).subscribe({
      next: (campground) => (this.campground = campground),
      error: (e) => {
        if (e.status === 404) this.router.navigate(['campgrounds']);
      },
    });
  }

  toggleModal(): void {
    this.modalOpen = !this.modalOpen;
  }

  deleteCampground(): void {
    this.campgroundService.delete(this.campground._id).subscribe();
    this.router.navigate(['campgrounds']);
  }

  return(): void {
    this.location.back();
  }
}
