import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailComponent implements OnInit, OnDestroy {
  public books: Book[];
  public book: Book;
  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    cover: null,
    description: ['', Validators.required],
    author: ['', [Validators.required, Validators.minLength(5)]],
    publisher: ['', [Validators.required, Validators.minLength(5)]],
    codeIsbn: ['', Validators.required],
    year: ['', Validators.required],
    pages: null,
    rating: ['', [Validators.min(0), Validators.max(5)]],
    comment: null,
    personalNotes: null
  });
  public btnDoneDisabled = true;
  public btnEditDisabled = false;

  private alive = true;
  private bookId: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    @Inject('BOOKS') public booksList: Book[],
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.books = this.booksList;
    this.getBook();
    this.setValueToForm(this.book);
  }

  getBook(): void {
    const routeParam = this.route.snapshot.paramMap;
    this.bookId = +routeParam.get('bookId');
    this.book = this.books[this.bookId];
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

  editForm(): void {
    this.btnDoneDisabled = !this.btnDoneDisabled;
    this.btnEditDisabled = !this.btnEditDisabled;
  }

  confirmEditing(): void {
    this.btnDoneDisabled = !this.btnDoneDisabled;
    this.btnEditDisabled = !this.btnEditDisabled;
    const form = this.form.value;
    this.books[this.bookId].name = form.name;
    this.books[this.bookId].cover = form.cover;
    this.books[this.bookId].description = form.description;
    this.books[this.bookId].author = form.author;
    this.books[this.bookId].publisher = form.publisher;
    this.books[this.bookId].codeIsbn = form.codeIsbn;
    this.books[this.bookId].year = form.year;
    this.books[this.bookId].pages = form.pages;
    this.books[this.bookId].rating = form.rating;
    this.books[this.bookId].comment = form.comment;
    this.books[this.bookId].personalNotes = form.personalNotes;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
