import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import Campground from 'src/models/Campground';

@Component({
  selector: 'app-campground-form',
  templateUrl: './campground-form.component.html',
  styleUrls: ['./campground-form.component.css'],
})
export class CampgroundFormComponent implements OnInit {
  @Input() goBackButton: boolean = false;
  @Input() buttonMessage: string = 'Submit';
  @Input() campground = {
    title: '',
    location: '',
    description: '',
    imageURL: '',
    price: undefined as number | undefined,
  };

  @Output() onFormSubmit = new EventEmitter<Campground>();

  constructor(private location: Location) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.valid && form.dirty) this.onFormSubmit.emit(form.value);
  }

  goBack(): void {
    this.location.back();
  }
}
