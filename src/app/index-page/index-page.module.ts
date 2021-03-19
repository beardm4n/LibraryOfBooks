import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page.component';
import { RouterModule } from '@angular/router';
import { BookCardModule } from '../shared/book-card/book-card.module';

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
  ]
})
export class IndexPageModule { }
