import { Component, OnInit } from '@angular/core';
import { TrackService } from '../service/track.service';
import { Track } from '../Model/track';

@Component({
  selector: 'app-germany',
  templateUrl: './germany.component.html',
  styleUrls: ['./germany.component.css']
})
export class GermanyComponent implements OnInit {

  listHindiSongs: Track[]=[];
  hindilist: Track[]=[];
  constructor(private service:TrackService) { }

  ngOnInit(): void {
    this.getGermany();
  }

  getGermany()
  {
    this.service.getGermany().subscribe(
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
