import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { MoviesService } from '../movies.service';
import { Category } from '../category';
import { Movies } from '../movies';
import { FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {
category:Category[];
movie:Movies;
id:number;
msg:string;
path:string="";
selectedfile:File;
selectedcategoryid:number;
selectedcategory:Category;
  constructor(private aroute:ActivatedRoute,private router:Router,private categoryservice:CategoryService
    ,private movieservice:MoviesService,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.categoryservice.getallcategory().subscribe(data=>{
    this.category=data;
    });
    this.id=this.aroute.snapshot.params['id'];
    this.movieservice.getmovie(this.id).subscribe(data=>{
     this.movie=data;
     this.path=this.movie.image;
     console.log(this.movie);
    });
  }

  updatemovie=this.builder.group({
    name:this.builder.control('',Validators.required),
    price:this.builder.control('',Validators.required),
    seats:this.builder.control('',Validators.required),
    time1:this.builder.control('',Validators.required),
    time2:this.builder.control('',Validators.required),
    time3:this.builder.control('',Validators.required),
    time4:this.builder.control('',Validators.required),
    enabled:this.builder.control('',Validators.required),
    selectcategory:this.builder.control('',Validators.required)
    });

    fileaction(event)
    {
     let newpath:string="/assets/Image/";
     this.selectedfile=event.target.files[0];
     newpath=newpath+this.selectedfile.name.toString();
     this.path=newpath;
    }
    action()
    {
     this.selectedcategoryid=this.updatemovie.controls.selectcategory.value;
   if(this.selectedcategoryid>=1)
   {
    this.categoryservice.getcategory(this.selectedcategoryid).subscribe(data=>{
      this.selectedcategory=data;
      
      let updatedmovieref= new Movies(this.updatemovie.controls.name.value,this.updatemovie.controls.price.value,
        this.path, this.updatemovie.controls.seats.value,this.updatemovie.controls.time1.value,
        this.updatemovie.controls.time2.value, this.updatemovie.controls.time3.value, this.updatemovie.controls.time4.value,
        this.updatemovie.controls.enabled.value,this.selectedcategory);
        this.movieservice.updatemovie(updatedmovieref,this.id).subscribe(data=>{
          console.log("updated successfully");
          this.router.navigate(['viewallforadmin']);
          });
          });
   }
   else{
    let updatedmovieref= new Movies(this.updatemovie.controls.name.value,this.updatemovie.controls.price.value,
      this.path, this.updatemovie.controls.seats.value,this.updatemovie.controls.time1.value,
      this.updatemovie.controls.time2.value, this.updatemovie.controls.time3.value, this.updatemovie.controls.time4.value,
      this.updatemovie.controls.enabled.value,this.movie.category);
      this.movieservice.updatemovie(updatedmovieref,this.id).subscribe(data=>{
        console.log("updated successfully");
        this.router.navigate(['viewallforadmin']);
        });
   }
   
    
    }
}
