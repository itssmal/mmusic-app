import { Component, OnInit } from '@angular/core';
import {AlbumInterface, TrackInterface} from "../../core/models/search.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumService} from "../../core/services/album.service";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.page.html',
  styleUrls: ['./album-details.page.scss'],
})
export class AlbumDetailsPage implements OnInit {

  public album: AlbumInterface
  private albumId: string
  public isLoading = false

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.albumId = this.route.snapshot.queryParams['albumId']
    if (this.albumId) {
      this.getAlbumDetails(this.albumId)
    }
  }

  private async getAlbumDetails(id: string): Promise<void> {
    this.isLoading = true
    try {
      this.album = await this.albumService.getAlbum(id).toPromise()
    } catch (e) {
      console.log(e)
    } finally {
      this.isLoading = false
    }
  }

  public getAlbumArtists(album: AlbumInterface) {
    let artists = []
    album.artists.forEach(el => {
      artists.push(el.name)
    })
    return artists
  }

  public openArtist(id: string) {
    this.router.navigate(['artist'], {queryParams: {'artistId': id}})
  }

  public getTrackArtists(track: TrackInterface) {
    let artists = []
    track.artists.forEach(el => artists.push(el.name))
    return artists
  }

  public millisecondsToMinutes(millis) {
    let minutes = Math.floor(millis / 60000)
    let seconds = Math.floor((millis % 60000) / 1000)
    return minutes + ' : ' + (seconds > 9 ? '' : '0') + seconds
  }

  public openTrack(track: TrackInterface) {
    window.open(track.external_urls.spotify, '_blank')
  }

}
