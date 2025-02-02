import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';


@Component({
  selector: 'app-user-delete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-delete.component.html',
  styleUrl: './user-delete.component.css',
})
export default class UserDeleteComponent implements OnInit {
  id: number | undefined;
  successMessage = '';
  failedMessage = '';
  popUpwarning=false

  constructor(public userService: UserService) {}

  ngOnInit(): void {}


  showWarning(){
    this.popUpwarning=!this.popUpwarning
  }

  deleteUser() {
    this.failedMessage = '';
    this.successMessage = '';
    this.showWarning()

    if (this.id === undefined) {
      return;
    }
    this.userService.deleteUser(this.id).subscribe(
      (data) => {
        this.successMessage = data.message;
        this.id = undefined;
      },
      (error: Error) => {
        this.failedMessage = error.message;
      }
    );
  }
}
