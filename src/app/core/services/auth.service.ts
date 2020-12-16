import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private key = btoa(environment.spotify_creds)

  constructor(private http: HttpClient) { }

  public auth(): Observable<any> {
    const headers = {
      'authorization': `Basic ${this.key}`
    }

    let body = new HttpParams();
    body = body.set('grant_type', 'client_credentials');

    return this.http.post(`https://accounts.spotify.com/api/token`, body, {headers: headers})
  }
}
