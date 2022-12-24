import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../model/show';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-form-show',
  templateUrl: './form-show.component.html',
  styleUrls: ['./form-show.component.css']
})
export class FormShowComponent implements OnInit {
  newShow: string = undefined!;

  constructor(private showService: ShowService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.newShow == undefined) return;
    var show: Show = new Show();
    show.bannerImg = "default";
    show.name = this.newShow;
    this.showService.add(show).pipe().subscribe({
      next: () => {
        this.router.navigateByUrl('/home');
      },
      error: error => {

      }
    });
  }

}
