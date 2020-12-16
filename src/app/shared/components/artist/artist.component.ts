import {Component, Input, OnInit} from '@angular/core';
import {ArtistInterface} from "../../../core/models/search.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {

  @Input('artist') public artist: ArtistInterface

  constructor(private router: Router) { }

  ngOnInit() {}

  openDetails() {
    this.router.navigate([`/artist`], {queryParams: { 'artistId' : this.artist.id }})
  }
}
