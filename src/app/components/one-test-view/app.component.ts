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
    this._newHttpService.getTestResult()
    .subscribe(result => {
      this.result = result.map(x => x["timestamp"])[0]
    })
  }

}
