import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Storage} from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private headers

  constructor(private http: HttpClient,
              private storage: Storage) { }

  public search(query: string, types): Observable<any> {
    this.storage.get('access_token').then(res => {
      this.headers = new HttpHeaders({'authorization': `Bearer ${res}`})
    })
    return this.http.get(`${environment.spotify_url}/search?q=${query}&type=${types}`, {headers: this.headers})
  }

}
