import { Component } from "@angular/core";
import { Ng5HttpService } from './services/app.ng5http.service';

@Component({
  selector: 'app-main',
  template: "<router-outlet></router-outlet>",
  providers: [
    Ng5HttpService
  ]
})
export class MainComponent {
}
