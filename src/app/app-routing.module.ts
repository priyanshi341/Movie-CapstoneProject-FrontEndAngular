import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ViewallmovieforuserComponent } from './viewallmovieforuser/viewallmovieforuser.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { PaynowComponent } from './paynow/paynow.component';
import { DisplaymovieorderComponent } from './displaymovieorder/displaymovieorder.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { SelectedcategoryComponent } from './selectedcategory/selectedcategory.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { ViewallforadminComponent } from './viewallforadmin/viewallforadmin.component';
import { MovieselectedComponent } from './movieselected/movieselected.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';
import { DisplaylistofordersforadminnComponent } from './displaylistofordersforadminn/displaylistofordersforadminn.component';


const routes: Routes = [
  {path:"userhomepage",component:UserhomepageComponent,canActivate:[UserGuard]},
  {path:"addcategory",component:AddcategoryComponent,canActivate:[AdminGuard]},
  {path:"addmovie",component:AddmovieComponent,canActivate:[AdminGuard]},
  {path:"viewallforuser",component:ViewallmovieforuserComponent,canActivate:[UserGuard]},
  {path:"bookpage/:id",component:BookpageComponent,canActivate:[UserGuard]},
  {path:"paynow",component:PaynowComponent,canActivate:[UserGuard]},
  {path:"useroredrdetail",component:DisplaymovieorderComponent,canActivate:[UserGuard]},
  {path:"selectedcategory/:id",component:SelectedcategoryComponent,canActivate:[UserGuard]},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"selectedbyadmin/:id",component:MovieselectedComponent,canActivate:[AdminGuard]},
  {path:"viewallforadmin",component:ViewallforadminComponent,canActivate:[AdminGuard]},
  {path:"updatemovie/:id",component:UpdatemovieComponent,canActivate:[AdminGuard]},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"orderlist",component:DisplaylistofordersforadminnComponent,canActivate:[AdminGuard]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
