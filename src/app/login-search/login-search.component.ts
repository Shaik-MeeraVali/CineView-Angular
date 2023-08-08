import { NgForOfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movies } from '../new-movies/new-movies.component';
import { NewMoviesService } from '../service/new-movies.service';
declare function noText():any;

@Component({
  selector: 'app-login-search',
  templateUrl: './login-search.component.html',
  styleUrls: ['./login-search.component.css']
})
export class LoginSearchComponent implements OnInit {
  user_name!:any
  user_token!:any
  s:any
  k:movies=new movies()
  movie!: movies[]
  movieName = ''
movies_list:any;
isPresent:any
  constructor(private router:Router,private activeRouter:ActivatedRoute ,private service:NewMoviesService) { }

  ngOnInit(): void {
  this.user_token= localStorage.getItem("userToken" )
  this.user_name=localStorage.getItem("userName" )
   console.log(this.user_token)
   console.log(this.user_name)
   this.activeRouter.queryParams
    .subscribe(params => {
      console.log(params); 
    console.log(params["movie"]);
    this.movieName=params["movie"];
    console.log(this.movieName);
    this.searchNewMovie(this.movieName);
    
    }
  );
 
  }
  searchNewMovie(k:string) {

    this.service.searchMovie(k).subscribe(data=> {
      console.log(data);
      this.movies_list = data;
      if(this.movies_list.length==0){
        this.isPresent=true
      }else{
        this.isPresent=false;
      }
    
      },err=> {
        console.log(err);
      });
    
    }
     searchMovie(){

       if(this.k === undefined){
         noText();
       }
  
       this.router.navigate(['login/search'],{ queryParams: {"movie": this.k.toString()}});
     }
 
 
 logout(){
   localStorage.removeItem("userName");
   localStorage.removeItem("userToken");
   this.router.navigate(['/login'])
  
 }

}
