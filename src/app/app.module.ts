import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from  '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { DisplaylistofordersforadminnComponent } from './displaylistofordersforadminn/displaylistofordersforadminn.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddcategoryComponent,
    AddmovieComponent,
    ViewallmovieforuserComponent,
    BookpageComponent,
    PaynowComponent,
    DisplaymovieorderComponent,
    UserhomepageComponent,
    SelectedcategoryComponent,
    SignupComponent,
    LoginComponent,
    ViewallforadminComponent,
    MovieselectedComponent,
    UpdatemovieComponent,
    ForgotpasswordComponent,
    DisplaylistofordersforadminnComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
