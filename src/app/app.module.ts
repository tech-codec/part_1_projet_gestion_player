import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http'
import { PlayerComponent } from './components/player/player.component';
import { FormsModule } from '@angular/forms';
import { NewplayerComponent } from './components/newplayer/newplayer.component';
import { EditeplayerComponent } from './components/editeplayer/editeplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NewplayerComponent,
    EditeplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
