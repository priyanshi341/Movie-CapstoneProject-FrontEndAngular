import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private builder:FormBuilder,private categoryservice:CategoryService,private router:Router) { }

  ngOnInit(): void {
  }
  categoryform=this.builder.group({
    name:this.builder.control('',Validators.required)
  });

  buttonaction()
  {
    this.categoryservice.savecategory(this.categoryform.value).subscribe(data=>{
     alert("category added successfully");
    });
  }
}
