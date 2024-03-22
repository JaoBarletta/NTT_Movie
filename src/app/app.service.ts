import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , map } from 'rxjs';
import { Movie } from './models/app.model';


interface Search{
  Search : Movie[];
}

@Injectable({providedIn: 'root'})



export class AppService {
  private url : string= "http://www.omdbapi.com/?i=tt3896198&apikey=3f6396c9"

  constructor(private http: HttpClient) { }

    getMovieBySearchTitle(query:string): Observable<Movie[]>{
      return this.http.get<Search>(`${this.url}&s=${query}`).pipe(map(result =><Movie[]>result.Search))
    }

    getMovieById(query:string): Observable<Movie> {
      return this.http.get<Movie>(`${this.url}&plot=full&i=${query}`);
    }
}
