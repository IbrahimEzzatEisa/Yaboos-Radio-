import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule ,
    FormsModule,
  ],
  exports: [
    AboutComponent
  ],
  declarations: [
    AboutComponent


  ],
  providers: [
  ],
})
export class AboutModule { }