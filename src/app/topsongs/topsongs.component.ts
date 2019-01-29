import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpServiceService } from '../http-service.service';
import { SongCat } from './SongCat';

@Component({
  selector: 'app-topsongs',
  templateUrl: './topsongs.component.html',
  styleUrls: ['./topsongs.component.css']
})
export class TopsongsComponent implements OnInit {

  constructor(private r: Router, private httpser: HttpServiceService) { }

  ngOnInit() {
  }

  temp:SongCat;

  Hin()
  {
    this.httpser.setCat("Hindi");
    this.r.navigate(['/home']);
  }

  Punj()
  {
    this.httpser.setCat("Punjabi");
    this.r.navigate(['/home']);
  }

  Inglis()
  {
    this.httpser.setCat("English");
    this.r.navigate(['/home']);
  }

  Trnd()
  {
    this.httpser.setCat("Trending");
    this.r.navigate(['/home']);
  }

  /**Hin()
  {
    this.temp = new SongCat("Hindi");
    this.httpser.setPostCat(this.temp);
    this.r.navigate(['/home']);
  }

  Punj()
  {
    this.temp = new SongCat("Punjabi");
    this.httpser.setPostCat(this.temp);
    this.r.navigate(['/home']);
  }

  Inglis()
  {
    this.temp = new SongCat("English");
    this.httpser.setPostCat(this.temp);
    this.r.navigate(['/home']);
  }

  Trnd()
  {
    this.temp = new SongCat("Trending");
    this.httpser.setPostCat(this.temp);
    this.r.navigate(['/home']);
  }*/

  Hindi()
  {
  	this.httpser.getHin();
  	this.r.navigate(['/home']);
  }

  Pun()
  {
  	this.httpser.getPun();
  	this.r.navigate(['/home']);
  }

  Inglees()
  {
  	this.httpser.getEng();
    this.r.navigate(['/home']);
  }

  Trend()
  {
    this.httpser.getTrend();
    this.r.navigate(['/home']);
  }

}