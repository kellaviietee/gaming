import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakoutComponent } from './breakout/breakout.component';
import { HighScoresComponent } from './high-scores/high-scores.component';

const routes: Routes = [
  { path: 'breakout', component: BreakoutComponent },
  { path: 'highscores', component: HighScoresComponent },
  { path: '', redirectTo: '/breakout', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
