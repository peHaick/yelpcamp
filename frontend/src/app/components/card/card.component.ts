import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CampgroundService } from 'src/app/services/campground.service';
import Campground from 'src/models/Campground';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() campground!: Campground;
  @Input() truncate: boolean = false;
  @Input() footer: boolean = false;
  @Input() class: string = '';

  @Output() onButtonClick = new EventEmitter<void>();

  modalOpen: boolean = false;

  constructor(
    private router: Router,
    private campgroundService: CampgroundService
  ) {}

  ngOnInit(): void {}

  toggleModal(): void {
    this.modalOpen = !this.modalOpen;
  }

  deleteCampground(): void {
    this.campgroundService.delete(this.campground._id).subscribe();
    this.router.navigate(['campgrounds']);
  }
}
