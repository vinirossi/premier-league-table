import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { LeagueTable } from 'src/app/shared/standings.model';
import { StandingsService } from 'src/app/shared/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  // standings!: any;
  // clubs: LeagueTable[];
  clubs: any = [];
  displayedColumns: string[] = ['position', 'club', 'points', 'played', 'won', 'drawn', 'lost', 'goalsFor', 'goalsAgainst', 'goalsDifference'];

  constructor(private standingsService: StandingsService) { }

  ngOnInit(): void {
    this.standingsService.read().subscribe((clubs: any) => {
      this.clubs = clubs.response
      console.log(this.clubs[0].league.standings, 'funfa pow')
    })

    // this.standings = this.standingsService.read();
    // console.log(this.standings, 'mostrar table')

    // this.standingsService.read().subscribe((clubs: any) => {
    //   this.clubs = clubs
    //   console.log(this.clubs, 'funfa pow')
    // })
    // this.standingsService.read();
  }

}
