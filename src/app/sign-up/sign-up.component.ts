import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './User';
import { Subscription } from 'rxjs';
import { HttpServiceService } from '../http-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {

  constructor(private r: Router, private httpser: HttpServiceService, private http:HttpClient) { }

  ngOnInit() {
  }

  x:User;
  a:Subscription;
  b;

  submit(a:string, b:string, c:string, d:string, e:string)
  {
    this.x = new User(a,b,c,d,e);

    this.b = this.httpser.crUser(this.x);
    this.a = this.b.subscribe( (data) => {
    console.log(data); 
    },
    (err) => {
    console.log(err);
    },
    () => {
      console.log("Completed");
    });

  	this.r.navigate(['/login']);
  }

  ngOnDestroy()
  {
    if(this.a !== undefined)
    {
      this.a.unsubscribe();
    }
  }

}
