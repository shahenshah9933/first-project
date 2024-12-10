import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { VideoPlaayerComponent } from './video-plaayer/video-plaayer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"",redirectTo : "signup",pathMatch:"full"},
    {path :"signup",component:SignupComponent,title:"signup page"},
    {path :"login",component:LoginComponent,title:"login page"},
   
    {path :"dashboard",component:DashboardComponent,title:"dashboard page"},
    {path :"public",component:PublicComponent,title:"public page"},
    {path :"videoplayer",component:VideoPlaayerComponent,title:"videoplayer page"},
{path : "**",component:PageNotFoundComponent,title:"not found page"}

  
];  
