import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _score = new BehaviorSubject<number>(0);
  public score$ = this._score.asObservable()

  cards: Array<any> = []; // initialize cards as an empty array
  score: number;  // Declare the "score" property

  constructor() {
    // Initialize the game on creation of the service
    this.initializeGame();

    // Initialize the score property
    this.score = 0;
  }

  initializeGame() {
    // Logic to initialize your game goes here
  }

  flipCard(card: any) {
    // Logic to flip the card and check for match goes here
  }

  // add other game methods as needed
}
