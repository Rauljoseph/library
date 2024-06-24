import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-info',
  standalone: true,
  imports: [],
  templateUrl: './icon-info.component.html',
  styleUrl: './icon-info.component.css'
})
export class IconInfoComponent {

  showModal = false
  openModal() {
    this.showModal=true
  }

  closeModal() {
   this.showModal=false 
  }
}
