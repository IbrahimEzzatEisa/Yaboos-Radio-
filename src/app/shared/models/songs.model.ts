export class Songs {
   id: number;
  title:  string  ;
  titleAr:  string  ;
  lowQuality:  string  ;
  highQuality:  string  ;
  albumId: number;
  isSelect: boolean;
  isPlay : boolean = true;
  constructor(){
    this.isSelect = false;
  }
}