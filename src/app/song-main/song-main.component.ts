import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-main',
  templateUrl: './song-main.component.html',
  styleUrls: ['./song-main.component.css']
})
export class SongMainComponent implements OnInit, OnDestroy {

  constructor(private httpser: HttpServiceService, private r: Router) { }

  takenToken;

  ngOnInit() {
  	this.takenToken = this.httpser.getTkn();
  	if(!this.takenToken)
  	{
  		this.r.navigate(['/login']);
  	}
  }

  ngOnDestroy(){}

}
