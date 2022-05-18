import { Component, OnInit, Input } from '@angular/core';
import Campground from 'src/models/campground';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() campground!: Campground;
  @Input() index!: number;

  constructor() {}

  ngOnInit(): void {}
}
