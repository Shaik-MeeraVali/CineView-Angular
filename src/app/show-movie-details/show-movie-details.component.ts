import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { movies } from '../new-movies/new-movies.component';
import { NewMoviesService } from '../service/new-movies.service';

@Component({
  selector: 'app-show-movie-details',
  templateUrl: './show-movie-details.component.html',
  styleUrls: ['./show-movie-details.component.css']
})
export class ShowMovieDetailsComponent implements OnInit {
  k:movies=new movies();
  movie!: movies[];
  movieid:any;
  nb:any;
  
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,  private service:NewMoviesService) { 
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieid=id
    
  }

  ngOnInit(): void {
    this.service.retrievemovies(this.movieid).subscribe(
      response =>{
        console.log(response);
       this.nb=response
       console.log(this.nb)
      
       
      }
    )
  }

  



  
  }


