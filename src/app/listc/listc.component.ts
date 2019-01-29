import { Component, OnInit, OnDestroy } from '@angular/core';
import { Song } from './Song';
import { Subscription } from 'rxjs';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listc',
  templateUrl: './listc.component.html',
  styleUrls: ['./listc.component.css']
})

export class ListcComponent implements OnInit, OnDestroy {

	constructor(private httpser: HttpServiceService, private r: Router){}

	songs:Song[];
	a;
	b:Subscription;

	ngOnInit(){
		this.a = this.httpser.d;
		this.b = this.a.subscribe( (data) => {
			this.songs = data;
		},
		(err) => {
			console.log(err);
		}, 
		() => {
			console.log("completed");
		});
	}

	ngOnDestroy(){
		this.b.unsubscribe();
	}
}