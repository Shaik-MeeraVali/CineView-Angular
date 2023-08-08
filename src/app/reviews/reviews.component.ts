import { Component, OnInit } from '@angular/core';
import { NewMoviesService } from '../service/new-movies.service';
import { ReviewService } from '../service/review.service';
declare function showSession():any;

export class Review{
  constructor(
    public id:number,
    public moviename:string,
    public release_year:number,
    public description:string,
    public comments:string
  ){

  }
  
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
 review!: Review[];
  constructor(
    private serv:ReviewService
  ) { }

  ngOnInit(): void {
  this.serv.retrieveallReviews().subscribe(
    response =>{
      console.log(response);
      this.review= response;
    },error=>{
      console.log(error)
      if(error.status==403){
       showSession();
      }
    
    
    }
  )
  }



}
