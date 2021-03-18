import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddBookComponent,
      }
    ])
  ],
  exports: [
    AddBookComponent,
  ]
})
export class AddBookModule { }
