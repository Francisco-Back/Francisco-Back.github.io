import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { FormligaComponent } from './formliga/formliga.component';

const routes: Routes = [
  {path:'group', component: GroupComponent},
  {path:'formliga', component: FormligaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

