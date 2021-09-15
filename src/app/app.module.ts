import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { ShowBullComponent } from './bulletin/show-bull/show-bull.component';
import { AddEditBullComponent } from './bulletin/add-edit-bull/add-edit-bull.component';
import { BordereauComponent } from './bordereau/bordereau.component';
import { ShowBordComponent } from './bordereau/show-bord/show-bord.component';
import { AddEditBordComponent } from './bordereau/add-edit-bord/add-edit-bord.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SharedService } from './services/shared.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { DetailRembComponent } from './bulletin/detail-remb/detail-remb.component';
import { DetailBullComponent } from './bulletin/detail-remb/detail-bull/detail-bull.component';
import { RembBullComponent } from './bulletin/detail-remb/remb-bull/remb-bull.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModifComponent } from './profile-modif/profile-modif.component';
import { ProfilePasswordComponent } from './profile-password/profile-password.component';
import { ListUserComponent } from './bordereau/list-user/list-user.component';
import { AssureDetailComponent } from './bordereau/assure-detail/assure-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BulletinComponent,
    ShowBullComponent,
    AddEditBullComponent,
    BordereauComponent,
    ShowBordComponent,
    AddEditBordComponent,
    AcceuilComponent,
    AuthComponent,
    RegisterComponent,
    DetailRembComponent,
    DetailBullComponent,
    RembBullComponent,
    ProfileComponent,
    ProfileModifComponent,
    ProfilePasswordComponent,
    ListUserComponent,
    AssureDetailComponent,
    

  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     TabsModule.forRoot(),
     BsDatepickerModule.forRoot(),
     BrowserAnimationsModule,
     NgxPaginationModule 
  ],
  providers: [
    SharedService,
    AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
