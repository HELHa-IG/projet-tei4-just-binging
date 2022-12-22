import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '../user.service';

@Component({
  //selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerInfo: {
    email: string;
    password: string;
    passwordConfirmation: string;
  } = { email: undefined!, password: undefined!, passwordConfirmation: undefined! }
  

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() { }

  onSubmit() {
    if (this.registerInfo.email == undefined || this.registerInfo.password == undefined || this.registerInfo.passwordConfirmation == undefined) return;
    this.userService.register(this.registerInfo.email, this.registerInfo.password, this.registerInfo.passwordConfirmation).pipe(first())
      .subscribe({
        next: () => {
          this.router.navigateByUrl('');
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

