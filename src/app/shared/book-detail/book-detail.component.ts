import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Book } from '../book.model';
import { takeWhile } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  public books: Book[];
  public book: Book;
  public form: FormGroup = this.fb.group({
    name: null,
    cover: null,
    description: null,
    author: null,
    publisher: null,
    codeIsbn: null,
    year: null,
    pages: null,
    rating: null,
    comment: null,
    personalNotes: null
  });

  private alive = true;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList(): void {
    this.appService.getBook()
      .pipe(takeWhile(() => this.alive))
      .subscribe(v => {
        this.books = v.books;
        this.getBook();
      });
  }

  getBook(): void {
    const routeParam = this.route.snapshot.paramMap;
    const bookId = +routeParam.get('bookId');
    this.book = this.books[bookId];
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
