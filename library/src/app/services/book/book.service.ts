import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Book, BookWithoutId } from '../../models/books/bookTypes'
import { MessageBackEnd } from '../../models/types';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private urlBook= "http://localhost:8080"
  private endpointBook ="book"
  constructor(public http: HttpClient) { }


  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.urlBook}/${this.endpointBook}`).pipe(catchError(this.handleError))
  }

  getBookById(id:number): Observable<Book>{
    return this.http.get<Book>(`${this.urlBook}/${this.endpointBook}/${id}`).pipe(catchError(this.handleError))
  }

  addBook(book: BookWithoutId):Observable<MessageBackEnd>{
    return this.http.post<MessageBackEnd>(`${this.urlBook}/${this.endpointBook}`, book).pipe(catchError(this.handleError))
  }

  updateBook(id: number, body: Book):Observable<MessageBackEnd>{
    return this.http.put<MessageBackEnd>(`${this.urlBook}/${this.endpointBook}/${id}`, body).pipe(catchError(this.handleError))
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
