import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumService} from "../../core/services/album.service";
import {PlaylistService} from "../../core/services/playlist.service";
import {PlaylistInterface, TrackInterface} from "../../core/models/search.interface";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  public playlist: PlaylistInterface
  private playlistId: string
  public isLoading = false

  constructor(private route: ActivatedRoute,
              private router: Router,
              private playlistService: PlaylistService) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.playlistId = this.route.snapshot.queryParams['id']
    console.log(this.playlistId)
    if (this.playlistId) {
      this.getPlaylist(this.playlistId)
    }
  }

  private async getPlaylist(id: string): Promise<void> {
    this.isLoading = true
    try {
      this.playlist = await this.playlistService.getPlaylistTracks(id).toPromise()
    } catch (e) {
      console.log(e)
    } finally {
      this.isLoading = false
    }
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
