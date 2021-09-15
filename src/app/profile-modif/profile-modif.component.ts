import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-profile-modif',
  templateUrl: './profile-modif.component.html',
  styleUrls: ['./profile-modif.component.scss']
})
export class ProfileModifComponent implements OnInit {
  

  constructor( private service: SharedService) { }
  UserId!:string;
  LoginUser!:string;
  Email!:string;
  Cin!:string;
  Nationalite!:string;
  Phone!:string;
  Identite!:string;
  Adresse!:string;
  MotpassUser!:string;
  EstActive!:string;
  Filiale!:string;

  ngOnInit(): void {
    
    var nom = (localStorage.getItem('nom'));
    this.LoginUser=nom!=null ?nom:"";
    var cin = (localStorage.getItem('cin'));
    this.Cin=cin!=null ?cin:"";
    var identite = (localStorage.getItem('identite'));
    this.Identite=identite!=null ?identite:"";
    var phone = (localStorage.getItem('phone'));
    this.Phone=phone!=null ?phone:"";
    var adresse = (localStorage.getItem('adresse'));
    this.Adresse=adresse!=null ?adresse:"";
    var nationalite = (localStorage.getItem('nationalite'));
    this.Nationalite=nationalite!=null ?nationalite:"";
    var mail = (localStorage.getItem('email'));
    this.Email=mail!=null ?mail:"";
    var id = (localStorage.getItem('userid'));
    this.UserId=id!=null ?id:"";
    var password = (localStorage.getItem('motdepassuser'));
    this.MotpassUser=password!=null ?password:"";
    var active = (localStorage.getItem('estactive'));
    this.EstActive=active!=null ?active:"";
    var filiale = (localStorage.getItem('filiale'));
    this.Filiale=filiale!=null ?filiale:"";
    
  }
  updateUser(){
    var val = {LoginUser: this.LoginUser,
      UserId:this.UserId,
      Email:this.Email,
      Cin:this.Cin,
      Nationalite:this.Nationalite,
      Phone:this.Phone,
      Identite:this.Identite,
      Adresse:this.Adresse,
      MotpassUser:this.MotpassUser,
      EstActive:this.EstActive,
      Filiale:this.Filiale}
    this.service.updateUser(val).subscribe(res=>{
    alertify.success("Profile modifier avec succée");
    this.refrechUser();
    });
  }

refrechUser(){
  localStorage.setItem('token',this.LoginUser);
      localStorage.setItem('cin',this.Cin);
      localStorage.setItem('identite',this.Identite);
      localStorage.setItem('phone',this.Phone);
      localStorage.setItem('adresse',this.Adresse);
      localStorage.setItem('nationalite',this.Nationalite);
      localStorage.setItem('email',this.Email);
      localStorage.setItem('userid',this.UserId);
      localStorage.setItem('motpassuser',this.MotpassUser);
      localStorage.setItem('estactive',this.EstActive);
      localStorage.setItem('filiale',this.Filiale);
}
}
