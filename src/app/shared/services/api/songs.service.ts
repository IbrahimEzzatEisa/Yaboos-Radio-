import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Songs, DataWithRanking } from '../../models';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';

//api url
const API_URL = END_POINTS.songSearch;
const API_URL_Ftp = END_POINTS.songplay;
const ApI_Songs = END_POINTS.songofAlbum;




@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

  //get song search
getSongsSearch(offset: string , limit: string , filter: string  ): Observable<DataWithRanking<Songs>> {
let params = new HttpParams();
params = params.append('offset' , offset);
params = params.append('limit' , limit);
params = params.append('filter' , filter);
 return this.http.get<DataWithRanking<Songs>>(API_URL  ,{params:params}  ) }



   //get song search
getSongsAlbum(offset: string , limit: string , album: string  ): Observable<DataWithRanking<Songs>> {
  let params = new HttpParams();
  params = params.append('offset' , offset);
  params = params.append('limit' , limit);
  params = params.append('album' , album);
   return this.http.get<DataWithRanking<Songs>>(ApI_Songs  ,{params:params}  ) }

//getpaly songs
 getSongsplay(id: string ): Observable<DataWithRanking<Songs>> {
   return this.http.get<DataWithRanking<Songs>>(API_URL_Ftp + `/${id}`  ) }
  
 
}
  

