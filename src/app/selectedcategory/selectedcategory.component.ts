import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';

@Component({
  selector: 'app-selectedcategory',
  templateUrl: './selectedcategory.component.html',
  styleUrls: ['./selectedcategory.component.css']
})
export class SelectedcategoryComponent implements OnInit {
id:number;
movie:Movies[];
selectedmovie:Movies[]=[];
  constructor(private aroute:ActivatedRoute,private service:MoviesService,private router:Router) { }

  ngOnInit(): void {
this.id=this.aroute.snapshot.params['id'];
this.service.getallmovies().subscribe(data=>{
this.movie=data;
for(let i of this.movie )
{
  if(i.category.id==this.id)
  {
    this.selectedmovie.push(i);
  }
}
});
  }

  
  action(id:number)
  {
    this.router.navigate(['bookpage',id]);
  }

}
