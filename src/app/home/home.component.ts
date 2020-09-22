import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LivestreamService } from '../shared/services/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  // disable image gif
  DisabledMusic: boolean = true;
  EnabledMusic: boolean = false;

  // img high and low
  lowQ: boolean = true;
  highQ: boolean = false;

  // aduio 
  aduio: any;

  // aduio backup
  aduioBackup: any;

  // permission localstorage
  currentTime: string;

  // statci permission
  permission = '0';

  constructor(
    // spinner service
    private spinner: NgxSpinnerService,
    // live stream services
    private liveStreamServices: LivestreamService,
  ) { }



  ngOnInit(): void {
    localStorage.getItem('time')
    
    
    // // init aduio and backup
    this.aduio = new Audio();
    // this.aduioBackup = new Audio()

    // live stream
    this.liveStream();

    // get status
    this.getStatus();

    
  }
  Audioplayed(){
    this.close();
    alert('hi')
  }

  //live stream
  liveStream() {
    // get live stream api
    this.liveStreamServices.get().subscribe
      (
        res => {
          this.spinner.show();

          // save in local storage
          localStorage.setItem('high', JSON.stringify((Object.values(res)[1])))
          localStorage.setItem('Low', JSON.stringify((Object.values(res)[0])))
          let StatusQulity = (localStorage.getItem('Quality'));

          //store high and low local storage
          let dataStatus = JSON.parse(localStorage.getItem('high'));
          let dataStatusLow = JSON.parse(localStorage.getItem('Low'));
          this.spinner.hide();

          // switch high or low 
          if (StatusQulity == 'LQ') {

            // low quality
            this.aduio = new Audio(dataStatusLow);

          } else {
            // high quality
            this.aduio = new Audio(dataStatus);
          }
        })
  }


  //play audio
  Open() {
    this.DisabledMusic = false;
    this.EnabledMusic = true;
    this.aduio.play();
    localStorage.setItem('time', '1');
    this.aduio.played
    localStorage.setItem('nusic','1')


  }


  // close audio
  close() {
    this.DisabledMusic = true;
    this.EnabledMusic = false;
    this.aduio.pause();
    localStorage.setItem('time', '0');
    this.aduio.paused;

  }



  //get high
  gethight() {
    localStorage.setItem('Quality', 'HQ');
    this.DisabledMusic = true;
    this.EnabledMusic = false;
    this.lowQ = true;
    this.highQ = false;
    this.aduio.pause()
    this.liveStream();

  }

  //get low 
  getLow() {
    localStorage.setItem('Quality', 'LQ');
    this.DisabledMusic = true;
    this.EnabledMusic = false;
    this.lowQ = false;
    this.highQ = true;
    this.aduio.pause();
    this.liveStream();

  }



  //get permission with routing
  getStatus() {
    this.currentTime = localStorage.getItem('time');
    if (this.currentTime === this.permission) {
      this.DisabledMusic = true;
      this.EnabledMusic = false;

    } else {
      this.DisabledMusic = false;
      this.EnabledMusic = true;

    }

  }

  // all data fetched from api 
  //  console.log([Object.keys(res)[0]]) // name low
  //  console.log([Object.values(res)[0]])//value low
  //  console.log([Object.keys(res)[1]]) // name height
  //  console.log([Object.values(res)[1]]) // value height

  ngDoCheck()	{
    localStorage.getItem('nusic') 
      if(localStorage.getItem('nusic')  == '0'){
        this.close();
    }
   
  }

}
