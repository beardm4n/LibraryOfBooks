import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { AppService } from '../app.service';
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
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList(): void {
    this.appService.getBook()
      .pipe(takeWhile(() => this.alive))
      .subscribe(v => {
        this.books = v.books;
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
