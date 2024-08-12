import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ItemsInterface {
  id: number;
  sign: string;
  mine: boolean;
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
  revealSquare = false;
  rightIndex = Math.floor(Math.random() * this.items.length);

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.items = [...this.items, { id: i, sign: 'X', mine: false }];
    }
    this.items[this.rightIndex] = {
      id: this.rightIndex,
      sign: 'X',
      mine: true,
    };
  }

  checkSquare(id: any) {
    if (id === this.rightIndex) {
      this.revealSquare = true;
    }
  }
}
