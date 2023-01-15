import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from './features/standings/standings.component';
import { MatchesComponent } from './features/matches/matches.component';
import { StandingsBackupComponent } from './features/standings-backup/standings-backup.component';

const routes: Routes = [
  {
    path: "matches",
    component: MatchesComponent
  },
  {
    path: "standings",
    component: StandingsComponent
  },
  {
    path: "standingsbackup",
    component: StandingsBackupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
