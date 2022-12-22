import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Show } from '../model/show';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shows: any[];

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.showService.getAll().pipe(first()).subscribe(shows => this.shows = shows);
  }

}
