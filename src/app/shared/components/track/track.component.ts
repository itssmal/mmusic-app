import {Component, Input, OnInit} from '@angular/core';
import {TrackInterface} from "../../../core/models/search.interface";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {

  @Input('tracks') public tracks: TrackInterface[]
  constructor() { }

  ngOnInit() {

  }

  openDetails(track: TrackInterface) {
    window.open(track.external_urls.spotify, '_blank')
  }

}
