import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArtistInterface} from "../models/search.interface";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  public getOneArtist(id: string): Observable<ArtistInterface> {
    return this.http.get<ArtistInterface>(`${environment.spotify_url}/artists/${id}`)
  }
  public getArtistTopTracks(id: string): Observable<any> {
    return this.http.get<any>(`${environment.spotify_url}/artists/${id}/top-tracks?country=UA`)
        .pipe(map(res => res.tracks))
  }
  public getArtistAlbums(id: string): Observable<any> {
    return this.http.get<any>(`${environment.spotify_url}/artists/${id}/albums`)
        .pipe(map(res => res.items))
  }
}
