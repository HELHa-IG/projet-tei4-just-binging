import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { ShowService } from '../show.service';
import { Show } from '../model/show';
import { Episode } from '../model/episode';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-liste-episode',
  templateUrl: './liste-episode.component.html',
  styleUrls: ['./liste-episode.component.css']
})
export class ListeEpisodeComponent implements OnInit {
  id: string;
  show: Show;
  episodes: Episode[];


  constructor(private _Activatedroute: ActivatedRoute, private showService: ShowService, private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params["id"];
    this.showService.getOne(this.id).pipe().subscribe(shows => this.show = shows);
    this.episodeService.getAll().pipe(first()).subscribe(episodes => {
      this.episodes = episodes;

    });
    
  }

}
