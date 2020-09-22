import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataWithRanking, Artist } from '../../models';
import { END_POINTS } from './globals/global-config';

//api artist search
const API_URL = END_POINTS.artistSearch;

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }


 
  //get  Artist search
getArtistSearch(offset: string , limit: string , filter: string  ): Observable<DataWithRanking<Artist>> {
let params = new HttpParams();
params = params.append('offset' , offset);
params = params.append('limit' , limit);
params = params.append('filter' , filter);
 return this.http.get<DataWithRanking<Artist>>(API_URL  ,{params:params}  ) }
}
  
