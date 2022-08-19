import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadiosComponent } from './estadios/estadios.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { PartidosComponent } from './partidos/partidos.component';
import { SedesComponent } from './sedes/sedes.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,pathMatch:'full'},
  { path: 'paises', component: PaisesComponent },
  { path: 'grupos', component: GroupComponent },
  { path: 'sedes', component: SedesComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'estadios', component: EstadiosComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
