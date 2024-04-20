import {Component, Input, OnInit} from '@angular/core';
import {MemoryCard} from '../memory-card';

@Component({
  selector: 'app-game-card',
  //standalone: true,
  //imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {

  @Input() card: MemoryCard = new MemoryCard(0, '');

  constructor() {
  }

  ngOnInit(): void {
  }

}
