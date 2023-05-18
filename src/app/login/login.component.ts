import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { User } from '../user';
import { Admin } from '../admin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User[];
  chk:boolean=false;
  admin:Admin;
  msg:string="";
  check:boolean=false;
    constructor(private userservice:UserService,private builder:FormBuilder,private router:Router,private adminservice:AdminService) { 
      sessionStorage.clear();
    }
  
    ngOnInit(): void {
      
      this.userservice.getallusers().subscribe(data=>{
      this.user=data;
      });
      this.adminservice.getadmin(1).subscribe(data=>{
    this.admin=data;
      });
    }
  
    loginform=this.builder.group({
      username:this.builder.control('',Validators.required),
      userpassword:this.builder.control('',Validators.required)
    });
  
    buttonaction()
    {
      if(this.loginform.controls.username.value==this.admin.username && this.loginform.controls.userpassword.value==this.admin.userpassword)
      {
        
         this.router.navigate(['/addcategory']);
         sessionStorage.setItem('admindetail',this.admin.id.toString());
      }
      else{
        for(var i of this.user)
        {
          if((this.loginform.controls.username.value==i.useremail || this.loginform.controls.username.value==i.username)&& this.loginform.controls.userpassword.value==i.userpassword)
          {
            this.chk=true;
            sessionStorage.setItem('userdetail',i.userid.toString());
          }
        }
        if(this.chk==true)
        {
       
        this.router.navigate(['/userhomepage']);
        }
        else{
          this.check=true;
        this.msg="wrong username or password";
        }
      }
      
      
    }
}
