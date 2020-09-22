import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";
import { NgwWowService } from 'ngx-wow';
import { UserLogin, SingupService, LoginService } from './shared/services/api';
import { Singup } from './shared/models/singup.model';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  aduio = new Audio();

  // closeLogin
  OpenLogin:boolean = false;

  // close form sing
  OpenSingup: boolean = false;


  // popup message 
  errorShow: boolean = false;

  // login and logout permission 
  loginPermission: boolean = true;
  logoutPermission: boolean = false;

  // main object od users
  user: UserLogin = new UserLogin();

// main object singup
 singup: Singup = new Singup();

  // when forget me


   // main attribute of user
   userId;
   username;
   userPassword;
   redirectUrl: string;
   redirectMessage: string;
   busyLoggingIn: boolean = false;
   isRememberMeChecked: boolean = false;
   valideUser;
   busy;
   firstRequestDone;
 
 
   // permission
   permission: string;
 
   //Error message bind
 
   ErrorMessage: string;
 
   menu:boolean = false
   menuFavorite:boolean = false;

   // messgae done
   Message: string;

   // done icon
   done: boolean = false;

   // inject services
  constructor(
    private renderer: Renderer2,
    public location: Location,
    private wowService: NgwWowService,
    private loginService: LoginService,
    private spinner: NgxSpinnerService,
    private singupServices: SingupService,
    @Inject(DOCUMENT) document
  ) {

    this.wowService.init();


  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-danger");
      }
    } else {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-danger");
      }
    }
  }
  ngOnInit() {

    this.onWindowScroll(event);
    //store permission and Quality
    localStorage.setItem('Quality', 'HQ');
    localStorage.setItem('time', '0');

        //init object
        this.singup = new Singup();
        // get permission
        this.getpermission();

  }

  OpenloginFoem(){
    this.OpenLogin = true
    this.loginPermission = true;
    this.logoutPermission = false;
    this.menu = false
    this.menuFavorite = false;
    this.OpenSingup = false;  
    this.errorShow = false;
    this.menu = false;
    this.close();
  }
    // close login 

  closeLogin(){
    this.OpenLogin = false
  }

  openSingForm(){
    this.OpenSingup = true
    this.errorShow = false;
    this.menu = false
    this.menuFavorite = false;

  }


   // login 
    login() {
      this.busyLoggingIn = true;
      this.spinner.show();
      this.loginService.login(this.user).subscribe(
        res => {
          this.spinner.hide();
          this.OpenLogin = false
          this.logoutPermission = true;
          this.loginPermission = false;
          this.errorShow = false;
          this.done = true;
          this.Message = " تم التسجيل بنجاح  "

      // close message 
       setTimeout(() => {
        this.done = false;
          }, 7000)
          this.reset();
  
        },
        // errorr login 
        err => {
          if (err.status === 400) {
            // Filed is required
            this.spinner.hide();
            this.errorShow = true;
            this.done = false;
            this.ErrorMessage = " أدخل البيانات المطلوبة "
            setTimeout(() => {
              this.errorShow = false;

                }, 7000)
          } else if (err.status === 401) { // NotAuthorized error
            this.spinner.hide();
            this.errorShow = true;
            this.done = false;
            this.ErrorMessage = " أسم المستخدم أو كلمة المرور غير صحيحة ";
             // close message 
              setTimeout(() => {
                this.errorShow = false;

                  }, 7000)
            
          }
        });
    }
   
 
     // get permission
       getpermission() {
      this.permission = localStorage.getItem('token')
      if (this.permission == null) {
      this.loginPermission = true;
      this.logoutPermission = false
      } else {
      this.loginPermission = false;
      this.logoutPermission = true
    }
  }


    // logout
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('menuclose')
  
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
    // create new user
    singin() {
      // validation email formate
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(this.singup.username) == false) 
      {
          this.errorShow = true;
          this.ErrorMessage = "البريد الإلكتروني مطلوب"
          return ;
      }
     // validation password and confirm password
      if(this.singup.confirmpass !== this.singup.password) {
        this.errorShow = true;
        this.ErrorMessage = " كلمة المرور  غير متطابقة "
        return;
      }
      // validation password and confirm password length
      if((this.singup.confirmpass.length && this.singup.password.length) == 6 ) {
        this.errorShow = true;
        this.ErrorMessage = "..   يجب أدخال علي الأقل ٦ حروف  ،، أرقام ،، رموز "
        return;
      }
  
      this.singupServices.singup(this.singup).subscribe(
        res=>{
          this.errorShow = false;
          this.done = true;
          this.Message = " تم التسجيل بنجاح  "

      // close message 
       setTimeout(() => {
        this.done = false;

          }, 5000)
          this.closeSingup();
        }
      )
    }
  
    // close singup
    closeSingup(){
      this.OpenSingup = false;
      this.resetsinginput()
  
    }
  
    // reset singup 
    resetsinginput() {
      this.singup.username = '';
      this.singup.password = '';
      this.singup.confirmpass = '';
      this.singup.name = '';
    }
    close(){
      this.errorShow = false;
    }
    // close message done
    closeMessageDone(){
      this.done = false
    }

}
