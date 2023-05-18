import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallmovieforuser',
  templateUrl: './viewallmovieforuser.component.html',
  styleUrls: ['./viewallmovieforuser.component.css']
})
export class ViewallmovieforuserComponent implements OnInit {
movie:Movies[];
selectedmovies:Movies[]=[];
selectedmovie:Movies;
p:number=1;
ename:string="";
Key:string='moviename';
reverse:boolean=false;
  constructor(private movieservice:MoviesService,private router:Router) { }

  ngOnInit(): void {
   this.method();
  }

  method()
  {
    this.movieservice.getallmovies().subscribe(data=>{
      this.movie=data;
      for(let i of this.movie)
      {
       if(i.enabled==true)
       {
         this.selectedmovies.push(i);
       }
      }
     });
  }

  action(id:number)
  {
    this.movieservice.getmovie(id).subscribe(data=>{
     this.selectedmovie=data;
     if(this.selectedmovie.seats==0)
     {
      alert("No More Seta Available");
     } 
     else{
      this.router.navigate(['bookpage',id]);
     }
    });
   
  }

  search()
  {
    if(this.ename=="")
    {
      this.method();
    }
    else{
      this.selectedmovies=this.selectedmovies.filter(res=>{
        return res.moviename.toLocaleLowerCase().match(this.ename);
      });
    }
  }

sort(Key)
{
  this.Key=Key;
  this.reverse=!this.reverse;
}

}
