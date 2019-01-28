import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: 'add-book', component: AddBookComponent },
  { path: 'book-list', component: BookListComponent },
  { path: '', redirectTo: '/add-book', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
