import { Component, OnInit } from '@angular/core';
import {AlbumInterface, CategoryInterface} from "../../core/models/search.interface";
import {Router} from "@angular/router";
import {BrowseService} from "../../core/services/browse.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements OnInit {

  public albums: AlbumInterface[]
  public categories: CategoryInterface[]

  constructor(private browseService: BrowseService,
              private router: Router) { }

  ngOnInit() {
    this.getNewReleases()
  }

  public async getNewReleases() {
    try {
      this.albums = await this.browseService.getNewReleases().toPromise()
      this.categories = await this.browseService.getCategories().toPromise()
    } catch (e) {
      console.log(e)
    }
  }

  openAlbum(album: AlbumInterface) {
    this.router.navigate(['/album'], {queryParams: {'albumId': album.id}})
  }

  openCategory(category: CategoryInterface) {
    this.router.navigate([`charts/category/${category.id}`])
  }
}
