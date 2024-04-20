import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  score: number = 0;

  constructor(public gameService: GameService) {
    this.gameService.score$.subscribe(newScore => this.score = newScore);
  }

  ngOnInit(): void {
    // Here, initialisation of the game, for example shuffling the cards
  }
}
