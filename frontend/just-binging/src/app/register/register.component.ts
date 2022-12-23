import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '../user.service';
import { User } from '../model/user';

@Component({
  //selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerInfo: {
    email: string;
    type: number;
    name: string;
    firstname: string;
    password: string;
    passwordConfirmation: string;
  } = { email: undefined!, type: 0, name: undefined!, firstname: undefined!, password: undefined!, passwordConfirmation: undefined! }
  

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() { }

  onSubmit() {
    if (this.registerInfo.email == undefined || this.registerInfo.name == undefined || this.registerInfo.firstname == undefined || this.registerInfo.password == undefined || this.registerInfo.passwordConfirmation == undefined) return;
    var user: User = new User();
    user.firstname = this.registerInfo.firstname;
    user.mail = this.registerInfo.email;
    user.name = this.registerInfo.name;
    user.password = this.registerInfo.password;
    this.userService.register(user).pipe(first())
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/login');
        },
        error: error => {

        }
      });
  }

  //vérifier si les 2 mdp sont identiques
  checkPasswords(): boolean {
    return this.registerInfo.password === this.registerInfo.passwordConfirmation;
  }

  //sécurité mot de passe regex
  checkPasswordValidity(): boolean{
    // au moins une minuscule et une majuscule
    return (this.registerInfo.password.length < 8 && (!/[A-Z]/.test(this.registerInfo.password) || !/[a-z]/.test(this.registerInfo.password)) )
  }
}

