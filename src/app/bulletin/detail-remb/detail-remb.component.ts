import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-detail-remb',
  templateUrl: './detail-remb.component.html',
  styleUrls: ['./detail-remb.component.scss']
})
export class DetailRembComponent implements OnInit {

  constructor(private service: SharedService) {}
  @Input() det:any;
  IdBulletin!:string;
  Matricule!:string;
  ParenteLien!:string;
  IdentiteMalade!:string;
  DateSoin!:string;
  DateNaissance!:string;
  IdBordereau!:string;
  Bo!:string;
  TotBulletin!:string;

  
  //visites elements
  TypeVisite!:string;
  DateVisite!:string;
  MontantVisite!:string;


  ngOnInit(): void {
    this.IdBulletin= this.det.IdBulletin;
    this.Matricule=this.det.Matricule;
    this.ParenteLien=this.det.ParenteLien;
    this.IdentiteMalade=this.det.IdentiteMalade;
    this.DateSoin=this.det.DateSoin;
    this.DateNaissance=this.det.DateNaissance;
    this.IdBordereau=this.det.IdBordereau;
    this.Bo=this.det.Bo;
    this.TotBulletin=this.det.TotBulletin;



    this.TypeVisite=this.det.TypeVisite;
    this.DateVisite=this.det.DateVisite;
    this.MontantVisite=this.det.MontantVisite;
  }

  
  updateBulletin(){
    var val = {IdBulletin: this.IdBulletin,
      Matricule:this.Matricule,
      ParenteLien:this.ParenteLien,
      IdentiteMalade:this.IdentiteMalade,
      DateSoin:this.DateSoin,
      IdBordereau:this.IdBordereau,
      Bo:this.Bo, 
      TotBulletin:this.TotBulletin};
    this.service.updateBulletin(val).subscribe(res=>{
      alert("Modifier avec succée");
    });
  }

}
