import { Component, OnInit } from '@angular/core';
import { StandingsService } from 'src/app/shared/standings.service';

@Component({
  selector: 'app-standings-backup',
  templateUrl: './standings-backup.component.html',
  styleUrls: ['./standings-backup.component.scss']
})
export class StandingsBackupComponent implements OnInit {
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
