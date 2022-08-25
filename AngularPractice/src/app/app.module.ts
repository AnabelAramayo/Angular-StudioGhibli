import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {ServerComponent} from './server/server.component';
import { MoviesComponent } from './movies/movies.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MoviesComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
