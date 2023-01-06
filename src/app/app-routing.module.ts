import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from './features/standings/standings.component';
import { MatchesComponent } from './features/matches/matches.component';

const routes: Routes = [
  {
    path: "matches",
    component: MatchesComponent
  },
  {
    path: "standings",
    component: StandingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
