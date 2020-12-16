import {Component, Input, OnInit} from '@angular/core';
import {AlbumInterface, ArtistInterface} from "../../../core/models/search.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {

  @Input('albums') public albums: AlbumInterface[]
  public artists = ''

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public openDetails(id) {
    this.router.navigate([`/album`], {queryParams: { 'albumId' : id }})
  }


  public getAlbumArtists(album: AlbumInterface) {
    let artists = []
    album.artists.forEach(el => {
      artists.push(el.name)
    })
    return artists
  }
}
