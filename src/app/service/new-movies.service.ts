import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { add_movie } from '../add_movie';
import { admin_login } from '../admin_login';
import { getmovies } from '../getmovies';
import { getreviews } from '../getreviews';
import { movies, tokenResponse } from '../new-movies/new-movies.component';
import { review } from '../review';
//import { Review } from '../reviews/reviews.component';
import { save_user } from '../save_user';
import { update_movie } from '../update_movie';
import { update_users } from '../update_users';
import {User} from '../user';
import { user_length } from '../user_length';
declare function requiredComments():any

@Injectable({
  providedIn: 'root'
})
export class NewMoviesService {
tokenResponse: any;
  constructor(
    private http:HttpClient
  ) { }

  retrieveAllmovies():Observable<object>
   {
     return this.http.get<movies[]>(`http://localhost:9192/user/movies`);

   }
   retrievemovies(id:any)
   {
   return this.http.get<movies>(`http://localhost:9192/user/movie/`+id);
   }
   Authenticate(user: User): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
  }
    console.log(user);
    return this.http.post(`http://localhost:9192/authenticate`,user,httpOptions)
  }
  public postReview(review:review): Observable<object>{
    console.log(review.title);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '  +localStorage.getItem('userToken'),
        responseType: 'text' as 'json'

    })
  }
  if(review.comments==undefined){
    console.log('empty comments');
    return requiredComments();
  }
    return this.http.post(`http://localhost:9192/user/writecomments`,review,httpOptions)

  }

  public admin_authenticate(admin_cred:admin_login):Observable<object>{

    return this.http.post(`http://localhost:8292/admin/authenticate`,admin_cred);
  }
  public getUserLength(): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),
       
    })
  }
 return this.http.get<user_length[]>(`http://localhost:8292/admin/users`,httpOptions)
  }


  public getCommentsLength(): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),
       
    })
  }
 return this.http.get<getreviews[]>(`http://localhost:8292/admin/comments`,httpOptions)
  }
  public getMoviesLength():Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),    
    })
  }
  return this.http.get<getmovies[]>(`http://localhost:8292/admin/movies`,httpOptions)
  }
public registerService(user:save_user):Observable<object>{
  return this.http.post(`http://localhost:9192/user/save`,user);
}
public getAllUsers():Observable<object>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),    
  })
}
return this.http.get(`http://localhost:8292/admin/users`,httpOptions);

}

public getReviews(): Observable<object>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),    
  })
}
return this.http.get(`http://localhost:8292/admin/comments`,httpOptions);



}
public getallMovies(): Observable<object>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),    
  })
}
return this.http.get(`http://localhost:8292/admin/movies`,httpOptions);

}

public deleteReview(id: number): Observable<object>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),    
  })
} 
console.log(id);
return this.http.delete(`http://localhost:8292/admin/deletereview/${id}`,httpOptions);

}

public editMovie(id: number,k:update_movie): Observable<object>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),    
  })
} 
console.log(id);

return this.http.put(`http://localhost:8292/admin/update/${id}`,k,httpOptions);

}

public deleteMovie(id: number): Observable<object>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),    
  })
} 
console.log(id);
return this.http.delete(`http://localhost:8292/admin/deletemovie/${id}`,httpOptions);

}
public editUser(id: number,k:update_users): Observable<object>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),    
  })
} 
console.log(id);

return this.http.put(`http://localhost:8292/admin/updateuser/${id}`,k,httpOptions);

}

public deleteUser(id: number): Observable<object>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),    
  })
} 
console.log(id);
return this.http.delete(`http://localhost:8292/admin/deleteuser/${id}`,httpOptions);

}
public addMovie(add_movie:add_movie):Observable<object>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '  +localStorage.getItem('adminToken'),    
  })
} 
console.log(add_movie.director);
  return this.http.post(`http://localhost:8292/admin/addmovie`,add_movie,httpOptions);
}

public searchMovie(movie:string){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
         
  })
} 

  return this.http.get(`http://localhost:9192/user/searchmovies/${movie}`,httpOptions);
}


public checkuser(user:string){
  return this.http.get(`http://localhost:9192/user/search/${user}`);
}

public updatePassword(user:string, password:string){
  return this.http.put(`http://localhost:9192/user/updatepassword/${user}`,password);
}

}