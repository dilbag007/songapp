import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { User } from './sign-up/User';
import { Song } from './listc/Song';
import { UserLog } from './log-in/UserLog';
import { SongCat } from './topsongs/SongCat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor(private http:HttpClient) { }

  d =  this.http.post("http://localhost:3000/findTrend", "Trending");
  be:string;
  x:string;

  lout()
  {
  	this.be = localStorage.getItem('x-token');
  	localStorage.removeItem('x-token');
  	return this.http.post("http://localhost:3000/logOut", {'token':this.be});
  }

  setTkn(j:string)
  {
  	localStorage.setItem('x-token', j);
  }

  getTkn()
  {
  	return localStorage.getItem('x-token');
  }

  crUser(j:User)
  {
  	return this.http.post("http://localhost:3000/newUser", j);
  }

  crSong(j:Song)
  {
  	return this.http.post("http://localhost:3000/newSong", j);
  }

  chUser(j:UserLog): Observable<HttpResponse<UserLog>>
  {
  	return this.http.post<UserLog>("http://localhost:3000/checkUser", j, {observe: 'response'});
  }

  setCat(x:string)
  {
  	let params:HttpParams = new HttpParams().set('category',x);
  	this.d = this.http.get("http://localhost:3000/findCat", {params});
  }

  /**setPostCat(x:SongCat)
  {
  	this.d = this.http.post("http://localhost:3000/findCat", x);
  }*/

  getTrend()
  {
  	this.d =  this.http.post("http://localhost:3000/findTrend", "Trending");
  }

  getHin()
  {
  	this.d = this.http.post("http://localhost:3000/findHin", "Hindi");
  }

  getEng()
  {
  	this.d = this.http.post("http://localhost:3000/findEng", "English");
  }

  getPun()
  {
  	this.d = this.http.post("http://localhost:3000/findPun", "Punjabi");
  }

  getSong(b)
  {
  	let params:HttpParams = new HttpParams().set('id', b.id);
  	return this.http.get("http://localhost:3000/findSong", {params});
  }

  getPostSong(b)
  {
  	return this.http.post("http://localhost:3000/findSong", b);	
  }

}