import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  p : number =1;

  constructor(private service:SharedService) { }
  UsersList:any=[];
  IdentiteFilter:string="";
  UsersListWithoutFilter:any=[];
  assur:any;
  Modaltitle!:string;
  ActivateAddDetailAssurComp: boolean=false;

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getListUsers().subscribe(data=>{
      this.UsersList=data;
      this.UsersListWithoutFilter=data;
    
    });
}
detailClick(item: any){
  this.assur=item;
  this.Modaltitle="Detail Assuré";
  this.ActivateAddDetailAssurComp=true;
}

filterFn(){
  var IdentiteFilter = this.IdentiteFilter;

  this.UsersList = this.UsersListWithoutFilter.filter(function (fl:any){
    return fl.Identite.toString().toLowerCase().includes(
      IdentiteFilter.toString().trim().toLowerCase())
  });
}
}
