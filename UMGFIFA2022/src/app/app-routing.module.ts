import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { FormligaComponent } from './formliga/formliga.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'group', component: GroupComponent},
  {path:'formliga', component: FormligaComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

