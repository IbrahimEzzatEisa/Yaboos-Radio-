import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Songs, DataWithRanking } from '../../models';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';

//api url
const API_URL = END_POINTS.favourites;

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private http: HttpClient) { }

  //get favourites 
getfavourites(offset: string , limit: string  ): Observable<DataWithRanking<Songs>> {
let params = new HttpParams();
params = params.append('offset' , offset);
params = params.append('limit' , limit);
 return this.http.get<DataWithRanking<Songs>>(API_URL  ,{params:params}  ) }


 // post sing id
create( songid){
  const body =  JSON.stringify({
    songId: songid
  })  
  return this.http.post(API_URL,body );
}

}