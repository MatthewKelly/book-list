import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { Book } from 'src/types/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books$ = new BehaviorSubject([]);

  constructor() { }

  get books$(): Observable<Book[]> {
    return this._books$.asObservable();
  }

  addBook(book: Book) {
    this._books$.next([...this._books$.getValue(), book]);
  }
}
