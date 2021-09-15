import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SwibAssurence';
 
  constructor( private router:Router, private authService: AuthService){}
 
 ngOnInit(){
//this.router.navigateByUrl('/acceuil');
}
}
