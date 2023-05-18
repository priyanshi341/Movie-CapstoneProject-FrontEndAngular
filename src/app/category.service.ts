import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient:HttpClient) { }

  private uriapi='http://localhost:8080/category';

  savecategory(category:Category):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,category);
  }

  updatecategory(category:Category,id:number):Observable<object>
  {
    return this.httpclient.put(`${this.uriapi}/${id}`,category);
  }

  getcategory(id:number):Observable<Category>
  {
    return this.httpclient.get<Category>(`${this.uriapi}/${id}`);
  }

  getallcategory():Observable<Category[]>
  {
    return this.httpclient.get<Category[]>(`${this.uriapi}`);
  }

  deletecategory(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.uriapi}/${id}`);
  }
}
