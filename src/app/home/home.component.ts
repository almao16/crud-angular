import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router, ) { }

  ngOnInit(): void {
  }
  closeSesion(){
    if(localStorage.getItem('token')){
      localStorage.clear()
      this.router.navigate(['login'])
    }
  }
}
