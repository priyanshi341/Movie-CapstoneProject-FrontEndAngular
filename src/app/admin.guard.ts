import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private adminservice:AdminService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.adminservice.checkadmin()==true)
      {
       var uri=route.url[0].path;
       if(uri=="addcategory" || uri=="addmovie" || uri.match("selectedbyadmin") 
       || uri=="viewallforadmin" || uri.match("updatemovie") || uri=="orderlist")
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
