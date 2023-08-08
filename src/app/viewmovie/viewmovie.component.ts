import { HttpClient } from '@angular/common/http';
//import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movies } from '../new-movies/new-movies.component';
import { review } from '../review';
declare function showSession():any;
import { NewMoviesService } from '../service/new-movies.service';
declare function successReview(): any;

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})

export class ViewmovieComponent implements OnInit {
  review:review=new review();
  loginName!:any
  k:movies=new movies();
  movie!: movies;
  movieid:any;
  nb:any;
  movieName!: string;

  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,  private service:NewMoviesService,private router:Router) { 
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieid=id
    
  }

  ngOnInit(): void {
    if(localStorage.getItem('userName')==undefined && localStorage.getItem('userToken')==undefined){
          this.router.navigate(['/login']);
    }




    this.loginName=localStorage.getItem("userName")
    this.service.retrievemovies(this.movieid).subscribe(
      response =>{
        console.log(response);
       
        
       this.nb=response
       console.log(this.nb)
      
       
      },error=>{
        console.log(error)
        if(error.status==403){
         showSession();
        }
      
      
      }
    )
  }


  postReview() {
    this.review.title=this.nb.movieName
    this.review.movieId=this.movieid
    
    this.service.postReview(this.review).subscribe(
      
      response => {
        successReview();
        console.log(response)

      },error=>{
        console.log(error)
        if(error.status==403){
         showSession();
        }
      
      
      }
      
      
      );
    }

    logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("userToken");
      this.router.navigate(['/login'])
     
    }



}
