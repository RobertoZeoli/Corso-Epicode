import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseURL= environment.baseURL;

  constructor(private http:HttpClient) { }

  recupera(){
    return this.http.get<Movie[]>(`${this.baseURL}movies-popular`)
  }
}
