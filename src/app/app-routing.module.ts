import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'highscores', component: HighScoresComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
