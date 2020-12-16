import {Component, OnInit} from '@angular/core';
import {AlbumInterface, ArtistInterface} from "../../core/models/search.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ArtistService} from "../../core/services/artist.service";

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.page.html',
  styleUrls: ['./artist-details.page.scss'],
})
export class ArtistDetailsPage implements OnInit {

  public artist: ArtistInterface
  public genres = ''
  public albums: AlbumInterface[] = []
  public topTracks
  public isLoading = false
  private artistId

  constructor(private route: ActivatedRoute,
              private router: Router,
              private artistService: ArtistService) { }

  ngOnInit(): void {

  }

  ionViewWillEnter(): void {
    this.artistId = this.route.snapshot.queryParams['artistId']
    if (this.artistId) {
      this.getArtistDetails(this.artistId)
    }
  }

  private async getArtistDetails(id: string): Promise<void> {
    this.isLoading = true
    try {
      this.artist = await this.artistService.getOneArtist(id).toPromise()
      this.getGenres(this.artist)
      this.topTracks = await this.artistService.getArtistTopTracks(id).toPromise()
      this.albums = await this.artistService.getArtistAlbums(id).toPromise()
    } catch (e) {
      console.log(e)
    } finally {
      this.isLoading = false
    }
  }

  private getGenres(artist: ArtistInterface) {
    artist.genres.forEach(el => {
      if (this.genres.length > 0) {
        this.genres += ', ' + el
      } else {
        this.genres = el
      }
    })
  }
}
