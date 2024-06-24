import { Component} from '@angular/core';
import {  Router, RouterLink, RouterOutlet } from '@angular/router';
// import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';
// import { User } from '../../models/types';
// import { Router } from 'express';
// import { UserCreateComponent } from '../../components/user/user-create/user-create/user-create.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export default class UserPageComponent {

  constructor(public router: Router){}
  navigateToCreateUser(){
this.router.navigate(['usuarios/create'])
  }

  navigateToDeleteUser(){
    this.router.navigate(['usuarios/delete'])
  }
  navigateToUpdateUser(){
    this.router.navigate(['usuarios/update'])
  }
//   selectedRole: string = 'member';

//   constructor(public userService: UserService) {}
//   newUser: User = {
//     nombre: '',
//     email: '',
//     password: '',
//     rol: 'miembro',
//   };

//   message = '';
//   errorMessage = '';
//   warningMessage = '';
//   numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   ngOnInit(): void {}

//   validations() {
//     this.warningMessage = '';
//     this.errorMessage = '';
//     this.message = '';

//     if (
//       this.newUser.nombre === undefined ||
//       this.newUser.email === undefined ||
//       this.newUser.password === undefined ||
//       this.newUser.rol === undefined
//     ) {
//       return;
//     }

//     //todos los campos
//     if (
//       this.newUser.nombre.length === 0 ||
//       this.newUser.email.length === 0 ||
//       this.newUser.password.length === 0 ||
//       this.newUser.rol === null
//     ) {
//       return (this.warningMessage = 'Todos los campos son obligatorios');
//     }

//     //validar campo nombre
//     if (this.newUser.nombre.length < 3) {
//       return (this.warningMessage =
//         'El campo nombre no puede ser menor a 3 caracteres');
//     }

//     const splitNameUser = this.newUser.nombre.split('');
//     const result = this.numbers.find((element) =>
//       splitNameUser.includes(element)
//     );
//     if (result) {
//       return (this.warningMessage =
//         'El campo nombre no puede contener numeros');
//     }

//     if (this.newUser.password.length < 8) {
//       return (this.warningMessage =
//         'La contraseña no puede ser menor a 8 caracteres');
//     }

//     //Validacion contraseña

//     const regexPassword =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{8,255}$/;

//     if (this.newUser.password.length > 255) {
//       return (this.warningMessage = 'La contraseña no puede ser mayor 255');
//     }

//     const verifyPassword = regexPassword.test(this.newUser.password);
//     if (!verifyPassword) {
//       return (this.warningMessage =
//         'La contraseña ser de minimo 8 caracteres y alfanumerica con al menos un caracter especial');
//     }

//     //validar email
//     const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
//     const verifyEmail = regexEmail.test(this.newUser.email);
//     if (!verifyEmail) {
//       return (this.warningMessage = 'Ingresa un email correcto');
//     }

//     //validar roles
//     if (this.selectedRole === 'administrator') {
//       this.newUser.rol = 'administrador';
//     }
//     // this.newUser.rol = this.selectedRole === "member" ? "miembro" : "administrator";
//     console.log(this.newUser);
//     return this.submit();
//   }

//   submit() {
//     this.userService.createUser(this.newUser).subscribe(
//       (data) => {
//         this.message = data.message;

//         this.newUser = {
//           nombre: '',
//           email: '',
//           password: '',
//           rol: 'miembro',
//         };
//       },
//       (error: Error) => {
//         this.errorMessage = error.message;
//       }
//     );
//   }
}
