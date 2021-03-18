import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book.component';



@NgModule({
  declarations: [AddBookComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AddBookComponent,
  ]
})
export class AddBookModule { }
