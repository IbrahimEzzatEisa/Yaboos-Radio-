import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoadcastComponent } from './poadcast.component';


const routes: Routes = [
  { path: '', component: PoadcastComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoadcastRoutingModule { }