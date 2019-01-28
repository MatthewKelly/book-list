import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { of } from 'rxjs';
import { BookCategoriesEnum } from '../constants/constants';
import { BookCardComponent } from '../book-card/book-card.component';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  const books = [
    { title: 'One', description: 'Book One', category: BookCategoriesEnum.Sport},
    { title: 'Two', description: 'Book Two', category: BookCategoriesEnum.Drama},
    { title: 'Three', description: 'Book Three', category: BookCategoriesEnum.Comedy}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ MatCardModule ],
      declarations: [ BookCardComponent, BookListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    component.books$ = of(books);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title with the number of books', () => {
    expect(fixture.debugElement.query(By.css('h2')).nativeElement.innerText).toEqual('Book list ( 3 )');
  });

  it('should contain list of added books', () => {
    const appBookCards = fixture.debugElement.queryAll(By.css('app-book-card'));
    expect(appBookCards.length).toEqual(3);
    expect(appBookCards[0].componentInstance.book).toEqual(books[0]);
    expect(appBookCards[1].componentInstance.book).toEqual(books[1]);
    expect(appBookCards[2].componentInstance.book).toEqual(books[2]);
  });
});
