import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '../user.service';

@Component({
  //selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInfo: {
    email: string;
    password: string;
  } = { email: undefined!, password: undefined! }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(){}

  onSubmit() {
    if (this.loginInfo.email == undefined || this.loginInfo.password == undefined) return;
    this.userService.login(this.loginInfo.email, this.loginInfo.password).pipe(first())
      .subscribe({
        next: () => {
          this.router.navigateByUrl('');
        },
        error: error => {

        }
      });
  }

}
