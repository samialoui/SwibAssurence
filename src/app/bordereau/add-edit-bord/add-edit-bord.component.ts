import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-edit-bord',
  templateUrl: './add-edit-bord.component.html',
  styleUrls: ['./add-edit-bord.component.scss']
})
export class AddEditBordComponent implements OnInit {

 
  constructor(private service: SharedService) {}
  @Input() bord:any;
  IdBordereau!:string;
  DateBordereau!:string;
  Reference!:string;
  Identite!:string;
  DateReponse!:string;
 

  ngOnInit(): void {
    this.IdBordereau= this.bord.IdBordereau;
    this.DateBordereau=this.bord.DateBordereau;
    this.Reference=this.bord.Reference;
    this.Identite=this.bord.Identite;
    this.DateReponse=this.bord.DateReponse;
  }

  addBordereau(){
    var val = {IdBordereau: this.IdBordereau,
      DateBordereau:this.DateBordereau,
      Reference:this.Reference,
      Identite:this.Identite,
      DateReponse:this.DateReponse}
    this.service.addBordereau(val).subscribe(res=>{
    alertify.success("Ajouter avec succée");
    });
  }

  updateBordereau(){
    var val = {IdBordereau: this.IdBordereau,
      DateBordereau:this.DateBordereau,
      Reference:this.Reference,
      Identite:this.Identite,
      DateReponse:this.DateReponse}
    this.service.updateBordereau(val).subscribe(res=>{
    alertify.success("Ajouter avec succée");
    });
  }

}
