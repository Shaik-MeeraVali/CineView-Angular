import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { add_movie } from '../add_movie';
import { NewMoviesService } from '../service/new-movies.service';
import { update_movie } from '../update_movie';

declare function movieEdited():any;
declare function movieDeleted():any;
declare function movieAdded():any;
declare function showSession():any;
@Component({
  selector: 'app-adminmovies',
  templateUrl: './adminmovies.component.html',
  styleUrls: ['./adminmovies.component.css']
})
export class AdminmoviesComponent implements OnInit {
  add_movie:add_movie=new add_movie();
  update_movie:update_movie=new update_movie();
allMovies!:any;
k:any
  constructor(private http:HttpClient,private service:NewMoviesService,private router:Router) { }

  ngOnInit(): void {
    this.getMovies();
  
  
  }
  onEdit(item:any){ 
    item.isEdit= true;
  }

  getMovies() {
    this.service.getallMovies().subscribe(
      data => {
        console.log(data);
        this.allMovies = data;
      },error=>{
        console.log(error)
        if(error.status==403){
         showSession();
        }
      
      
      });
  }

  editMovie(item:any,k:update_movie){
    console.log(item);
    console.log(k.director)
    this.service.editMovie(item,k).subscribe(
      data => {
        console.log(data);

        movieEdited();
        setTimeout(function() {
          location. reload();
          }, 3000);
      
      },error=>{
        console.log(error)
        if(error.status==403){
         showSession();
        }
      
      
      });
    
  }
  deleteMovie(item:any){
    console.log(item);
this.service.deleteMovie(item).subscribe(
data=>{
  console.log(data);

  movieDeleted();
  setTimeout(function() {
    location. reload();
    }, 3000);

},error=>{
  console.log(error)
  if(error.status==403){
   showSession();
  }


});

  }
  addMovie(){
    console.log(this.add_movie.director);
  this.service.addMovie(this.add_movie).subscribe(
  data=>{
  console.log(data);
  
  movieAdded();
  setTimeout(function() {
    location. reload();
    }, 3000);
  
  },error=>{
    console.log(error)
    if(error.status==403){
     showSession();
    }
  
  
  });
  
  }


  logout(){
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    this.router.navigate(['/Admin/login']);

}
}




