import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule,
    FormsModule,
  ],
  exports: [
    LibraryComponent
  ],
  declarations: [
    LibraryComponent


  ],
  providers: [
  ],
})
export class LibraryModule { }