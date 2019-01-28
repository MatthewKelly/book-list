import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookCategories } from '../constants/constants';

import { BookService } from '../book.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  bookCategories = BookCategories;
  constructor(private bookService: BookService, private snackBar: MatSnackBar) { }

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.maxLength(30), Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }

  addBook() {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value);
      this.bookForm.reset();
      this.snackBar.open('Book added to list', null, {duration: 500});
    }
  }
}
