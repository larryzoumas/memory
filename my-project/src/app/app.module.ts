import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameCardComponent } from './game-card/game-card.component'; //
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    //AppComponent,
    GameBoardComponent,
    GameCardComponent // Declare it here assuming it exists
    // other components if any
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    MatCardModule
    // other modules if any
  ],
  exports: [
    GameBoardComponent
  ],
  //bootstrap: [AppComponent]
})
export class AppModule { }
