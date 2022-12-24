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

  getOne(id: string) {
    return this.http.get<Show>("/api/shows/" + id);
  }

  add(show: Show) {
    return this.http.post("/api/shows", show);
  }

  delete(id: string) {
    return this.http.delete("/api/shows/" + id);
  }
}
