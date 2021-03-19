import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './shared/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HeaderModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./index-page/index-page.module').then(m => m.IndexPageModule),
      },
      {
        path: 'add',
        loadChildren: () => import('./add-book/add-book.module').then(m => m.AddBookModule),
      },
      {
        path: 'book/:bookId',
        component: BookDetailComponent,
      }
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
