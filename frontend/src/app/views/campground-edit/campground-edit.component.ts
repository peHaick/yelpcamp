import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampgroundService } from 'src/app/services/campground.service';
import Campground from 'src/models/Campground';

@Component({
  selector: 'app-campground-edit',
  templateUrl: './campground-edit.component.html',
  styleUrls: ['./campground-edit.component.css'],
})
export class CampgroundEditComponent implements OnInit {
  id!: string;
  campground!: Campground;

  constructor(
    private route: ActivatedRoute,
    private campgroundService: CampgroundService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.campgroundService
      .fetchById(this.id)
      .subscribe((campground) => (this.campground = campground));
  }

  updateCampground(updates: Object): void {
    this.campgroundService.update(updates, this.id).subscribe(() => {
      this.router.navigate(['campgrounds', this.id]);
    });
  }
}
