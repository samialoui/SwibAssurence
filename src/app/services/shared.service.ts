import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44359/api";
  readonly PhotoUrl = "https://localhost:44359/Photos";

  constructor( private http: HttpClient) { }
// all methods bulletin
  getBullList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/bulletin/GetBulletins');
  }

  addBulletin(val:any){
    return this.http.post(this.APIUrl+'/bulletin/post',val);
  }
  updateBulletin(val:any){
    return this.http.put(this.APIUrl+'/bulletin/modifier',val);
  }
  deleteBulletin(val:any){
    return this.http.delete(this.APIUrl+'/bulletin/',val);
  }

  //all methods bordereau
  getBordList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/bordereau/GetBordereaux');
  }

  addBordereau(val:any){
    return this.http.post(this.APIUrl+'/bordereau/post',val);
  }
  updateBordereau(val:any){
    return this.http.put(this.APIUrl+'/bordereau/modifier',val);
  }
  deleteBordereau(val:any){
    return this.http.delete(this.APIUrl+'/bordereau/',val);
  }

   //all methods visite
   getVisList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/visite/GetVisites');
  }

    //all methods login
    addUser(val:any){
      return this.http.post(this.APIUrl+'/login/post',val);
    }

    updateUser(val:any){
      return this.http.post(this.APIUrl+'/login/modifier',val);
    }
    updatePassword(val:any){
      return this.http.post(this.APIUrl+'/login/modifier/password',val);
    }
    Authenfication(val:any){
      return this.http.post(this.APIUrl+'/login/ValidateAuthentification',val);
    }

    //all methods listUsers
    getListUsers(): Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/listuser/GetListUsers');
    }

    /*****************/
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/employee/SaveFile',val);
  }
  GetAllDepartmentNames(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employee/GetAllDepartmentNames');
  }

 

}
