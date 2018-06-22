import { DataFrame } from 'data-forge'

import { Component, OnInit } from '@angular/core';

import { Ng5HttpService } from '../../services/app.ng5http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!'
  result: Object[] = []

  public constructor(
    private _newHttpService: Ng5HttpService,
  ){}

  public ngOnInit(): void {
    let df = new DataFrame({
        columns: {
            'regiment': ['Nighthawks', 'Nighthawks', 'Nighthawks', 'Nighthawks', 'Dragoons', 'Dragoons', 'Dragoons', 'Dragoons', 'Scouts', 'Scouts', 'Scouts', 'Scouts'],
            'company': ['1st', '1st', '2nd', '2nd', '1st', '1st', '2nd', '2nd','1st', '1st', '2nd', '2nd'],
            'TestScore': [4, 24, 31, 2, 3, 4, 24, 31, 2, 3, 2, 3]
        }
    });
    const pivotted = df.pivot(["regiment", "company"], "TestScore", testScores => testScores.average());
    console.log(pivotted.toArray())
  }

}
