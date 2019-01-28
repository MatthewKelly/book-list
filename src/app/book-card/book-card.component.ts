import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/types/book';
import { BookCategories, BookCategoriesEnum } from '../constants/constants';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  getCategoryLabel(bookCategory: BookCategoriesEnum) {
    const matchedCategory = BookCategories.find((category) => category.value === bookCategory);
    return matchedCategory ? matchedCategory.label : 'Unknown category';
  }

  ngOnInit() {
  }

}
