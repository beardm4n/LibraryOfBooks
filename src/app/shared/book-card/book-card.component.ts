import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() data: Book;

  public rating: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fillArrayForRating();
  }

  fillArrayForRating(): void {
    for (let i = 0; i < this.data.rating; i++) {
      this.rating.push(1);
    }
  }

}
