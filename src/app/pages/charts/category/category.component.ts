import { Component, OnInit } from '@angular/core';
import {PlaylistInterface} from "../../../core/models/search.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PlaylistService} from "../../../core/services/playlist.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  public categoryId: string
  public isLoading = false
  public playlists: PlaylistInterface[]

  constructor(private route: ActivatedRoute,
              private router: Router,
              private playlistService: PlaylistService) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.params['id']
    this.getCategoryItems(this.categoryId)
  }

  private async getCategoryItems(id) {
    this.isLoading = true
    try {
      this.playlists = await this.playlistService.getCategoriesPlaylists(id).toPromise()
      console.log(this.playlists)
    } catch (e) {
      console.log(e)
    } finally {
      this.isLoading = false
    }
  }

  public openPlaylist(playlist: PlaylistInterface) {
    this.router.navigate(['/playlist'], {queryParams: {'id': playlist.id}})
  }

}
