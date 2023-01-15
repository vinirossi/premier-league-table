import { Component, OnInit } from '@angular/core';
import { StandingsService } from 'src/app/shared/standings.service';

@Component({
  selector: 'app-standings2',
  templateUrl: './standings2.component.html',
  styleUrls: ['./standings2.component.scss']
})
export class Standings2Component implements OnInit {
  clubs: any = [];
  displayedColumns: string[] = ['position', 'club', 'points', 'played', 'won', 'drawn', 'lost', 'goalsFor', 'goalsAgainst', 'goalsDifference'];

  constructor(private standingsService: StandingsService) { }

  ngOnInit(): void {
    this.standingsService.read().subscribe((clubs: any) => {
      this.clubs = clubs
      console.log(this.clubs.standings[0].table, 'funfa pow')
    })
  }

}
