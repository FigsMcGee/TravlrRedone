import { Component, OnInit, Input } from '@angular/core';
import {trips} from '../data/trips';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit{

  trips: Array<any> = trips;

  constructor(){}

  ngOnInit(): void {
    
  }

}
