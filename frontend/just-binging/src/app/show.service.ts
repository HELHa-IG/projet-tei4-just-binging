import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Show } from './model/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Show[]>("/api/shows");
  }
}
