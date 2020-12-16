import { Injectable } from '@angular/core';
import {AlbumInterface, CategoryInterface, SearchResponse} from "../models/search.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BrowseService {

  constructor(private http: HttpClient) { }


  public getNewReleases(): Observable<AlbumInterface[]> {
    return this.http.get<SearchResponse>(`${environment.spotify_url}/browse/new-releases?limit=50&country=UA`)
        .pipe(map(res => res.albums.items))
  }

  public getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<SearchResponse>(`${environment.spotify_url}/browse/categories?country=UA`)
        .pipe(map(res => res.categories.items))
  }

}
