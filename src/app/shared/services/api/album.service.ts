import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  DataWithRanking, Album } from '../../models';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';

//api album
const API_URL = END_POINTS.albumSearch;


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }


 // get Album search
 getAlbumSearch(offset: string , limit: string , filter: string  ): Observable<DataWithRanking<Album>> {
 let params = new HttpParams();
 params = params.append('offset' , offset);
 params = params.append('limit' , limit);
 params = params.append('filter' , filter);
 return this.http.get<DataWithRanking<Album>>(API_URL  ,{params:params}  ) }

 // get Album search
  getAlbumOfArtist(offset: string , limit: string , artist: string  ): Observable<DataWithRanking<Album>> {
  let params = new HttpParams();
  params = params.append('offset' , offset);
  params = params.append('limit' , limit);
  params = params.append('filter' , artist);
  return this.http.get<DataWithRanking<Album>>(API_URL  ,{params:params}  ) }

}
