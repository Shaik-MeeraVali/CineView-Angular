import { Component, OnInit } from '@angular/core';
import { NewMoviesService } from '../service/new-movies.service';
import { AppComponent } from '../app.component';
declare function showSession():any;
export class movies{
  
    public id!:number;
    public language!:string;
    public releasing_year!:number;
    public imgUrl!:string;
    public title!:string;
    public genre!:string;
  
}

export class tokenResponse{
  constructor(
    public bearerToken:string,
    public message:string,
  
  ){}
}
@Component({
  selector: 'app-new-movies',
  templateUrl: './new-movies.component.html',
  styleUrls: ['./new-movies.component.css']
})
export class NewMoviesComponent implements OnInit {
  k:movies=new movies();
  movie!: movies[];
  constructor(
    private service:NewMoviesService
  ) { }

  ngOnInit(): void {
    this.service.retrieveAllmovies().subscribe(
      response =>{
        console.log(response);
        this.movie=Array.prototype.slice.call(response)
       
      },error=>{
        console.log(error)
        if(error.status==403){
         showSession();
        }
      
      
      }
    )
  }
 
}
