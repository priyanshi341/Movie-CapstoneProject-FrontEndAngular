import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {
category:Category[];
  constructor(private service:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.service.getallcategory().subscribe(data=>{
    this.category=data;
    });
  }

  action(id:number)
  {
    this.router.navigate(['selectedcategory',id]);
  }
}
