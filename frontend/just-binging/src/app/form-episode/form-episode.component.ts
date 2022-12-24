import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EpisodeService } from '../episode.service';
import { Episode } from '../model/episode';


@Component({
  selector: 'app-form-episode',
  templateUrl: './form-episode.component.html',
  styleUrls: ['./form-episode.component.css']
})
export class FormEpisodeComponent implements OnInit {
  id: string;
  newEpisode: {
    numero: number;
    date: Date;
  } = {numero: 0, date: undefined!}

  constructor(private _Activatedroute: ActivatedRoute, private router: Router, private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params["id"];
  }

  onSubmit() {
    if (this.newEpisode.numero == 0 || this.newEpisode.date == undefined) return;
    var episode: Episode = new Episode();
    episode.number = this.newEpisode.numero;
    episode.releaseDate = this.newEpisode.date;
    episode.showID = new Number(this.id).valueOf();
    this.episodeService.add(episode).pipe().subscribe({
      next: () => {
        this.router.navigateByUrl('/home');
      },
      error: error => {

      }
    });
  }

}
