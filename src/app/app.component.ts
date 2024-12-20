import { Component } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}  // Inject Router ใน constructor
  title = 'my-angular';
  count = 100;
  onClick(){
    this.count--;
    // console.log('clicked');
    this.router.navigate(['home']); 
  }
}
