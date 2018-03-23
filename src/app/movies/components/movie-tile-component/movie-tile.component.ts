import { MovieDb } from './../../interfaces/movie-themoviedb.interface';
import { Component, Input, OnInit } from '@angular/core';
import { RatingModule } from '../../../shared/components/star-component/star.component';
import { UtilService } from "../../../shared/util.service";

@Component(
{
    selector: 'movie-tile',
    templateUrl: './movie-tile.component.html',
    styleUrls: ['./movie-tile.component.css']
})

export class MovieTileComponent implements OnInit {
    @Input() data: MovieDb;
    public starsCount: number;

constructor(
    private _utilService: UtilService
  ) { }

  ngOnInit(): void {
      this.starsCount = this.data.vote_average/2;
      console.log(this.starsCount);
  }

}

