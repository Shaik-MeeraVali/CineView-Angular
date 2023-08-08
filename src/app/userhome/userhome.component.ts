import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movies } from '../new-movies/new-movies.component';
import { NewMoviesService } from '../service/new-movies.service';
import { review } from '../review';
declare function showSession():any;
declare function noText():any;

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
loginName!: any
k:movies=new movies();
movie!: movies[];
s:any
movieid:any
nb:any
constructor(
  private service:NewMoviesService,private router:Router,
 ) {}
  

ngOnInit(): void {
  if(localStorage.getItem('userName')==undefined && localStorage.getItem('userToken')==undefined){
    this.router.navigate(['/login']);
}

  this.loginName=localStorage.getItem("userName");
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
 searchMovie(){
   if(this.s === undefined){
     noText();
   }
 
   this.router.navigate(['login/search'],{ queryParams: {"movie": this.s.toString()}});

 }


logout(){
  localStorage.removeItem("userName");
  localStorage.removeItem("userToken");
  this.router.navigate(['/login'])
 
}

}
