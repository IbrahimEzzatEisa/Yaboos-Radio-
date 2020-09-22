import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poadcast',
  templateUrl: './poadcast.component.html',
  styleUrls: ['./poadcast.component.scss']
})
export class PoadcastComponent implements OnInit {
  aduio = new Audio();

  constructor() { }
  ngOnInit(): void {

 
  }
  ngOnDestroy() {
    // destroy audio here
    if(this.aduio) {
      this.aduio.play();
    }
  }

}
