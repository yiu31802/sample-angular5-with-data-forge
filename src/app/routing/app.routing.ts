import { RouterModule } from '@angular/router';

import { AppComponent } from "../components/one-test-view/app.component";


const ROUTES = [
  {path: '', component: AppComponent }
];

export const routing = RouterModule.forRoot(ROUTES)
