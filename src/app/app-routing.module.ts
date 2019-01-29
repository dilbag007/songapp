import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';
import { SongMainComponent } from './song-main/song-main.component';
import { DatacComponent } from './datac/datac.component';
import { ListcComponent } from './listc/listc.component';
import { TopsongsComponent } from './topsongs/topsongs.component';
import { AddsongComponent } from './addsong/addsong.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes:Routes = [
	{path:"home", component: SongMainComponent, children:[ 
		{path:":id", component: DatacComponent}
	]},
	{path:"list", component: ListcComponent},
	{path:"data", component: DatacComponent},
	{path:"top", component: TopsongsComponent},
	{path:"add", component: AddsongComponent},
	{path:"blog", component: BlogComponent},
	{path:"about", component: AboutComponent},
	{path:"login", component: LogInComponent},
	{path:"signup", component: SignUpComponent},
	{path:"", redirectTo:"home", pathMatch:"full"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  	RouterModule
  ]
})

export class AppRoutingModule { }