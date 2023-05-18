import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Admin } from '../admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
adminid:number=0;
userid:number=0;
selecteduser:User;
user:User[];
admin:Admin;
msg:string="";
chk:boolean=false;
changemsg:string="";
msgcheck:boolean=false;
changecheck:boolean=false;
  constructor(private builder:FormBuilder,private adminservice:AdminService,private userservice:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.adminservice.getadmin(1).subscribe(data=>{
      this.admin=data;
    });
    this.userservice.getallusers().subscribe(data=>{
     this.user=data;
    });
  }

  forgotform=this.builder.group({
   email:this.builder.control('',Validators.required)
  });
  action()
  {
    if(this.forgotform.controls.email.value==this.admin.username)
    {
      this.adminid=this.admin.id;
      this.chk=true;
    }
    else{
   
      for(let i of this.user)
      {
        if(this.forgotform.controls.email.value==i.useremail || this.forgotform.controls.email.value==i.username)
        {
          this.userid=i.userid;
          this.chk=true;
        
        }
      }
      if(this.chk==false)
      {
        this.msgcheck=true;
         this.msg="Wrong Username or email";
      }
    }
  }

  changeform=this.builder.group({
  newpassword:this.builder.control('',Validators.required),
  confirmpassword:this.builder.control('',Validators.required)
  });

  changeaction()
  {
    if(this.changeform.controls.newpassword.value==this.changeform.controls.confirmpassword.value)
    {
       if(this.adminid==0)
       {
        this.userservice.getuserbyid(this.userid).subscribe(data=>{
         this.selecteduser=data;
         this.selecteduser.userpassword=this.changeform.controls.newpassword.value;
         this.userservice.updateuser(this.userid,this.selecteduser).subscribe(data=>{
            this.router.navigate(['login']);
         })
        });
       }
       else{
        this.adminservice.getadmin(1).subscribe(data=>{
        this.admin=data;
        this.admin.userpassword=this.changeform.controls.newpassword.value;
        this.adminservice.updateadmin(this.adminid,this.admin).subscribe(data=>{
          this.router.navigate(['login']);
        });
        });
       }
    }
    else{
      this.changecheck=true;
      this.changemsg="New Password and Conform Password didn't matched";
      
    }
  }
}
