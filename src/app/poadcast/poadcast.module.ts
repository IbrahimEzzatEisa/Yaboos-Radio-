import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { PoadcastRoutingModule } from './poadcast-routing.module';
import { PoadcastComponent } from './poadcast.component';

@NgModule({
  imports: [
    CommonModule,
    PoadcastRoutingModule,
    FormsModule,
  ],
  exports: [
    PoadcastComponent
  ],
  declarations: [
    PoadcastComponent

  ],
  providers: [
  ],
})
export class PoadcastModule { }