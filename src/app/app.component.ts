import { Component, DoCheck } from '@angular/core';
import { CategoryService } from './category.service';
import{OnInit}from '@angular/core';
import { Category } from './category';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck{
  category:Category[];
  isnavbar:boolean=false;
  isnavbarlogin:boolean=false;
  isnavbaruser:boolean=false;
  isnavbaradmin:boolean=false;
  constructor(private service:CategoryService,private router:Router){}

  ngOnInit(): void {
  
    this.service.getallcategory().subscribe(data=>{
     
          this.category=data;
      
    });
  }

  ngDoCheck(): void {
      var uriap=this.router.url;
      if(uriap=="/")
      {
        this.isnavbar=true;
        this.isnavbarlogin=false;
        this.isnavbaradmin=false;
        this.isnavbaruser=false;
      }
      else if(uriap=="/login" || uriap=="/signup" || uriap=="/forgotpassword"){
        this.isnavbarlogin=true;
        this.isnavbar=false;
        this.isnavbaruser=false;
        this.isnavbaradmin=false;
      }
      else if(uriap=="/viewallforuser" || uriap=="/paynow" || uriap=="/useroredrdetail" || uriap.match("/bookpage")
      || uriap.match("/selectedcategory"))
      {
        this.isnavbaradmin=false;
         this.isnavbaruser=true;
         this.isnavbar=false;
        this.isnavbarlogin=false;
      }
      else if(uriap=="/addcategory" || uriap=="/addmovie" || uriap=="/viewallforadmin" || 
      uriap.match("/selectedbyadmin") || uriap.match("/updatemovie") || uriap=="/orderlist"){
        this.isnavbaradmin=true;
        this.isnavbarlogin=false;
        this.isnavbar=false;
        this.isnavbaruser=false;
        
      }
      else {
        this.isnavbaradmin=false;
        this.isnavbar=false;
        this.isnavbarlogin=false;
        this.isnavbaruser=false;
      }
  }

  
  title = 'MovieCapstopnProject';
}
