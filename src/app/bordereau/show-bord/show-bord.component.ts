import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-show-bord',
  templateUrl: './show-bord.component.html',
  styleUrls: ['./show-bord.component.scss']
})
export class ShowBordComponent implements OnInit {
p:number = 1;
  constructor( private service: SharedService) { }
  BordereauList: any=[];
  Modaltitle!:string;
  ActivateAddEditBordComp: boolean=false;
  bord:any;

  DateBordereauFilter:string="";
  BordereauListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshBordList();

  }

  refreshBordList(){
    this.service.getBordList().subscribe(data=>{
      this.BordereauList=data;
      this.BordereauListWithoutFilter=data;
    });
  }
  addClick(){
    this.bord={
      IdBordereau:0,
      DateBordereau:"",
      Reference :"",
      Identite:"",
      DateReponse:"",
    }
    this.Modaltitle="Ajouter Bordereaau";
    this.ActivateAddEditBordComp=true;
  }

  editClick(item: any){
    this.bord=item;
    this.Modaltitle="Modifier Bordereau";
    this.ActivateAddEditBordComp=true;
  }

  closeClick(){
    this.ActivateAddEditBordComp=false;
    this.refreshBordList();
  }

  deleteClick(item:any){
    if(confirm('are you sure??')){
      this.service.deleteBordereau(item.IdBordereau).subscribe(data=>{
        alertify.success("Supprimer avec succée");
        this.refreshBordList()
      });
    }
  }

  detailClick(item:any){
    
  }

  filterFn(){
  var DateBordereauFilter = this.DateBordereauFilter;

  this.BordereauList = this.BordereauListWithoutFilter.filter(function (fl:any){
    return fl.DateBordereau.toString().toLowerCase().includes(
      DateBordereauFilter.toString().trim().toLowerCase())
  });
}
} 
