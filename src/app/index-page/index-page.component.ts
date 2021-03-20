import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit, OnDestroy {
  public books: Book[];

  private alive = true;

  constructor(
    @Inject('BOOKS') public booksList: Book[],
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.books = this.booksList;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
