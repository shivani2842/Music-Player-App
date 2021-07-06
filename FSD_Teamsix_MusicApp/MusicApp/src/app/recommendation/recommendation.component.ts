import { Component, OnInit } from '@angular/core';
import { Favourite } from '../Model/favourite';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  favList:Favourite[]=[];
   p:any;
  //@Input() uname:string;
  

  getNotes(): Observable<any>  {
    return this.httpClient.get(`http://localhost:8003/recommend/getrecommendSong/msuyog`);
  }
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getNotes().subscribe(
      res=>
      {
        this.favList=res;
    }

    )}

  
}