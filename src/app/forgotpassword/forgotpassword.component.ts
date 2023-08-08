import { Component, Input, OnInit } from '@angular/core';
// import { NgControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NewMoviesService } from '../service/new-movies.service';
declare function userPresent(): any ;
declare function userNotPresent(): any ;
declare function successupdate(): any ;

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
 
 
  isPresent!:boolean;
    username!:string;
    server!:any;
    password!:string;
    isRedirect!:boolean;
    

  constructor(private service:NewMoviesService,private router:Router) { }

  ngOnInit(): void {
    this.isPresent=false;
  }
checkUserName(){
  this.service.checkuser(this.username).subscribe(data=>{
    
   console.log(data); 
   this.server = data
   console.log(this.server.length)


   if(this.server.length==1){
     this.isPresent=true;
     userPresent();
    
   }

   if(this.server.length==0){
    this.isPresent=false;
    userNotPresent();
  }
  })
  

}

updatePassword(){
  this.service.updatePassword(this.username,this.password).subscribe(data=>{
    console.log(data); 
    successupdate();
    this.isRedirect=true

    setTimeout(() => {
      
      this.router.navigate(['/login']);
      }, 5000);
  },error=>{console.log(error)});

}
redirectLogin(){
  this.router.navigate(['/login']);
}



}
