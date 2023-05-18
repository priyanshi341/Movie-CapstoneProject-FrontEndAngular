import { Time } from "@angular/common";


export class Selectedmovie {
    id:number;
    moviename:string;
    ticketprice:number;
    seats:number;
    totalpice:number;
    image:string;
    selectedtime:Time;
    constructor( id:number, moviename:string,ticketprice:number,seats:number,totalpice:number,image:string, selectedtime:Time)
    {
        this.id=id;
        this.moviename=moviename;
        this.ticketprice=ticketprice;
        this.seats=seats;
        this.totalpice=totalpice;
        this.image=image;
        this.selectedtime=selectedtime;
    }
}
