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

  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  deleteUser() {
    this.failedMessage = '';
    this.successMessage = '';

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
