import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main.component';
import { AppComponent } from './components/one-test-view/app.component';
import { routing } from './routing/app.routing';

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
