import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function noText():any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  k:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  searchMovie(){
    if(this.k === undefined){
      noText();
    }
    this.router.navigate(['/search/movie'],{ queryParams: {"movie": this.k.toString()}});






  }

}
