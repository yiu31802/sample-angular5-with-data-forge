import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import * as _ from 'underscore'

var base_url = 'http://jptolx22168:3005/'

@Injectable()
export class Ng5HttpService {
  constructor(private _http: HttpClient) {
  }

  getTestResult() {
    return this._http.get<string[]>(base_url + "test-result/");
  }
}
