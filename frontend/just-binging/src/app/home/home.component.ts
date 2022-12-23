import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Show } from '../model/show';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shows: any[];

  constructor(private router: Router, private showService: ShowService) { }

  ngOnInit(): void {
    this.showService.getAll().pipe(first()).subscribe(shows => this.shows = shows);
  }

  delete(id: string) {
    if (confirm("Etes vous sûr de vouloir supprimer ce show?")) {
      this.showService.delete(id).pipe(first())
        .subscribe({
          next: () => {
            window.location.reload();
          },
          error: error => {

          }
        });
    }
  }

}
