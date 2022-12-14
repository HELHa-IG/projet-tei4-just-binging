import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Wallet } from './model/wallet';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private walletSubject: BehaviorSubject<Wallet>;
  public wallet: Observable<Wallet>; //modele wallet

  //mettre un observable modele user ?

  constructor(private http: HttpClient, private router: Router) {
    this.walletSubject = new BehaviorSubject<Wallet>(JSON.parse(localStorage.getItem('user')!));
    this.wallet = this.walletSubject.asObservable();
  }

  login(email: string, password: string) {
    return this.http.get<Wallet>(`/api/TokenWallets?name=` + email + "&password=" + password)
      .pipe(map(wallet => {
        localStorage.setItem('user', JSON.stringify(wallet));
        this.walletSubject.next(wallet);
        return wallet;
      }));
  }

  public get walletValue(): Wallet {
    return this.walletSubject.value;
  }

  register(user: User) {
    return this.http.post('/api/Users', user )
  }

  logout() {
    this.http.delete('/api/TokenWallets/' + this.walletSubject.value.tokenWalletId).pipe(first()).subscribe({
      next: () => {
        localStorage.removeItem('user');
        this.walletSubject.next(null!);
        this.router.navigateByUrl('/login');
      },
      error: error => {

      }
    });
  }
}
