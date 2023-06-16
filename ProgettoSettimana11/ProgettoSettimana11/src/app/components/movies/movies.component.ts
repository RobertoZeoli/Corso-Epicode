import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] | undefined;

  constructor(private moviesSrv: MoviesService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.moviesSrv.recupera().subscribe((_movies: Movie[])=>{
        this.movies = _movies;
      });
    },2000)
  }
}
