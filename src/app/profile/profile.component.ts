import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Nom(){
    return localStorage.getItem('nom');
  }
  Cin(){
    return localStorage.getItem('cin');
  }
  Identite(){
    return localStorage.getItem('identite');
  }
  Phone(){
    return localStorage.getItem('phone');
  }
  Adresse(){
    return localStorage.getItem('adresse');
  }
  Nationalite(){
    return localStorage.getItem('nationalite');
  }
  Email(){
    return localStorage.getItem('email');
  }

}
