import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { UserLog } from './UserLog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit, OnDestroy {

  constructor(private r: Router, private httpser: HttpServiceService) {}

  ngOnInit() {
  }

  

  ngOnDestroy()
  {
  }

}
