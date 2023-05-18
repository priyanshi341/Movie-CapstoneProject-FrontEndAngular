import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { Router } from '@angular/router';
import { Selectedmovie } from '../selectedmovie';
import { OrdertableService } from '../ordertable.service';
import { Ordertable } from '../ordertable';

@Component({
  selector: 'app-displaymovieorder',
  templateUrl: './displaymovieorder.component.html',
  styleUrls: ['./displaymovieorder.component.css']
})
export class DisplaymovieorderComponent implements OnInit {
movie:Selectedmovie;
ordertable:Ordertable[];
selectedordertable:Ordertable[]=[];
userid:number;
chk:boolean=false;
  constructor(private router:Router,private ordertableservice:OrdertableService) { }

  ngOnInit(): void {
    this.userid=parseInt(sessionStorage.getItem('userdetail'));
    this.movie=JSON.parse(sessionStorage.getItem('movieselected'));
    if(this.movie==null)
    {
      this.chk=false;
    }
    else{
      this.chk=true;
    }
    this.ordertableservice.getallorders().subscribe(data=>{
      this.ordertable=data;
   for(let i of this.ordertable)
   {
    if(i.userid==this.userid)
    {
      this.selectedordertable.push(i);
    }
   }
    });
  }

}
