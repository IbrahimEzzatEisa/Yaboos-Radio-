import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

// routing
const routes: Routes = [{
  path: '',
  redirectTo: 'yaboos',
  pathMatch: 'full'
},

{
  path: 'yaboos',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
} ,
// {
//   path: 'library',
//   loadChildren: () => import('./library/library.module').then(m => m.LibraryModule),
// },
// {
//   path: 'poadcast',
//   loadChildren: () => import('./poadcast/poadcast.module').then(m => m.PoadcastModule),
// },
// {
//   path: 'playlist',
//   loadChildren: () => import('./playlist/playlist.module').then(m => m.PlaylistModule),
// },
 {
  path: 'about',
  loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
}

];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes  )
  ],
  exports: []
})
export class AppRoutingModule {}
