import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-edit-bull',
  templateUrl: './add-edit-bull.component.html',
  styleUrls: ['./add-edit-bull.component.scss']
})
export class AddEditBullComponent implements OnInit {

  constructor(private service: SharedService) {}
  @Input() bull:any;
  IdBulletin!:string;
  Matricule!:string;
  IdentiteMalade!:string;
  DateSoin!:string;
  TotBulletin!:string;

  ngOnInit(): void {
    this.IdBulletin= this.bull.IdBulletin;
    this.Matricule=this.bull.Matricule;
    this.IdentiteMalade=this.bull.IdentiteMalade;
    this.DateSoin=this.bull.DateSoin;
    this.TotBulletin=this.bull.TotBulletin;
  }

  addBulletin(){
    var val = {IdBulletin: this.IdBulletin,
      Matricule:this.Matricule,
      IdentiteMalade:this.IdentiteMalade,
      DateSoin:this.DateSoin,
      TotBulletin:this.TotBulletin};
    this.service.addBulletin(val).subscribe(res=>{
    alertify.success("Ajouter avec succée");
    });
  }

  updateBulletin(){
    var val = {IdBulletin: this.IdBulletin,
      Matricule:this.Matricule,
      IdentiteMalade:this.IdentiteMalade,
      DateSoin:this.DateSoin,
      TotBulletin:this.TotBulletin};
    this.service.updateBulletin(val).subscribe(res=>{
      alertify.success("Modifier avec succée");
    });
  }
}
