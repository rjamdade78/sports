import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { MatchInformationComponent } from './match-information/match-information.component';

const routes: Routes = [
  {path: '' , component: MatchesComponent, pathMatch: 'full'},
  {path: 'matches', component: MatchesComponent},
  { path: 'matchInfo/:id', component: MatchInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
