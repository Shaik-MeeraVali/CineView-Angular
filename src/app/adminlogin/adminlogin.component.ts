import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin_login } from '../admin_login';
import { NewMoviesService } from '../service/new-movies.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin_cred:admin_login=new admin_login();
  tokenResponse:any
  constructor(private http:HttpClient,private service:NewMoviesService,private router:Router) { }
  ngOnInit(): void {
  }
  admin_authenticate(){
    console.log(this.admin_cred)
    this.service.admin_authenticate(this.admin_cred).subscribe(data=>
      {
        console.log(data)
        this.tokenResponse=data
        localStorage.setItem("adminToken", this.tokenResponse.bearerToken);//from new movies
        localStorage.setItem("adminName", this.tokenResponse.userId);
        this.router.navigate(['/adminhome']);
      
      },error=>{console.log(error)});
  }
  logout(){
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    this.router.navigate(['/admin/login']);

}
}
