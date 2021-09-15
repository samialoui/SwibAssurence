import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthComponent } from './auth/auth.component';
import { AssureDetailComponent } from './bordereau/assure-detail/assure-detail.component';
import { BordereauComponent } from './bordereau/bordereau.component';
import { ListUserComponent } from './bordereau/list-user/list-user.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { DetailRembComponent } from './bulletin/detail-remb/detail-remb.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileModifComponent } from './profile-modif/profile-modif.component';
import { ProfilePasswordComponent } from './profile-password/profile-password.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardService } from './services/authguard.service';


const routes: Routes = [
  { path:'',  component: AcceuilComponent, pathMatch:'full'},
  { path: 'bulletin', component: BulletinComponent},
  { path: 'bordereau', component: BordereauComponent},
  { path: 'listUser', component: ListUserComponent},
  { path: 'assure-detail', component: AssureDetailComponent},
  { path: 'auth', component:AuthComponent },
  { path:'menu', component: MenuComponent},
  {path:'acceuil',component: AcceuilComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'detail-bull', component: DetailRembComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile-modif', component: ProfileModifComponent},
  { path: 'profile-password', component: ProfilePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

