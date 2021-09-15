import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-assure-detail',
  templateUrl: './assure-detail.component.html',
  styleUrls: ['./assure-detail.component.scss']
})
export class AssureDetailComponent implements OnInit {

  constructor() { }
  @Input() assur:any;
  Etablissement!:string;
  DatNaissance!:string;
  DatDebAffiliation!:string;
  DatFinAffiliation!:string;
  MatriculeAssurance!:string;
  Matricule!:string;
  

  ngOnInit(): void {
    this.Matricule= this.assur.Matricule;
    this.Etablissement= this.assur.Etablissement;
    this.DatNaissance=this.assur.DatNaissance;
    this.DatDebAffiliation=this.assur.DatDebAffiliation;
    this.DatFinAffiliation=this.assur.DatFinAffiliation;
    this.MatriculeAssurance=this.assur.MatriculeAssurance;
   
  }
}
