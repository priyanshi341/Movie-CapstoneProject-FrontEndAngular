export class Ordertable {
    id:number;
    orderid:number;
    userid:number;
    moviename:string;
    ticketprice:number;
    date:Date;
    bookedseats:number;
    totalprice:number;
   constructor(orderid:number, userid:number,moviename:string,ticketprice:number,date:Date,bookedseats:number,
    totalprice:number)
    {
      
        this.orderid=orderid;
        this.userid=userid;
        this.moviename=moviename;
        this.ticketprice=ticketprice;
        this.date=date;
        this.bookedseats=bookedseats;
        this.totalprice=totalprice;
    }
}
