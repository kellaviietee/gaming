import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HighScore } from './high-score.model';


@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {
  highScores: HighScore[] = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    const username = 'user';
    const password = 'password';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
  
    this.http.get<HighScore[]>('http://localhost:8080/api/highscore/all', { headers })
      .subscribe(
        (highScores: HighScore[]) => {
          this.highScores = highScores;
          console.log("highscores are:" + this.highScores)
        },
        (error: any) => {
          console.error('Error fetching high scores:', error);
        }
      );
  }
  
}

