import { Component, OnInit, Input } from '@angular/core';
import Campground from 'src/models/Campground';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() campground!: Campground;

  constructor() {}

  ngOnInit(): void {}
}
