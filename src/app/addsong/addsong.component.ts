import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { Song } from '../listc/Song';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.css']
})

export class AddsongComponent implements OnInit {

  constructor(private r:Router, private httpser: HttpServiceService) { }

  takenToken:string;

  ngOnInit() {
    this.takenToken = this.httpser.getTkn();
    if(!this.takenToken)
    {
      this.r.navigate(['/login']);
    }
  }

  a:Song;
  b;
  c:Subscription;

  crAndAdd( x:string, y:string, z:string, ab:string )
  {
    this.a = new Song(x,y,z,ab);
    this.b = this.httpser.crSong(this.a);
    this.c = this.b.subscribe((data) => {
    console.log(data); 
    },
    (err) => {
    console.log(err);
    },
    () => {
      console.log("Completed");
    });
    this.httpser.getTrend();
  	this.r.navigate(['/home']);
  }

}