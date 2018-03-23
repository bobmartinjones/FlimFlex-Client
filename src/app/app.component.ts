import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieDb } from "./movies/interfaces/movie-themoviedb.interface";
import { MovieService } from "./services/movies.service";
import { UtilService } from "./shared/util.service";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private movies: MovieDb[] = [];
  private sub1: Subscription;

  constructor(
    private _movieService: MovieService,
    private _utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnDestroy(): void {
    this.sub1 && this.sub1.unsubscribe();
  }
  title = 'app';
  starsCount: number;
  starsCounts: number[] = [];
  errorMessage:string;

  getMovies(page: number = 1): void {
    this.sub1 = this._movieService.getMovies().subscribe((movies: MovieDb[]) => {
      // console.log("movies", movies);
      if (movies) {
        this.movies.push(...movies);
      }
    });
  }
}