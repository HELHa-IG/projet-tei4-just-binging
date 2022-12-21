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

  constructor(private http: HttpClient) {
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
}
