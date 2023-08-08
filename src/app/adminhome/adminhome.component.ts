import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getmovies } from '../getmovies';
import { getreviews } from '../getreviews';
import { NewMoviesService } from '../service/new-movies.service';
import { user_length } from '../user_length';
declare function showSession():any;

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
//movies,comments,reviews length  
userLength!: number;
moviesLength!: number;
commentsLength!: number;
review!: any;
//users reviews commetns objects
userl:user_length=new user_length();
userlm!:user_length[]

comments:getreviews=new getreviews();
commentsarray!:getreviews[];

movies:getmovies=new getmovies();
moviesarray!:getmovies[];





  constructor(private http:HttpClient,private service:NewMoviesService,private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('adminName')==undefined && localStorage.getItem('adminToken')==undefined){
      this.router.navigate(['/Admin/login']);
  }


    this.getUsersLength();
    this.getMoviesLength();
    this.getCommentsLength();

  }

getUsersLength(): any {
  this.service.getUserLength().subscribe(  // here subscribe function is deprecated but its functionality is working 
    response =>{
      this.userlm=Array.prototype.slice.call(response)
      this.userLength=this.userlm.length
     console.log(this.userlm.length);
    },error=>{
      console.log(error)
      if(error.status==403){
       showSession();
      }
    
    
    }
  )

}
getCommentsLength(): any {
  this.service.getCommentsLength().subscribe(
    response =>{
      this.commentsarray=Array.prototype.slice.call(response)
      this.commentsLength=this.commentsarray.length
     
    },error=>{
      console.log(error)
      if(error.status==403){
       showSession();
      }
    
    
    }
  )

}
getMoviesLength(): any {
  this.service.getMoviesLength().subscribe(
    response =>{
      this.moviesarray=Array.prototype.slice.call(response)
      this.moviesLength=this.moviesarray.length
     
    },error=>{
      console.log(error)
      if(error.status==403){
       showSession();
      }
    
    
    })



}
logout(){
localStorage.removeItem('adminToken')
localStorage.removeItem('adminName')
this.router.navigate(['Admin/login'])
}




}
