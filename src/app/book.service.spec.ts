import { TestBed } from '@angular/core/testing';
import { first } from 'rxjs/operators';

import { BookService } from './book.service';
import { BookCategoriesEnum } from './constants/constants';
import { Book } from 'src/types/book';

describe('BookServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });

  it('add book should add new book to list of books', () => {
    const service: BookService = TestBed.get(BookService);
    const book1 = { 'title': 'Title', 'description': 'Book one', 'category': BookCategoriesEnum.Comedy};
    const book2 = { 'title': 'Title', 'description': 'Book two', 'category': BookCategoriesEnum.Comedy};
    service.addBook(book1);
    service.books$
      .pipe(first())
      .subscribe((books: Array<Book>) => {
        expect(books.length).toEqual(1);
        expect(books[0]).toEqual(book1);
      });
    service.addBook(book2);
    service.books$
      .pipe(first())
      .subscribe((books: Array<Book>) => {
        expect(books.length).toEqual(2);
        expect(books[0]).toEqual(book1);
        expect(books[1]).toEqual(book2);
      });
  });
});
