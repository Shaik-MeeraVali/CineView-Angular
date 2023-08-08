import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewMoviesService } from '../service/new-movies.service';
declare function reviewDeleted():any;
declare function showSession():any;

@Component({
  selector: 'app-adminreviews',
  templateUrl: './adminreviews.component.html',
  styleUrls: ['./adminreviews.component.css']
})
export class AdminreviewsComponent implements OnInit {
allReviews!:any;
  constructor(private http:HttpClient,private service:NewMoviesService,private router:Router) { }

  ngOnInit(): void {
    this.getReviews();
  }
  onEdit(item:any){
    
    item.isEdit= true;
  }
  getReviews() {
    this.service.getReviews().subscribe(
      data => {
        console.log(data);
        this.allReviews = data;
      },(error)=>{
        console.log(error)
        if(error.status==403){
         showSession();
        }
      
      
      });

  }

  deleteReview(item:any){
    console.log(item);
this.service.deleteReview(item).subscribe(
data=>{
  console.log(data);

  reviewDeleted();
  setTimeout(function() {
    location. reload();
    }, 3000);

},(error)=>{
  console.log(error)
  if(error.status==403){
   showSession();
  }


});



  }
  logout(){
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    this.router.navigate(['/admin/login']);

}



}
