import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styleUrls: ['./profile-password.component.scss']
})
export class ProfilePasswordComponent implements OnInit {

  constructor(public service:SharedService) { }
  MotpassUser!:string;
  MotpassUser1!:string;
  MotpassUser2!:string;
  UserId!:string;
  

  ngOnInit(): void {

    var password = (localStorage.getItem('motdepassuser'));
    this.MotpassUser=password!=null ?password:"";
    var password1 =(localStorage.getItem('motdepassuser'));
    this.MotpassUser1=password1!=null ?password1:"";
    var password2 =(localStorage.getItem('motdepassuser'));
    this.MotpassUser2=password2!=null ?password2:"";
    var id =(localStorage.getItem('userid'));
    this.UserId=id!=null ?id:"";
  }

  updatePassword(){
    var val ={
      MotpassUser:this.MotpassUser,
      UserId:this.UserId
    }
 
   if(this.MotpassUser== this.MotpassUser2){
    this.service.updatePassword(val).subscribe(res=>{
  alertify.success(' Mot de passe modifié avec succée'); 
    });
   }else
   {
    alertify.error('Mot de passe invalid'); 
   }
      
  }


}
