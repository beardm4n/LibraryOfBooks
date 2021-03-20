import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page.component';
import { RouterModule } from '@angular/router';
import { BookCardModule } from '../shared/book-card/book-card.module';
import { books } from '../shared/booksList';

@NgModule({
  declarations: [IndexPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: IndexPageComponent,
      }
    ]),
    BookCardModule
  ],
  providers: [
    { provide: 'BOOKS', useValue: books }
  ]
})
export class IndexPageModule { }
