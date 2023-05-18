import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient:HttpClient) { }
  private uriapi='http://localhost:8080/admin';

  getadmin(id:number):Observable<Admin>
  {
    return this.httpclient.get<Admin>(`${this.uriapi}/${id}`);
  }

  updateadmin(id:number,admin:Admin):Observable<object>{
    return this.httpclient.put(`${this.uriapi}/${id}`,admin);
  }

  checkadmin():boolean
  {
    return sessionStorage.getItem('admindetail')!=null;
  }
}
