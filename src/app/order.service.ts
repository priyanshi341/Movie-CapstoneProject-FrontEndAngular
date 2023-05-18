import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpclient:HttpClient) { }
  private uriapi='http://localhost:8080/orderid';

  saveorderid(order:Order):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,order);
  }

  getorder(id:number):Observable<Order>
  {
    return this.httpclient.get<Order>(`${this.uriapi}/${id}`);
  }

  getallorder():Observable<Order[]>
  {
    return this.httpclient.get<Order[]>(`${this.uriapi}`);
  }
}
