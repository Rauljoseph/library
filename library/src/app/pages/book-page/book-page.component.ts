import { Component, model } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { BookService } from '../../services/book/book.service';
import { Book } from '../../models/books/bookTypes'


@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export default class BookPageComponent {

  
  bookList : Book[] = []
  constructor(public bookService : BookService, public router: Router){}

  ngOnInit(): void {
      this.getAllBooks()
  }
  getDisponibilidadText(disponible: boolean): string {
    return disponible ? "Disponible" : "No disponible";
  }

  showDetails(book: Book){

    this.router.navigate(['libros',book.id])
  }


  getAllBooks(){
    this.bookService.getAllBooks().subscribe(
      data=>{
        console.log(data);
        this.bookList = data;
        
        })
      }
    
    navigatoAddBook(){
    this.router.navigate(['create'])
  } 
  navigatoUpdateBook(){
    this.router.navigate(['update'])
  }
  
}
