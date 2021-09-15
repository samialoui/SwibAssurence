import { Component, OnInit,Input } from '@angular/core';
import {  FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMessage!: string;
  signupForm!: FormGroup;
  constructor( private service: SharedService, private router: Router, private formBuilder: FormBuilder) { }
  @Input() user:any;
  userId!:string;
  Filiale!:string;
  LoginUser!:string;
  MotpassUser!:string;
  EstActive!:string;
  Identite!:string;
  Adresse!:string;
  Phone!:string;
  Cin!:string;
  Email!:string;
  Nationalite!:string;
 

  ngOnInit(): void {
    this.userId= this.user.userId;
    this.Filiale= this.user.Filiale;
    this.LoginUser=this.user.LoginUser;
    this.MotpassUser=this.user.MotpassUser;
    this.EstActive= this.user.EstActive;
    this.Identite=this.user.Identite;
    this.Adresse=this.user.Adresse;
    this.Phone=this.user.Phone;
    this.Cin= this.user.Cin;
    this.Email=this.user.Email;
    this.Nationalite=this.user.Nationalite;
  
  }

  addUser(){
    var val = {userId: this.userId,
      Filiale:this.Filiale,
      LoginUser:this.LoginUser,
      MotpassUser:this.MotpassUser,
      EstActive: this.EstActive,
      Identite:this.Identite,
      Adresse:this.Adresse,
      Phone:this.Phone,
      Cin: this.Cin,
      Email:this.Email,
      Nationalite:this.Nationalite}
    this.service.addUser(val).subscribe(res=>{
    confirm("Ajouter avec succée");
    });
  }

  /*initForm() {
    this.signupForm = this.formBuilder.group({
      LoginUser: ['', [Validators.required, Validators.email]],
      MotpassUser: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      Identite: ['', [Validators.required, Validators.email]],

    });
  }

  onSubmit(form:NgForm){
  
    this.service.addUser(form.value).subscribe(
      (res:any)=>{
    localStorage.setItem('token',res.token);
    this.router.navigateByUrl('/auth');
    },
    err=>{
      if(err.status== 400){
        console.error("Incorrect nom utilsateur ou mot de passe");
        
      }
      else{
        this.errorMessage= err;
      }
    }
    );
  }*/

}
