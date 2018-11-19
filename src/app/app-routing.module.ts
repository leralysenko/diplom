import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from 'src/app/auth/auth.component';
import { HomepageComponent } from 'src/app/homepage/homepage.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  {path: 'home', component: HomepageComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
