import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { SedesComponent } from './sedes/sedes.component';
import { PartidosComponent } from './partidos/partidos.component';
import { EstadiosComponent } from './estadios/estadios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { LigaComponent } from './liga/liga.component';
import { ConfirmacionligaComponent } from './confirmacionliga/confirmacionliga.component';
import { HttpClientModule } from '@angular/common/http';
import { FormLigaComponent } from './form-liga/form-liga.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { interceptorProvider } from './interceptors/umg-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    HomeComponent,
    PaisesComponent,
    GroupComponent,
    SedesComponent,
    PartidosComponent,
    EstadiosComponent,
    RegisterComponent,
    LoginComponent,
    PrincipalComponent,
    LigaComponent,
    ConfirmacionligaComponent,
    FormLigaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
