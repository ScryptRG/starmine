import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface ItemsInterface {
  id: number;
  isClicked: boolean;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  items: ItemsInterface[] = [];
  rightIndex: number = 0;
  count: number = 0;
  record: number = 0;
  stack: number = 15;
  withdrawal: number = 0;
  discard: boolean = false;
  numbers: number[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.numbers.push(i);
      this.items = [...this.items, { id: i, isClicked: false }];
    }
    this.rightIndex = Math.floor(Math.random() * this.items.length);
    this.items[this.rightIndex] = {
      id: this.rightIndex,
      isClicked: false,
    };
  }

  checkSquare(id: any) {
    if (!this.items[id].isClicked) {
      this.numbers = this.numbers.filter((item) => item != id);
      this.items[id].isClicked = true;
      this.withdrawal = this.stack * this.count;
      this.count++;
      if (this.items[id].id === this.rightIndex) {
        this.discard = true;
        if (this.record === 0) {
          this.record = this.count;
        } else {
          if (this.count < this.record) {
            this.record = this.count;
          }
        }
      }
    }
  }

  reset() {
    this.items = [];
    this.rightIndex = 0;
    this.count = 0;
    this.stack = 15;
    this.withdrawal = 0;
    this.discard = false;
    this.ngOnInit();
  }

  random() {
    const randomSquare =
      this.numbers[Math.floor(Math.random() * this.numbers.length)];
    if (!this.items[randomSquare].isClicked) {
      this.checkSquare(randomSquare);
    }
    this.numbers = this.numbers.filter((item) => item != randomSquare);
  }
}
