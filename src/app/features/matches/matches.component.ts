import { Component, OnInit } from '@angular/core';
import { StandingsService } from 'src/app/shared/standings.service';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matchesLeague: any = [];

  constructor(private standingsService: StandingsService) { }

  ngOnInit(): void {
    this.standingsService.readMatches().subscribe((matchesLeague: any) => {
      this.matchesLeague = matchesLeague
      console.log(this.matchesLeague.matches[350], 'funfa pow')
    })
  }

}
