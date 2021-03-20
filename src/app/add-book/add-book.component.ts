import {Component, Inject, OnInit} from '@angular/core';
import { Book } from '../shared/book.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    cover: null,
    description: ['', Validators.required],
    author: ['', [Validators.required, Validators.minLength(5)]],
    publisher: ['', [Validators.required, Validators.minLength(5)]],
    codeIsbn: ['', Validators.required],
    year: ['', Validators.required],
    pages: null,
    rating: ['', [Validators.min(1), Validators.max(5)]],
    comment: null,
    personalNotes: null
  });
  public btnAddDisabled = false;

  constructor(
    private fb: FormBuilder,
    @Inject('BOOKS') public booksList: Book[],
  ) { }

  ngOnInit(): void {
  }

  addBook(): void {
    this.btnAddDisabled = !this.btnAddDisabled;
    const form = this.form.value;
    this.booksList.unshift(form);
  }

}
