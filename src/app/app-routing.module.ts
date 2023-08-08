import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';
import { RegisterComponent } from './register/register.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShowMovieDetailsComponent } from './show-movie-details/show-movie-details.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminreviewsComponent } from './adminreviews/adminreviews.component';
import { AdminmoviesComponent } from './adminmovies/adminmovies.component';
import { SearchmoviesComponent } from './searchmovies/searchmovies.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginSearchComponent } from './login-search/login-search.component';
const routes: Routes = [
  {path:'' ,component : HomepageComponent},
  {path:'login' ,component : LoginComponent },
  {path:'Admin/login' ,component : AdminloginComponent },
  {path:'about' ,component : AboutusComponent },
  {path:'newMovies' ,component : NewMoviesComponent },
  {path:'reviews' ,component : ReviewsComponent },
  {path:'register' ,component : RegisterComponent },
  {path:'showMovieDetails/:id',component:ShowMovieDetailsComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'viewmovie/:id',component:ViewmovieComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'adminusers',component:AdminusersComponent},
  {path:'adminreviews',component:AdminreviewsComponent},
  {path:'adminmovies',component:AdminmoviesComponent},
  {path:'search/movie',component:SearchmoviesComponent},
  {path:'forgot-password',component:ForgotpasswordComponent},
  {path:'login/search',component:LoginSearchComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
