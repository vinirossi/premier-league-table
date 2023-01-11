import { Component, OnInit } from '@angular/core';
import { Standings } from 'src/app/shared/standings.model';
import { StandingsService } from 'src/app/shared/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  clubs: Standings[];
  displayedColumns: string[] = ['id', 'urlBadge', 'club'];

  constructor(private standingsService: StandingsService) { }

  ngOnInit(): void {
    this.standingsService.read().subscribe(clubs => {
      this.clubs = clubs
    })
  }

}
