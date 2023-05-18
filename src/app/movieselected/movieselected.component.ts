import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';

@Component({
  selector: 'app-movieselected',
  templateUrl: './movieselected.component.html',
  styleUrls: ['./movieselected.component.css']
})
export class MovieselectedComponent implements OnInit {
id:number;
movieref:Movies
  constructor(private aroute:ActivatedRoute,private movieservice:MoviesService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id'];
this.movieservice.getmovie(this.id).subscribe(data=>{
  this.movieref=data;
});
  }

  deleteaction()
  {
    this.movieservice.deletemovie(this.id).subscribe(data=>{
     this.router.navigate(['viewallforadmin']);
    });
  }

  updatefunction()
  {
    this.router.navigate(['updatemovie',this.id]);
  }
}
