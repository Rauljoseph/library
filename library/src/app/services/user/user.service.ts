import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageBackEnd, User } from '../../models/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUser= "http://localhost:8080/users"
  constructor(public http: HttpClient) { }

  createUser(user: User):Observable<MessageBackEnd>{
    return this.http.post<MessageBackEnd>(this.urlUser, user).pipe(catchError(this.handleError))
  }

  deleteUser(id: number):Observable<MessageBackEnd>{
    return this.http.delete<MessageBackEnd>(`${this.urlUser}/${id}`).pipe(catchError(this.handleError))
  }
  updateUser(id: number , user: User):Observable<MessageBackEnd>{
    return this.http.put<MessageBackEnd>(`${this.urlUser}/${id}`, user).pipe(catchError(this.handleError))
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
