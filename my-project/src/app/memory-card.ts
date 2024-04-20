export class MemoryCard {
  id: number;         // identifier
  image: string;      // the path to the image for the card
  isFlipped: boolean; // boolean to track if card is flipped
  isMatched: boolean; // boolean to track if card has been matched

  constructor(id: number, image: string){
    this.id = id;
    this.image = image;
    this.isFlipped = false;
    this.isMatched = false;
  }
}
