import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { save_user } from '../save_user';
import { NewMoviesService } from '../service/new-movies.service';
declare function successRegister():any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
save_user:save_user=new save_user();
isRedirect:boolean = false; 

  constructor(private http:HttpClient,private service:NewMoviesService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.service.registerService(this.save_user).subscribe(data=>
    {
      console.log(data)
      successRegister()
      this.isRedirect=true
    
    },error=>{console.log(error)});
  }

}
