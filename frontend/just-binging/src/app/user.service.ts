import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Wallet } from './model/wallet';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private walletSubject: BehaviorSubject<Wallet>;
  public wallet: Observable<Wallet>;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.get<Wallet>(`/api/TokenWallets?name=` + username + "&password=" + password)
      .pipe(map(wallet => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(wallet));
        this.walletSubject.next(wallet);
        return wallet;
      }));
  }
}
