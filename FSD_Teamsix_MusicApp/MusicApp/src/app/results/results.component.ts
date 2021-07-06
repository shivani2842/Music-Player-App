import { Component, Input, OnInit, OnChanges, SimpleChange, Output } from '@angular/core';
import { MusicService } from '../service/music.service';
import { Album } from '../Model/album';
import { Tracks } from '../Model/tracks';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit,OnChanges {

  @Input() message:string;
  @Input() searchtype:string;
  isalbum:boolean=false;
  isTrack:boolean=false;
   p:any;
   cname:string="fa fa-heart-o";
   
  albumlist:Array<Album>=[];
  tracklist:Array<Tracks>=[];

  a:Album;

  albumRecs:Album[];

  status:string;

  loggedIn:boolean;

  constructor(
    private musicservice: MusicService, private httpClient: HttpClient
  
   
  ) {
    
  }

  ngOnChanges(): void {
    if (this.message !== undefined && this.message !== ""){
     
      if(this.searchtype==="artist"){
        this.isTrack=false;
        this.isalbum=true;
        this.albumlist=this.musicservice.getAlbumByArtist(this.message);
      }else if(this.searchtype==="album"){
        this.isTrack=false;
        this.isalbum=true;
        this.albumlist=this.musicservice.getAlbumByAlbumName(this.message);

      }

    }
  }

  ngOnInit() {
    this.musicservice.getStatus().subscribe(value => {
      this.status = value;
    });
    
    
    
  }

  
  showtracks(album:Album){
    this.a = album;

    this.tracklist=this.musicservice.getTracksByArtistAndAlbum(album.albumName,album.artist);
    this.isalbum=false;
    this.isTrack=true;
  }

  goback(){
    this.status = 'complete';
    this.a = null

    this.isTrack=false;
    this.isalbum=true;
  }

 

  // add(note)
  //   {
  //     let objfev={
  //       username:this._interactionService.getMessage(),
  //       songname:note.trackName,
  //       artist:note.artist,
  //       url:note.url,
        
        
  
  //     }
  //     console.log(note);
  //     console.log(objfev);
  // this.httpClient.post('http://localhost:8001/favourite/saveSong',objfev).toPromise().then((data:any)=>{
  //   console.log(data);
  // });
  
  //   }
//////////////////////////////////////////
favToggleFunction(num:any,note){
  // console.log("func is called & num is "+ note);
  var elem = document.getElementById(String(num));
  // console.log("element is  "+elem["classList"].value);
  // console.log("type is  "+ elem["classList"].value);
  if(elem["classList"].value==="fa fa-heart-o")
  {
          elem["classList"].value="fa fa-heart";
          let objfev={
           // username:this._interactionService.getMessage(),
           username:sessionStorage.getItem('loggedUser'),
            songname:note.trackName,
            artist:note.artist,
            url:note.url,
            }
          // console.log(note);
          // console.log(objfev);
      this.httpClient.post('http://localhost:8001/favourite/saveSong',objfev).toPromise().then((data:any)=>{
        console.log(data);
      });
  }
  else
  {
            elem["classList"].value="fa fa-heart-o";
            let objfev={
              username:sessionStorage.getItem('loggedUser'),
              songname:note.trackName,
              artist:note.artist,
              url:note.url,
            }
            // console.log(note);
            // console.log(objfev);
            this.httpClient.post('http://localhost:8001/favourite/removeSong',objfev).toPromise().then((data:any)=>{
          console.log(data);
        });
        location.reload()
  }
}


////////////////////////////////////////////
    

    recommend(note)
    {
      let objfev={
        username:'msuyog',
        songname:note.trackName,
        artist:note.artist,
        url:note.url,
        
        
  
      }
      // console.log(note);
      // console.log(objfev);
  this.httpClient.post('http://localhost:8003/recommend/recommendSong',objfev).toPromise().then((data:any)=>{
      console.log(data);
  });
  
    }

  albumChecker(album:Album){
    for (let a of this.albumRecs) {
      if (album.albumName === a.albumName && album.artist === a.artist && album.imgUrl === a.imgUrl) {
        return a.id;
      }
    }
    return 0;
  }
}