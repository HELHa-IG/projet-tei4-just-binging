import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Episode } from './model/episode';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  token: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private userService: UserService) {
    this.token = this.userService.walletValue.token;
    this.headers = new HttpHeaders().set('x-auth-token', this.token);
  }

  getAll() {
    return this.http.get<Episode[]>("/api/episodes", {headers: this.headers});
  }
}
