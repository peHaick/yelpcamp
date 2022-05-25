import { Component, OnInit } from '@angular/core';
import { CampgroundService } from 'src/app/services/campground.service';
import { ActivatedRoute, Router } from '@angular/router';
import Campground from 'src/models/Campground';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campgrounds.component.html',
  styleUrls: ['./campgrounds.component.css'],
})
export class CampgroundsComponent implements OnInit {
  campgrounds!: Campground[];
  page: number = 1;
  page_size: number = 12;
  last_page!: number;
  loading: boolean = true;

  constructor(
    private campgroundService: CampgroundService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.campgroundService.getAmount().subscribe(({ amount }) => {
      this.last_page = Math.ceil(amount / this.page_size);
    });

    this.fetchPage();
  }

  fetchPage(): void {
    this.route.queryParams
      .pipe(
        mergeMap((params) => {
          this.page = parseInt(params['page']) || this.page;
          this.page_size = parseInt(params['page_size']) || this.page_size;
          return this.campgroundService.fetchPage(this.page, this.page_size);
        })
      )
      .subscribe((campgrounds) => {
        this.campgrounds = campgrounds;
        this.loading = false;
      });
  }

  goToPage(page: number): void {
    this.loading = true;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge',
    });

    this.fetchPage();
  }

  selectCampground(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
