import { Component, OnInit, Output, EventEmitter, HostListener, Input } from "@angular/core";
import { NgxSpinnerService } from 'ngx-spinner';
import { SongsService } from 'src/app/shared/services/api/songs.service';
import { Songs, Artist, Album } from 'src/app/shared/models';
import { ArtistService } from 'src/app/shared/services/api/artist.service';
import { AlbumService } from 'src/app/shared/services/api';
import { FavouritesService } from 'src/app/shared/services/api/favourites.service';
import { SwalService } from 'src/app/shared/services';
import { AboutComponent } from 'src/app/about/about.component';
import { Console } from 'console';


@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ['./navbar.component.scss']

})


export class NavbarComponent implements OnInit {


  //show about
  showAbout: boolean = false;


  // login form login 
   @Output() formlogin: EventEmitter<any> = new EventEmitter();

   // open form sing
   @Output() formSing: EventEmitter<any> = new EventEmitter();


   @Output() errorShowM: EventEmitter<any> = new EventEmitter();

   @Output() Audioplayed: EventEmitter<any> = new EventEmitter();


   

   // permission login 
   @Input() menu;

   @Input() menuFavorite;
  // default media player 
  isPlay: boolean = true;

  // popup message 
  errorShow: boolean = false;

  // default menu favorite   
  // menuFavorite: boolean = false;

  // open navbar mobile
  isCollapsed = true;

  // media play arr
  songsName: string;
  ArtistName: string;
  ArtistImg: string;
  songsItem: string;
  musicplay: boolean = true
  musicPause: boolean = false;


  isPlaying: boolean = false;


  // main songs object
  songs: Songs;

  //songs array 
  song: Songs[] = [];


  // fav songs array
  songsFav: Songs[] = [];


  // artist array 
  artist: Artist[] = [];
  artists: Artist;


  // album array
  album: Album[] = [];
  albums: Album;


  // search iunput 
  search: string;

  //audio file
  audio = new Audio()

  // default menu songs
  // menu: boolean = false;

  // switch plau and pause icons
  playIcons: boolean = true;
  pauseIcon: boolean = false;


  // index of row 
  index: number

  //permission
  permission: string;

  // media player fav
  isPlayingfav: boolean = false;

  // fav name song 
  SongsNameFav: string;

  // inject services

// limit 
  limit = 0;
  count = 10
  // count fav
  countfav = 10;

  //count songfs of album;
  countِalbum = 10;
  // permission count fav
  counFav: boolean = false;

  // unlike
  unlike: boolean = true;

  // liked
  liked: boolean = false

  menuSongAblum: boolean = false

  //back
  albumsongsShow: boolean = true;


  // abums of artist

  menuSongAblumArtist: boolean = false

  // songs open condition 
  sonsOpened:boolean = true;


  constructor(
    private spinner: NgxSpinnerService,
    private SongsServices: SongsService,
    private artistServices: ArtistService,
    private AlbumServices: AlbumService,
    private favouritesService: FavouritesService,
    private swalService: SwalService

  ) {


  }
  
  
  
  ngOnInit() {


    // init audio
    this.audio = new Audio()

    // init obj songs
    this.songs = new Songs();

    this.albums = new Album();

    // spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000)

    this.getArtistSearch();
    this.getsongsFav();

    this.artists = new Artist();

  }


  //open anout
  openAbout(){
    this.showAbout = true;
  }

  openhome(){
    this.showAbout = false;

  }

  //getAlbumSearch
  getAlbumSearch() {
    this.AlbumServices.getAlbumSearch('0', '8', this.search).subscribe(
      res => {
        this.album = res.result;
      }
    )
  }

  //getArtistSearch
  getArtistSearch() {
    this.artistServices.getArtistSearch('0', '10', this.search).subscribe(
      res => {
        this.artist = res.result;
      }
    )

  }
  // getsongsSearch
  getSongsSearch() {
    this.SongsServices.getSongsSearch('0', String(this.count), this.search).subscribe(
      res => {
        this.song = res.result  
      
       }

    )
// seach artist
    this.artistServices.getArtistSearch('0',  String(this.count), this.search).subscribe(
      res => {
        this.artist = res.result;
        this.ArtistImg = this.artist[0].image;


      }
    )
// seach album
    this.AlbumServices.getAlbumSearch('0',  String(this.count), this.search).subscribe(
      res => {
        this.album = res.result;
        this.ArtistName = this.artist[0].nameAr; }  )
  }


  // post favo
  like(data: Songs , index: number) {
    this.songs.id = data.id
    this.favouritesService.create(this.songs.id).subscribe(
      res=>{
        this.songs.isPlay = data.isPlay;
        console.log( data.id)
        data.isPlay =true;
        this.song[index].isPlay = data.isPlay   ;
        this.getsongsFav();
         }
     )
  }

  //get fav
  getsongsFav() {
    this.favouritesService.getfavourites('0', String(this.countfav)).subscribe(
      res => {
        this.songsFav = res.result;
        if (this.songsFav.length <= 10){
          this.counFav = false;

        } else if(this.songsFav.length > 10){
          this.counFav = true;

        }

      }
    )
  }
  
  //close menu album
  closeMenualbum(){
      this.menu = true;
    this.menuSongAblum = false;
    this.sonsOpened = true;
  }

  getAblum(item: Album){
     this.menu = false;
    this.menuSongAblum = true;
    this.menuSongAblumArtist = false;
    
    this.albums.id = item.id;
    
    this.SongsServices.getSongsAlbum('0',  String(this.count), String(this.albums.id)).subscribe(
      res=>{
        this.song = res.result
      }
    )
  }
  //open menu songs 
  openMenu() {
    this.menu = true;
    this.menuFavorite = false

  }
  // close menu songs 
  closeMenu() {
    this.menu = false;
    this.search = '';
    this.getSongsSearch();


  }
  //play audio
  Open(data: Songs, index: number) {
    // get permission 
    this.permission = localStorage.getItem('token')
    if (this.permission == null) {
      this.errorShow = true
    } else {
      this.songs.id = data.id
      this.isPlaying = true;
      this.isPlay = false;
      this.songsName = this.song[index].titleAr;
      this.musicplay = false
      this.musicPause = true;
      this.menuSongAblum = false;
      this.SongsServices.getSongsplay(String(this.songs.id)).subscribe()
      // link songs 
      let urlSongs = 'http://188.225.184.108:9091/api/songs/playsong/'
      this.audio = new Audio(urlSongs + this.songs.id);
      this.audio.play();
      this.menu = false;
      this.Audioplayed.emit();
      localStorage.setItem('nusic','0')
    }
  }

  //play audio fav
  Play(datas: Songs, index: number) {
    // get permission 
    this.permission = localStorage.getItem('token')
    if (this.permission == null) {
      this.errorShow = true
    } else {
      this.songs.id = datas.id;
      this.songs.titleAr = datas.titleAr;
      this.SongsNameFav = this.songs.titleAr;
      this.isPlayingfav = true;
      this.isPlay = false;
      this.musicplay = false
      this.musicPause = true;
      this.menuSongAblum = false;
      this.SongsServices.getSongsplay(String(this.songs.id)).subscribe()

      // link songs 
      let urlSongs = 'http://188.225.184.108:9091/api/songs/playsong/'
      this.audio = new Audio(urlSongs + datas.id);
      this.audio.play();
      this.menuFavorite = false;
      this.Audioplayed.emit();
      localStorage.setItem('nusic','0')


    }
  }

// close media fav
 closeMediafav() {
  this.menuFavorite = true;
  this.isPlayingfav = false
  this.menu = false;
  this.audio.pause();
  localStorage.setItem('nusic','1')

}


  // this.audio.play();
  closeMedia() {
    this.isPlaying = false;
    this.songs.isPlay = false;
    this.audio.pause();
    this.isPlay = false
    this.audio.currentTime = 0;
    this.menu = true;
    this.menuFavorite = false;
    localStorage.setItem('nusic','1')


  }
  //return play
  returnPlay() {
    this.musicplay = false
    this.musicPause = true;
    this.audio.play();
    localStorage.setItem('nusic','0')


  }

  //pause
  pause(data: Songs, index: number) {
    this.musicplay = true
    this.musicPause = false;
    if (this.audio.played) {
      // this.song[index].isPlay = false;
      this.isPlay = false
      this.audio.pause();
    localStorage.setItem('nusic','1')


    }
  }

  // open men favorite and close songs menu if is open
  openMenuFavorite() {
    this.menu = false;
    // get permission
    this.permission = localStorage.getItem('token')
    if (this.permission == null) {
      this.menu = false;
      this.errorShow = true
    } else {
      this.menuFavorite = true;
      this.menu = false;
      this.getsongsFav();
    }
  }

  // close menu favorite
  closeMenuFavorite() {
    this.menuFavorite = false;
  }
  // close message modal 
  closeMessage() {
    this.errorShow = false;
    this.errorShowM.emit()
  }
  loginForm(){
   this.formlogin.emit();
  this.errorShow = false;

  }
  SingupForm(){
    this.formSing.emit();
  this.errorShow = false;

  }

  // load more
  loadMore(){
    this.count  = this.count +10
    this.getSongsSearch();
  }

  loadMoreFav(){
    this.countfav  = this.countfav + 10
    this.getsongsFav();
  }

getArtist(prop: Artist ){
this.artists.id = prop.id
this.menuSongAblumArtist = true;
this.menu = false;
this.menuFavorite = false
this.AlbumServices.getAlbumOfArtist('0' , String(this.countِalbum ) , String(this.artists.id)).subscribe(
  res=>{
    this.album = res.result;
  }
)
}
//
loadMoreAlbumofArtist(){
  this.countِalbum  = this.countِalbum + 10
  this.getsongsFav();
}
closeMenuaAlbumArtist(){
  this.menu = true;
  this.menuSongAblumArtist = false;
}

}

