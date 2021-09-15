import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  loggedinUser!: string;
  
  constructor(private authService: AuthService,private service : SharedService, private router :Router) { }

  ngOnInit(): void { 

  }

  onSignOut(){
    this.router.navigateByUrl('/auth');
    localStorage.clear();
  }

  loggedin(){
    return localStorage.getItem('nom');
  }

}
