import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormBuilder,Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
msg:string="";
user:User[];
chk:boolean=false;
check:boolean=false;
  constructor(private router:Router,private builder:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getallusers().subscribe(data=>{
    this.user=data;
    });
  }

  signupform=this.builder.group({
    username:this.builder.control('',Validators.required),
    useremail:this.builder.control('',Validators.required),
    useraddress:this.builder.control('',Validators.required),
    userphone:this.builder.control('',[Validators.required,Validators.minLength(10)]),
    userpassword:this.builder.control('',[Validators.required,Validators.pattern('[a-z0-9]+[A-Z]+'),Validators.minLength(8)])
  });

  buttonaction()
  {

    for(let i of this.user)
    {
      if(this.signupform.controls.username.value==i.username || this.signupform.controls.useremail.value==i.useremail)
      {
       this.chk=true;
      }
    }
    if(this.chk==true)
    {
      this.check=true;
      this.msg="user already exist";
    }
    else{
      this.userservice.saveuser(this.signupform.value).subscribe(data=>{
        this.router.navigate(['login']);
       });
    }
    
  }
  

}
