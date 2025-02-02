import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public router: Router){}

  navigateToUser(){
    this.router.navigate(['usuarios'])
  }

  navigateToBooks(){
    this.router.navigate(['libros'])
  }

}
