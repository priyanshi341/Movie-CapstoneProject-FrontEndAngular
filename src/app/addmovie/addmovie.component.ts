import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { Category } from '../category';
import { Movies } from '../movies';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
category:Category[];
getselectedcategory:Category;
getselectedid:number;
selectedfile:File;
path:string;
enabledordisabld:boolean;
  constructor(private builder:FormBuilder,private movieservice:MoviesService,private service:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.service.getallcategory().subscribe(data=>{
     this.category=data;
    });
  }

  fileaction(event)
  {
    this.selectedfile=event.target.files[0];
     this.path="/assets/Image/"+this.selectedfile.name.toString();
  }


  movieform=this.builder.group({
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

 buttonaction()
 {
  this.getselectedid=this.movieform.controls.selectcategory.value;
  console.log(this.getselectedid);
  this.service.getcategory(this.getselectedid).subscribe(data=>{
     this.getselectedcategory=data;
     if(this.movieform.controls.enabled.value=="enabled")
     {
      this.enabledordisabld=true;
     }
     else{
      this.enabledordisabld=false;
     }

     var movieref=new Movies(this.movieform.controls.name.value,this.movieform.controls.price.value,this.path,this.movieform.controls.seats.value,
      this.movieform.controls.time1.value,  this.movieform.controls.time2.value,  this.movieform.controls.time3.value
      ,  this.movieform.controls.time4.value,this.enabledordisabld,this.getselectedcategory);
      this.movieservice.savemovie(movieref).subscribe(data=>{
        alert("data added successfully");
      });
  });
 }

}
