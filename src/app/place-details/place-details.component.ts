import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Place} from '../Place';
import {PlaceService} from '../place.service';
import {lifecycle} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  @Input() place: Place;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private location: Location
  ) {}

  ngOnInit(): void {
   this.getPlace();
  }

  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.placeService.getPlace(id)
      .subscribe(place => this.place = place);
    console.log(this.place.id);
  }

  goBack(): void {
    this.location.back();
  }

}
