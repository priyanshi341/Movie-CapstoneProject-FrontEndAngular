import { Component, OnInit } from '@angular/core';
import { OrdertableService } from '../ordertable.service';
import { Ordertable } from '../ordertable';

@Component({
  selector: 'app-displaylistofordersforadminn',
  templateUrl: './displaylistofordersforadminn.component.html',
  styleUrls: ['./displaylistofordersforadminn.component.css']
})
export class DisplaylistofordersforadminnComponent implements OnInit {
ordertable:Ordertable[];
  constructor(private orderservice:OrdertableService) { }

  ngOnInit(): void {
    this.orderservice.getallorders().subscribe(data=>{
    this.ordertable=data;
    });
  }

}
