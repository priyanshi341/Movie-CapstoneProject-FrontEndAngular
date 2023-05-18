import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordertable } from './ordertable';
@Injectable({
  providedIn: 'root'
})
export class OrdertableService {

  constructor(private httpclient:HttpClient) { }
  private uriapi='http://localhost:8080/ordertable';

  saveorder(order:Ordertable):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,order);
  }
  getorderbyid(id:number):Observable<Ordertable>
  {
    return this.httpclient.get<Ordertable>(`${this.uriapi}/${id}`);
  }
  getallorders():Observable<Ordertable[]>
  {
    return this.httpclient.get<Ordertable[]>(`${this.uriapi}`);
  }
  
}
