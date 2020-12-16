import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {PlaylistInterface, SearchResponse} from "../models/search.interface";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  public getCategoriesPlaylists(id): Observable<PlaylistInterface[]> {
    return this.http.get<SearchResponse>(`${environment.spotify_url}/browse/categories/${id}/playlists`)
        .pipe(map(res => res.playlists.items))
  }

  public getPlaylistTracks(id): Observable<any> {
    return this.http.get(`${environment.spotify_url}/playlists/${id}`)
  }
}
