import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { PlaylistComponent } from './playlist.component';
import { PlaylistRoutingModule } from './playlist-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    FormsModule,
  ],
  exports: [
    PlaylistComponent
    
  ],
  declarations: [
    PlaylistComponent

  ],
  providers: [
  ],
})
export class PlaylistModule { }