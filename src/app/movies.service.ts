import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movies } from './movies';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpclient:HttpClient) { }
  private uriapi='http://localhost:8080/movie';

  savemovie(movie:Movies):Observable<object>{
    return this.httpclient.post(`${this.uriapi}`,movie);
  }

  updatemovie(movie:Movies,id:number):Observable<object>
  {
    return this.httpclient.put(`${this.uriapi}/${id}`,movie);
  }

  getmovie(id:number):Observable<Movies>
  {
    return this.httpclient.get<Movies>(`${this.uriapi}/${id}`);
  }
  getallmovies():Observable<Movies[]>
  {
    return this.httpclient.get<Movies[]>(`${this.uriapi}`);
  }

  deletemovie(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.uriapi}/${id}`);
  }


}
