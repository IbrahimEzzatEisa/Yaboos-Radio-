import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Singup } from '../../models/singup.model';
import { END_POINTS } from './globals/global-config';


//sing up
const API_URL_Sing = END_POINTS.singup;
@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(private http: HttpClient) { }


     //singup  
     singup( model: Singup  ): Observable<Singup> {
      return this.http.post<Singup>(API_URL_Sing  ,model  )
     }
     
}
