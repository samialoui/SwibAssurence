import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  UserList: any=[];
  @Input() user:any;
  LoginUser!:string;
  MotpassUser!:string;
  Adresse!:string;
  Identite!:string;
  register: any={};

  constructor(private authService: AuthService, private router: Router , private service: SharedService) { }
  ActivateAddEditUserComp: boolean=false;


  ngOnInit() {
    this.LoginUser=this.user.LoginUser;
    this.MotpassUser=this.user.MotpassUser;
    this.Adresse=this.user.Adresse;
    this.Identite=this.user.Identite;
    
  }

  addClick(){
    this.user={
      userId:0,
      Filiale:"",
      LoginUser:"",
      MotpassUser :"",
      EstActive:"",
      Identite:"",
      Adresse:"",
      Email :"",
      Nationalite:"",
      Phone:"",
      Cin:""
    }
    this.ActivateAddEditUserComp=true;
  }

  closeClick(){
    this.ActivateAddEditUserComp=false;
  }
   
onSignIn(){
  var val = {LoginUser: this.LoginUser, 
    MotpassUser:this.MotpassUser,
   }
 // alert(this.LoginUser);
  this.service.Authenfication(val).subscribe(data=>{
    this.UserList=data;
    if(this.UserList !=null )
    {
      const token =  this.UserList;
      if(token){
      localStorage.setItem('nom',token.LoginUser);
      localStorage.setItem('cin',token.Cin);
      localStorage.setItem('identite',token.Identite);
      localStorage.setItem('phone',token.Phone);
      localStorage.setItem('adresse',token.Adresse);
      localStorage.setItem('nationalite',token.Nationalite);
      localStorage.setItem('email',token.Email);
      localStorage.setItem('userid',token.UserId);
      localStorage.setItem('motdepassuser',token.MotpassUser);
      localStorage.setItem('estactive',token.EstActive);
      localStorage.setItem('filiale',token.Filiale);


      }
      alertyfy.success("Connecté avec succée");
      this.router.navigateByUrl('/acceuil');
      
      }

    else{
      alertyfy.error("mot de passe ou login erronée");
    }
  });
}
onRegister() {
  this.authService.signIn().then(
    () => {
      console.log('Sign out successful!');
      this.router.navigateByUrl('/register');
    }
  );
}

  onSignOut() {
    this.authService.signOut();
  }
}
