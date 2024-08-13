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
  odd: number = 1.01;
  stack: number = 15;
  withdrawal: number = 0;
  ngOnInit(): void {
    for (let i = 0; i < 48; i++) {
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
      this.items[id].isClicked = true;
      this.odd *= 1.08;
      this.withdrawal = this.stack * this.odd;
    }
  }

  reset() {
    this.items = [];
    this.rightIndex = 0;
    this.odd = 1.01;
    this.stack = 15;
    this.withdrawal = 0;
    this.ngOnInit();
  }

  mask() {
    alert('ok');
  }
}
