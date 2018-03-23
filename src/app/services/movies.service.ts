import { UtilService } from './../shared/util.service';
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MovieDb } from '../movies/interfaces/movie-themoviedb.interface';

@Injectable()

export class MovieService{
    private baseURL: string;
    private popularURL: string;
    private latestURL: string;

    constructor(private _http:Http,
                private _util: UtilService){
                    this.baseURL = `${this._util.theMovieDbURL}/movie`;
                    this.popularURL = "/popular";
                    this.latestURL = "/latest";
                }

    getMovies():Observable<MovieDb[]>{
        let apiUrl: string = `${this.baseURL}${this.popularURL}`;
        apiUrl += `?api_key=${this._util.apiKey}`;        
        return this._http.get(apiUrl)
                .map(response => response.json().results)
                .catch(this.handleError);
    }

    private handleError(error:Response){
        return Observable.throw(error.json().error|| "Server Error")
    }
}