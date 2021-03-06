import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AddBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddBookComponent,
      }
    ]),
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [
    AddBookComponent,
  ]
})
export class AddBookModule { }
