import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewMoviesService } from '../service/new-movies.service';
import { update_users } from '../update_users';
declare function userEdited():any;
declare function userDeleted():any;
declare function showSession():any;
@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {
  alluser!:any;

  constructor(private http:HttpClient,private service:NewMoviesService,private router:Router) { }

  ngOnInit(): void {
    this.getUser();
  }
  onEdit(item:any){
    item.isEdit = true;
  }

getUser(): void {
  this.service.getAllUsers().subscribe(
    response =>{
      console.log(response)
      this.alluser = response;
      
    
    },error=>{
      console.log(error)
      if(error.status==403){
       showSession();
      }
    
    
    }
  );

}

editUser(item:any,k:update_users){
  console.log(item);
  console.log(k.name)
  this.service.editUser(item,k).subscribe(
    data => {
      console.log(data);

      userEdited();
      setTimeout(function() {
        location. reload();
        }, 3000);
    
    },error=>{
      console.log(error)
      if(error.status==403){
       showSession();
      }
    
    
    });
  
}
deleteUser(item:any){
  console.log(item);
this.service.deleteUser(item).subscribe(
data=>{
console.log(data);

userDeleted();
setTimeout(function() {
  location. reload();
  }, 3000);

},error=>{
  console.log(error)
  if(error.status==403){
   showSession();
  }


});

}
logout(){
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminName");
  this.router.navigate(['/Admin/login']);

}


}

