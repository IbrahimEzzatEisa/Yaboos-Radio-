import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";



import { NgxSpinnerModule } from 'ngx-spinner';
import { ShellModule } from './shell/shell.module';
import { SharedModule } from './shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';
import { NgwWowModule } from 'ngx-wow';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ErrorInterceptor, JwtInterceptor } from './shared/services/api/interceptors';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgxSpinnerModule,
   ShellModule,
   SharedModule,
   NgwWowModule,
   InfiniteScrollModule


  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'} ,
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
