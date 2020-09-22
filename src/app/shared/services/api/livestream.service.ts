import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';

// live stream api
const API_URL = END_POINTS.liveStream;

@Injectable({
  providedIn: 'root'
})
export class LivestreamService {

  constructor(private http: HttpClient) { }

  // get api live stream
  get() {
    return this.http.get(API_URL);
  }

}
