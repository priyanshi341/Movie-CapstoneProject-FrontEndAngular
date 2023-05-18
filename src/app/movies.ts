import { Time } from "@angular/common";
import { Category } from "./category";

export class Movies {
id:number;
moviename:string;
price:number;
image:string;
seats:number;
time1:Time;
time2:Time;
time3:Time;
time4:Time;
enabled:boolean;
category:Category;
constructor(moviename:string,price:number,image:string,seats:number,time1:Time,time2:Time,time3:Time,time4:Time,
    enabled:boolean,category:Category)
{
  this.moviename=moviename;
  this.price=price;
  this.image=image;
  this.seats=seats;
  this.time1=time1;
  this.time2=time2;
  this.time3=time3;
  this.time4=time4;
  this.enabled=enabled;
  this.category=category;
}
}
