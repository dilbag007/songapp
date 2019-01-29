import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, DoCheck, OnDestroy {

  constructor(private r:Router, private httpser: HttpServiceService) { }

  flayg;

  ngOnInit(){
  } 
  ngDoCheck(){
  	this.flayg = this.httpser.getTkn();
  }

  la;
  lb:Subscription;

  logout()
  {
    this.la = this.httpser.lout();
    this.lb = this.la.subscribe( (data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    },
    () => {
      this.r.navigate(['/login']);
    });
  }

  ngOnDestroy()
  {
  	if(this.lb !== undefined)
    {
      this.lb.unsubscribe();
    }
  }

}
