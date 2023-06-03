import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    this.http.get<HighScore[]>('http://localhost:8080/api/highscore/all')
      .subscribe(
        (highScores: HighScore[]) => {
          this.highScores = highScores;
        },
        (error: any) => {
          console.error('Error fetching high scores:', error);
        }
      );
  }
  
}

