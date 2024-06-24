import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Book } from '../../models/books/bookTypes'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  urlBook= "http://localhost:8080/book"
  constructor(public http: HttpClient) { }


  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.urlBook).pipe(catchError(this.handleError))
  }

  getBookById(id:number): Observable<Book>{
    return this.http.get<Book>(`${this.urlBook}/${id}`).pipe(catchError(this.handleError))
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error instanceof HttpErrorResponse) {
      if (error.status === 404) {
        errorMessage = error.error;
      } else if (error.status === 401) {
        errorMessage = error.error;
      } else if (error.status === 400) {
        errorMessage = error.error;
      } else if (error.status === 500) {
        errorMessage = error.error;
      } else {
        errorMessage = `Error ${error.status}: ${error.message}`;
      }
    }

    return throwError(errorMessage);
  }

}
