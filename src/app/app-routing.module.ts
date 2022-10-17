import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadiosComponent } from './estadios/estadios.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { PartidosComponent } from './partidos/partidos.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { LigaComponent } from './liga/liga.component';
import { ConfirmacionligaComponent } from './confirmacionliga/confirmacionliga.component';
import { SedesComponent } from './sedes/sedes.component';
import { FormLigaComponent } from './form-liga/form-liga.component';
import { ListadoVaticiniosComponent } from './listado-vaticinios/listado-vaticinios.component';
import { AllLigasComponent } from './all-ligas/all-ligas.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,pathMatch:'full'},
  { path: 'paises', component: PaisesComponent },
  { path: 'grupos', component: GroupComponent },
  { path: 'sedes', component: SedesComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'estadios', component: EstadiosComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'liga/:id', component: LigaComponent},
  { path: 'confirmacionliga', component: ConfirmacionligaComponent},
  { path: 'form-liga', component: FormLigaComponent},
  { path: 'listado-vaticinios', component: ListadoVaticiniosComponent },
  { path: 'ligas', component: AllLigasComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
