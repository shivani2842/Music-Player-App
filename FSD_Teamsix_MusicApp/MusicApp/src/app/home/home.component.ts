import { Component, OnInit } from '@angular/core';

import { TrackService } from '../service/track.service';
import { Trending } from '../Model/trending';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 p:any;
  listHindiSongs: Trending[]=[];
  hindilist: Trending[]=[];
  constructor(private service:TrackService) { }

  ngOnInit(): void {
    this.getTrending();
  }

  getTrending()
  {
    this.service.getTrending().subscribe(
      (list:any)=>{
        this.listHindiSongs=list.tracks.track;
        this.hindilist=this.listHindiSongs.map((ele:any)=>{
          let obj={
           
          albumName:ele.name,
           artist:ele.artist.name,
           
           url:ele.url,
          }
          return obj;
        });
        console.log(this.hindilist);
      }
    )
  }
}