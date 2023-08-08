import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewMoviesService } from '../service/new-movies.service';

@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.css']
})
export class SearchmoviesComponent implements OnInit {
movieName = ''
movies_list:any;
isPresent:boolean = false;
  constructor(private activeRouter:ActivatedRoute,private service:NewMoviesService) { }

  ngOnInit(): void {
    this.activeRouter.queryParams
    .subscribe(params => {
      console.log(params); 
    console.log(params["movie"]);
    this.movieName=params["movie"];
    console.log(this.movieName);
    this.searchMovie(this.movieName);
    
    }
  );
  }

  searchMovie(k:string) {

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
}
