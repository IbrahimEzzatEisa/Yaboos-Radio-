import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService, UserLogin, SingupService } from 'src/app/shared/services/api';
import { SwalService } from 'src/app/shared/services';
import { Console } from 'console';
import { ErrorInterceptor } from 'src/app/shared/services/api/interceptors';
import { Singup } from 'src/app/shared/models/singup.model';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

   // permission login 
   @Input() loginPermission;

   @Input() logoutPermission;

  // login form login 
  @Output() formlogin: EventEmitter<any> = new EventEmitter();

  // open form sing
  @Output() formSing: EventEmitter<any> = new EventEmitter();
  // login condition



  // login condition


  // login condition
  
  OpenLogin: boolean = false;

  // popup message 
  errorShow: boolean = false;

  // login and logout permission 
  // loginPermission: boolean = true;
  // logoutPermission: boolean = false;

  // main object od users
  user: UserLogin = new UserLogin();

// main object singup
 singup: Singup = new Singup();

// singup permission 
  OpenSingup:boolean = false;
 


  // permission
  permission: string;


  //Error message bind
  ErrorMessage: string;


  // open setting form
  OpenSetting: boolean = false;
  // inject services
  constructor(private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private swalService: SwalService,
    private spinner: NgxSpinnerService,
    private singupServices: SingupService
  ) { }

  ngOnInit(): void {

   
  }

    //open login card
    OpenLoginPage() {
      this.OpenSingup = false;
    this.formlogin.emit();
 
  }



  // close login card
  closeLogin() {
  this.OpenLogin = false
  }

 

  // logout
  logout() {
    localStorage.removeItem('token');
    this.loginPermission = true;
    this.logoutPermission = false
  }
  //close message 
  closeMessage() {
    this.errorShow = false;
  }

  //resetfiled
  reset() {
    this.user.username = '';
    this.user.password = '';
  }


  //singup
  SingUp(){
    this.OpenSingup = true;
    this.OpenLogin = false;
    this.formSing.emit();
    this.closeLogin();

  }


  // close singup
  closeSingup(){
    this.OpenSingup = false;
  }

// open setting form
Setting(){
  this.OpenSetting = true;
}
// close setting form
closeSettingForm(){
  this.OpenSetting = false;
}

}
