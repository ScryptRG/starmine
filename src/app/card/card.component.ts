import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ItemsInterface {
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
  isMine = false;
  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.items = [...this.items, { sign: 'X', mine: false }];
    }

    this.items[Math.floor(Math.random() * this.items.length)] = {
      sign: 'X',
      mine: true,
    };
  }

  checkSquare(items: ItemsInterface) {
    if (items.mine) {
      this.isMine = true;
    }
  }
}
