import { Component, OnInit } from '@angular/core';
import { TrackService } from '../service/track.service';
import { Track } from '../Model/track';

@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
  styleUrls: ['./spain.component.css']
})
export class SpainComponent implements OnInit {

  listHindiSongs: Track[]=[];
  hindilist: Track[]=[];
  constructor(private service:TrackService) { }

  ngOnInit(): void {
    this.getSpain();
  }

  getSpain()
  {
    this.service.getSpain().subscribe(
      (list:any)=>{
        this.listHindiSongs=list.tracks.track;
        this.hindilist=this.listHindiSongs.map((ele:any)=>{
          let obj={
          name:ele.name,
          artistName:ele.artist.name,
          url:ele.url
          }
          return obj;
        });
        console.log(this.hindilist);
      }
    )
  }
}
