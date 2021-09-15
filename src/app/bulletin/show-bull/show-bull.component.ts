import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-bull',
  templateUrl: './show-bull.component.html',
  styleUrls: ['./show-bull.component.scss']
})
export class ShowBullComponent implements OnInit {
p : number =1;
 
  constructor( private service: SharedService) { }
  BulletinList: any=[];
  VisiteList: any=[];
  Modaltitle!:string;
  ActivateAddEditBullComp: boolean=false;
  ActivateAddDetailBullComp: boolean=false;
  bull:any;
  det:any;
 

  IdBulletinFilter:string="";
  MatriculeFilter:string="";
  IdentiteFilter:string="";
  IdentiteMaladeFilter:string="";
  DateSoinFilter:string="";
  IdBordereauFilter:string="";
  BoFilter:string="";
  TotBulletinFilter:string="";
  BulletinListWithoutFilter:any=[];
  VisiteListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshBullList();
    //this.refreshVistList();

  }

  refreshBullList(){
    this.service.getBullList().subscribe(data=>{
      this.BulletinList=data;
      this.BulletinListWithoutFilter=data;
    });
  }
  refreshVistList(){
    this.service.getVisList().subscribe(data=>{
      this.BulletinList=data;
      this.BulletinListWithoutFilter=data;
    });
  }
  addClick(){
    this.bull={
      IdBulletin:0,
      Matricule:" ",
      Identite:" ",
      IdentiteMalade:" ",
      DateSoin:" ",
      Reference:" ",
      Bo:" ",
      TotBulletin:" ",
      

    }
    this.Modaltitle="Ajouter Bulletin";
    this.ActivateAddEditBullComp=true;
  }

  editClick(item: any){
    this.bull=item;
    this.Modaltitle="Modifier Bulletin";
    this.ActivateAddEditBullComp=true;
  }

  detailClick(item: any){
    this.det=item;
    this.Modaltitle="Detail Bulletin";
    this.ActivateAddDetailBullComp=true;
  }

  closeClick(){
    this.ActivateAddEditBullComp=false;
    this.refreshBullList();
  }

  deleteClick(item:any){
    if(confirm('are you sure??')){
      this.service.deleteBulletin(item.IdBulletin).subscribe(data=>{
        alert(data.toString());
        this.refreshBullList()
      });
    }
  }

  filterFn(){
 
  var IdentiteMaladeFilter=this.IdentiteMaladeFilter;

  this.BulletinList = this.BulletinListWithoutFilter.filter(function (fl:any){
    return fl.IdentiteMalade.toString().toLowerCase().includes(
      IdentiteMaladeFilter.toString().trim().toLowerCase())
  });
}
}

