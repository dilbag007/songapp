import { Component, OnInit, Input, AfterContentChecked, OnChanges, OnDestroy } from '@angular/core';
import { Song } from '../listc/Song';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-datac',
  templateUrl: './datac.component.html',
  styleUrls: ['./datac.component.css']
})
export class DatacComponent implements OnInit, AfterContentChecked, OnChanges, OnDestroy {

	SName:string;
	SURL:string;
	Description:string;
	a;
	b:Subscription;
	S:Song;
	m;
	
	//this.ar.queryparams.subscribe();

	constructor(private ar: ActivatedRoute, private httpser: HttpServiceService){}

	ngDoCheck(){}
	ngAfterContentChecked(){}

	ngOnInit(){
		this.ar.params.subscribe((data:Params) => {
		    this.a = this.httpser.getSong(data);
		    this.b = this.a.subscribe( (x) => {
				    this.SName = x.name;
				    this.SURL = x.ImgURL;
				    this.Description = x.desc;
			    },
			    (y) => {
			    	console.log(y);
			    },
			    () => {
			    	console.log("Completed");
			    });
	    },
	    (err) => {
	    	console.log(err);
	    },
	    () => {
	    	console.log("Completed");
	    });
	}

	ngOnChanges(){}

	ngOnDestroy()
	{
		this.b.unsubscribe();
	}
}