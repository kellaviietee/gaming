import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    HighScoresComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
