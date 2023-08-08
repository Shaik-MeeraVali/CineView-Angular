import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Review } from '../reviews/reviews.component';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveallReviews()
  {
    return this.http.get<Review[]>(`http://localhost:9192/User/movies/1`);
   
  }
  


}
