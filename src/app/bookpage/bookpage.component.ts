import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { FormBuilder, Validators } from '@angular/forms';
import { Time } from '@angular/common';
import { Selectedmovie } from '../selectedmovie';
@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {
id:number;
movieref:Movies;
array:number[];
selectedmovie:Selectedmovie;
i:number=1;
selectedseats:number;
  constructor(private aroute:ActivatedRoute,private movie:MoviesService,private builder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id'];
    
  
    this.movie.getmovie(this.id).subscribe(data=>{
    this.movieref=data;
    this.array=new Array<number>(this.movieref.seats);
    for(let i=0;i<this.array.length;i++)
    {
      this.array[i]=this.i;
      this.i=this.i+1;
    }
    });
  }

  bookpageform=this.builder.group({
   select:this.builder.control('',Validators.required)
  });
 
  action(time:Time)
  {
   this.selectedseats=this.bookpageform.controls.select.value;

   if(this.selectedseats!=0){
   this.selectedmovie=new Selectedmovie(this.movieref.id,this.movieref.moviename,this.movieref.price,this.selectedseats,this.selectedseats*this.movieref.price ,this.movieref.image,time);
    
sessionStorage.setItem('movieselected',JSON.stringify(this.selectedmovie));

this.router.navigate(['paynow']);
   }
   else{
    alert("select the seats first");
   }
  
  }

}
