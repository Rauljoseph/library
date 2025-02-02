import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User } from '../../../models/types';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css',
})
export default class UserUpdateComponent implements OnInit {
  // id:number | undefined
  // email: string | undefined
  warningMessage = '';
  successMessage = '';
  failedMessage = '';
  selectedRole: string = 'member';
  id: number | undefined;
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  newUser: User = {
    nombre: '',
    email: '',
    password: '',
    rol: 'miembro',
  };

  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  containsLetter(input: string): boolean {
    const regex = /[a-zA-Z]/; // Expresión regular para letras mayúsculas y minúsculas
    return regex.test(input);
  }

  validations() {
    this.failedMessage = '';
    this.successMessage = '';
    this.warningMessage = '';

    if (
      this.newUser.nombre === undefined ||
      this.newUser.email === undefined ||
      this.newUser.password === undefined ||
      this.newUser.rol === undefined ||
      this.id === undefined
    ) {
      return;
    }

    //validar ID
    const idToString = this.id.toString();
    const verifyId = this.containsLetter(idToString);
    if (verifyId) {
      return (this.warningMessage = 'El campo ID no puede contener letras');
    }

    if (
      this.newUser.nombre === undefined ||
      this.newUser.email === undefined ||
      this.newUser.password === undefined ||
      this.newUser.rol === undefined
    ) {
      return;
    }

    //todos los campos
    if (
      this.newUser.nombre.length === 0 ||
      this.newUser.email.length === 0 ||
      this.newUser.password.length === 0 ||
      this.newUser.rol === null
    ) {
      return (this.warningMessage = 'Todos los campos son obligatorios');
    }

    //validar campo nombre
    if (this.newUser.nombre.length < 3) {
      return (this.warningMessage =
        'El campo nombre no puede ser menor a 3 caracteres');
    }

    const splitNameUser = this.newUser.nombre.split('');
    const result = this.numbers.find((element) =>
      splitNameUser.includes(element)
    );
    if (result) {
      return (this.warningMessage =
        'El campo nombre no puede contener numeros');
    }

    if (this.newUser.password.length < 8) {
      return (this.warningMessage =
        'La contraseña no puede ser menor a 8 caracteres');
    }

    //Validacion contraseña

    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{8,255}$/;

    if (this.newUser.password.length > 255) {
      return (this.warningMessage = 'La contraseña no puede ser mayor 255');
    }

    const verifyPassword = regexPassword.test(this.newUser.password);
    if (!verifyPassword) {
      return (this.warningMessage =
        'La contraseña ser de minimo 8 caracteres y alfanumerica con al menos un caracter especial');
    }

    //validar email
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    const verifyEmail = regexEmail.test(this.newUser.email);
    if (!verifyEmail) {
      return (this.warningMessage = 'Ingresa un email correcto');
    }

    //validar roles
    if (this.selectedRole === 'administrator') {
      this.newUser.rol = 'administrador';
    }

    return this.updateUser();
  }

  updateUser() {
    if (this.id === undefined) {
      return;
    }
    this.userService.updateUser(this.id, this.newUser).subscribe(
      (data) => {
        this.successMessage = data.message;
        this.id = undefined;
        this.newUser = {
          nombre: '',
          email: '',
          password: '',
          rol: 'miembro',
        };
      },
      (error: Error) => {
        this.failedMessage = error.message;
      }
    );
  }
}
