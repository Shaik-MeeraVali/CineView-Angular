import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowMovieDetailsComponent } from './show-movie-details/show-movie-details.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { UserhomeComponent } from './userhome/userhome.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminreviewsComponent } from './adminreviews/adminreviews.component';
import { AdminmoviesComponent } from './adminmovies/adminmovies.component';
import { SearchmoviesComponent } from './searchmovies/searchmovies.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginSearchComponent } from './login-search/login-search.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
 
    AboutusComponent,
    NewMoviesComponent,
    ReviewsComponent,
    RegisterComponent,
    AdminloginComponent,
    ShowMovieDetailsComponent,
    UserhomeComponent,
    ViewmovieComponent,
    AdminhomeComponent,
    AdminusersComponent,
    AdminreviewsComponent,
    AdminmoviesComponent,
    SearchmoviesComponent,
    ForgotpasswordComponent,
    LoginSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
