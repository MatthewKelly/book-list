import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardComponent } from './book-card.component';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material';
import { BookCategoriesEnum } from '../constants/constants';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCardComponent ],
      imports: [
        MatCardModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    component.book = { 'title': 'Hello', 'category' : BookCategoriesEnum.Comedy, description: 'book about hello'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct category', () => {
    expect(component.getCategoryLabel(BookCategoriesEnum.Sport)).toEqual('Sport');
    expect(component.getCategoryLabel(BookCategoriesEnum.Drama)).toEqual('Drama');
    expect(component.getCategoryLabel(BookCategoriesEnum.Comedy)).toEqual('Comedy');
  });

  it('should display book details', () => {
    expect(fixture.debugElement.query(By.css('mat-card-title')).nativeElement.innerText).toEqual('Title: Hello');
    expect(fixture.debugElement.query(By.css('mat-card-subtitle')).nativeElement.innerText).toEqual('( Comedy )');
    expect(fixture.debugElement.query(By.css('.description')).nativeElement.innerText).toEqual('Description: book about hello');
  });
});
