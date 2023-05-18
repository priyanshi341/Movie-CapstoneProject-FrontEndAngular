import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userservice:UserService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
     if(this.userservice.checkuser()==true)
     {
      let uri=route.url[0].path;
      if(uri=="userhomepage" || uri=="viewallforuser" || uri.match("bookpage") || uri=="paynow" || uri=="useroredrdetail" || uri.match("selectedcategory") )
      {
        return true;
      }
     }
     else{
     this.router.navigate(['login']);
      return false;
     }
    return false;
  }
  
}
