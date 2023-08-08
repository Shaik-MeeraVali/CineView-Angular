import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewMoviesService } from '../service/new-movies.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User=new User();
tokenResponse:any
  constructor(private http:HttpClient,private service:NewMoviesService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.user)
    this.service.Authenticate(this.user).subscribe(data=>
      {
        console.log(data)
        this.tokenResponse=data
        localStorage.setItem("userToken", this.tokenResponse.bearerToken);
        localStorage.setItem("userName", this.tokenResponse.userId);
        this.router.navigate(['/userhome']);
      
      },error=>{console.log(error)});
  }

}
