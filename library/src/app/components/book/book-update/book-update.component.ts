import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { Book, BookWithoutId } from '../../../models/books/bookTypes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.css'
})
export default class BookUpdateComponent implements OnInit{

  constructor(public bookService : BookService){}
  bookList!:Book[]

  bookToEdit: Book={
    id: 0,
    titulo: '',
    autor: '',
    isbn: '',
    genero: '',
    disponible: true
  }


  failedMessage=""
  showForm=false
  successMessage=""

  ngOnInit(): void {
      this.getAllBooks()
  }

  openForm(book:Book){
    this.showForm=true

    this.bookToEdit = {
        id: book.id,
        titulo: book.titulo,
        autor: book.autor,
        isbn: book.isbn,
        genero: book.genero,
        disponible: true
      }
    
  }
  closeForm(){
    this.showForm=false;
  }

  getDisponibilidadText(disponible: boolean): string{
    return disponible ? "Disponible" : "No disponible"
  }
  

  getAllBooks(){

    this.bookService.getAllBooks().subscribe(
      data=>{
          this.bookList=data
        },
        (error:Error)=>{
          this.failedMessage= error.message
        }
    )
  }
  updateBook(){
    this.failedMessage=""
    this.successMessage=""
    
    this.bookService.updateBook(this.bookToEdit.id,this.bookToEdit).subscribe(
      data=>{
        this.successMessage=data.message;
        this.bookToEdit = {
          id:0,
          titulo: '',
          autor: '',
          isbn: '',
          genero: '',
          disponible: true
        }
      },
      (error:Error)=>{
        this.failedMessage= error.message
      }
    )
}

  
  
  validationBook(){
    this.failedMessage=""
    this.successMessage=""
    
    if(this.bookToEdit.titulo === undefined || this.bookToEdit.autor === undefined || this.bookToEdit.isbn === undefined || this.bookToEdit.genero === undefined){
      return
    }
    if(this.bookToEdit.titulo.length === 0 || this.bookToEdit.autor.length === 0 || this.bookToEdit.isbn.length === 0 || this.bookToEdit.genero.length === 0){
      this.failedMessage="Todos los campos son obligatorios"
      return
    }

    if(this.bookToEdit.titulo.length < 3 || this.bookToEdit.autor.length < 3 || this.bookToEdit.isbn.length < 3 || this.bookToEdit.genero.length < 3){
      this.failedMessage="Los campos no pueden ser menor a 3 caracteres"
      return
    }

    this.updateBook()

  }

}
