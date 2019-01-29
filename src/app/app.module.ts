import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DatacComponent } from './datac/datac.component';
import { ListcComponent } from './listc/listc.component';
import { ReleejDirective } from './releej.directive';
import { CulurDirective } from './culur.directive';
import { TopsongsComponent } from './topsongs/topsongs.component';
import { AddsongComponent } from './addsong/addsong.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { SongMainComponent } from './song-main/song-main.component';
import { AppRoutingModule } from './app-routing.module';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatacComponent,
    ListcComponent,
    ReleejDirective,
    CulurDirective,
    TopsongsComponent,
    AddsongComponent,
    BlogComponent,
    AboutComponent,
    EditComponent,
    SongMainComponent,
    SignUpComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }