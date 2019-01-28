import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookComponent } from './add-book.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BookService } from '../book.service';
import { BookCategoriesEnum } from '../constants/constants';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookComponent ],
      providers: [ BookService ],
      imports: [
        MatSnackBarModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have category as a required field', () => {
    const categoryField = component.bookForm.get('category');
    categoryField.setValue('');
    expect(categoryField.valid).toBe(false);

    categoryField.setValue(BookCategoriesEnum.Comedy);
    expect(categoryField.valid).toBe(true);
  });

  it('should have description as a required field', () => {
    const descriptionField = component.bookForm.get('description');

    descriptionField.setValue('');
    expect(descriptionField.valid).toBe(false);

    descriptionField.setValue('a description');
    expect(descriptionField.valid).toBe(true);
  });

  it('should have title as a required field with a max length of 30', () => {
    const titleField = component.bookForm.get('title');
    titleField.setValue('longlonglonglonglongllonglonglonglonglongtitle');
    expect(titleField.valid).toBe(false);
    expect(titleField.hasError('maxlength')).toBe(true);

    titleField.setValue('shortertitle');
    expect(titleField.valid).toBe(true);

    component.bookForm.get('title').setValue('');
    expect(titleField.valid).toBe(false);
  });

  it('should not call add book when fields are invalid and submit button is clicked', () => {
    const bookService: BookService = TestBed.get(BookService);
    const bookServiceSpy = spyOn(bookService, 'addBook');
    const submitButton = fixture.debugElement.query(By.css('.submit-button'));
    submitButton.triggerEventHandler('click', null);
    expect(bookServiceSpy).not.toHaveBeenCalled();
  });

  it('should call add book when fields are valid abd submit button is clicked', () => {
    const bookService: BookService = TestBed.get(BookService);
    const bookServiceSpy = spyOn(bookService, 'addBook');
    const book = { 'title': 'Title', 'description': 'Book one', 'category': BookCategoriesEnum.Comedy};

    component.bookForm.setValue(book);

    const submitButton = fixture.debugElement.query(By.css('.submit-button'));
    submitButton.triggerEventHandler('click', null);
    expect(bookServiceSpy).toHaveBeenCalledWith(book);
  });
});
