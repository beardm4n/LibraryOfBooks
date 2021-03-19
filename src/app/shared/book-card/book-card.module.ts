import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BookCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    BookCardComponent,
  ]
})
export class BookCardModule { }
