import { Injectable } from "@angular/core";

@Injectable()
export class UtilService {

  readonly theMovieDbURL: string = "https://api.themoviedb.org/3";
  readonly posterBaseURL: string = "http://image.tmdb.org/t/p";
  readonly apiKey: string = "14216693351e87ac512c667a05c9fe46";

  // TODO: create a pipe
  posterURL(relativeURL: string, size: string = "w185"): string {
    // http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg
    return `${this.posterBaseURL}/${size}${relativeURL}`;
  }
}
