import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Book } from '../book.model';
import { takeWhile } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  public books: Book[];
  public book: Book;
  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    cover: null,
    description: ['', [Validators.required, Validators.minLength(5)]],
    author: ['', [Validators.required, Validators.minLength(5)]],
    publisher: ['', [Validators.required, Validators.minLength(5)]],
    codeIsbn: ['', Validators.required],
    year: ['', Validators.required],
    pages: null,
    rating: ['', [Validators.min(1), Validators.max(5)]],
    comment: null,
    personalNotes: null
  });
  public btnDoneDisabled = false;
  public btnEditDisabled = false;

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
        this.setValueToForm(this.book);
      });
  }

  getBook(): void {
    const routeParam = this.route.snapshot.paramMap;
    const bookId = +routeParam.get('bookId');
    this.book = this.books[bookId];
  }

  setValueToForm(value: Book): void {
    const form: Book = {
      name: value.name,
      cover: value.cover,
      description: value.description,
      author: value.author,
      publisher: value.publisher,
      codeIsbn: value.codeIsbn,
      year: value.year,
      pages: value.pages,
      rating: value.rating,
      comment: value.comment,
      personalNotes: value.personalNotes
    };
    this.form.setValue(form);
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
