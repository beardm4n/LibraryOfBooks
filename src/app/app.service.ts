import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from './shared/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient,
  ) { }

  getBook(): Observable<Books> {
    return this.http.get<Books>('assets/booksList.json');
  }
}
