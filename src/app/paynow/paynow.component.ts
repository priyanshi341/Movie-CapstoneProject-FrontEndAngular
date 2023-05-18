import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';

import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { Selectedmovie } from '../selectedmovie';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { OrdertableService } from '../ordertable.service';
import { Ordertable } from '../ordertable';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.css']
})
export class PaynowComponent implements OnInit {
movie:Selectedmovie;
id:number;
data:any;
selectedmovie:Movies;
userid:number;
  constructor(private service:MoviesService,private router:Router,private orderservice:OrderService,private ordertableservice:OrdertableService) { }

  ngOnInit(): void {
    this.movie=JSON.parse(sessionStorage.getItem('movieselected'));
    this.userid=parseInt(sessionStorage.getItem('userdetail'));
  }

  paynowaction()
  {
    let order=new Order();
   this.orderservice.saveorderid(order).subscribe(data=>{
    this.data=data;
    console.log(this.data);
    let ordertable=new Ordertable(this.data,this.userid,this.movie.moviename,this.movie.ticketprice,new Date(),
   this.movie.seats,this.movie.totalpice);
   this.ordertableservice.saveorder(ordertable).subscribe(data=>{
    console.log("saved data to tabel successfully");
    
    this.service.getmovie(this.movie.id).subscribe(data=>{
      this.selectedmovie=data;
   
      this.selectedmovie.seats=this.selectedmovie.seats-this.movie.seats;
      this.service.updatemovie(this.selectedmovie,this.movie.id).subscribe(data=>{
        console.log("updated successfully");
        this.router.navigate(['useroredrdetail']);
      });
      });
   });
   })

   
    
  }
}
