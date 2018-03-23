import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RatingModule } from './shared/star.component';
import { FormsModule } from '@angular/forms';
import { MovieTileComponent } from './movies/components/movie-tile-component/movie-tile.component';
import { MovieService } from './services/movies.service';
import { UtilService } from './shared/util.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieTileComponent
  ],
  imports: [
    BrowserModule,
    RatingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MovieService,
    UtilService
  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
