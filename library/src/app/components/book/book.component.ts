import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/books/bookTypes';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export default class BookComponent implements OnInit {

  id!:number;
  book:Book | undefined;
  constructor(public bookService : BookService, public routerActive : ActivatedRoute, public router: Router){}

  ngOnInit(): void {
    this.getBookById()
  }
  getDisponibilidadText(disponible: boolean): string {
    return disponible ? "Disponible" : "No disponible";
  }
  
  getBookById(){
    
    this.id = this.routerActive.snapshot.params['id']
    this.bookService.getBookById(this.id).subscribe(
      data=>{     
      this.book=data
      }
    )
  }

  navigateToListBooks(){
    this.router.navigate(['libros'])
  }
}
