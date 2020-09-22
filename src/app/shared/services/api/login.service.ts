import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';
import { AuthenticationService } from '../Auth';
import { SwalService } from '../swal.service';
import { error } from 'protractor';
import { ErrorInterceptor } from './interceptors';
import { Singup } from '../../models/singup.model';

// api login
const API_URL = END_POINTS.login;


export class UserLogin{

  //main object
  username: string; 
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService ,
    private swalService: SwalService) { }


    //login services
  login(user: UserLogin) {
    return this.http.post(API_URL, user).pipe(
      tap(
        res => {
          localStorage.setItem('token', String(res));

        }
      
      )
    );
  }


 


}
