import { Component } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { Book, BookWithoutId } from '../../../models/books/bookTypes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css'
})
export default class BookCreateComponent {

  successMessage =""
  failedMessage =""
  constructor(public bookService : BookService){}

  newBook:BookWithoutId={
    titulo: '',
    autor: '',
    isbn: '',
    genero: '',
    disponible: true
  }
  
  validationBook(){
    this.failedMessage=""
    this.successMessage=""
    
    if(this.newBook.titulo === undefined || this.newBook.autor === undefined || this.newBook.isbn === undefined || this.newBook.genero === undefined){
      return
    }
    if(this.newBook.titulo.length === 0 || this.newBook.autor.length === 0 || this.newBook.isbn.length === 0 || this.newBook.genero.length === 0){
      this.failedMessage="Todos los campos son obligatorios"
      return
    }

    if(this.newBook.titulo.length < 3 || this.newBook.autor.length < 3 || this.newBook.isbn.length < 3 || this.newBook.genero.length < 3){
      this.failedMessage="Los campos no pueden ser menor a 3 caracteres"
      return
    }

    this.addBook()

  }

  addBook(){
    this.failedMessage=""
    this.successMessage=""
    this.bookService.addBook(this.newBook).subscribe(
      data=>{
        this.successMessage= data.message
        this.newBook={
          titulo: '',
          autor: '',
          isbn: '',
          genero: '',
          disponible: true
        }
      },
      (error: Error)=>{
        this.failedMessage= error.message
      }
    )
  }


}
