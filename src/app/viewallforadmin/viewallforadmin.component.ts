import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewallforadmin',
  templateUrl: './viewallforadmin.component.html',
  styleUrls: ['./viewallforadmin.component.css']
})
export class ViewallforadminComponent implements OnInit {
  movie:Movies[];

  constructor(private movieservice:MoviesService,private router:Router) { }

  ngOnInit(): void {
    this.movieservice.getallmovies().subscribe(data=>{
     this.movie=data;
    });
  }

  action(id:number)
  {
    this.router.navigate(['selectedbyadmin',id]);
  }

}
