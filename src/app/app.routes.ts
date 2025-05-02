import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

export const routes: Routes = [{
    path: '',
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
 
  
];
export const AppRoutingModule = RouterModule.forRoot(routes);
