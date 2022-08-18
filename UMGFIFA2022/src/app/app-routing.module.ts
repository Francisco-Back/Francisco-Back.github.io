import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SedesComponent } from './sedes/sedes.component';
const routes: Routes = [

  { path: '', component: HomeComponent ,pathMatch:'full'},
  { path: 'sedes', component: SedesComponent ,pathMatch:'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
