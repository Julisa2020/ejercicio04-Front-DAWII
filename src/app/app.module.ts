import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { CrudMedicamentoComponent } from './components/crud-medicamento/crud-medicamento.component';
import { FormMedicamentoComponent } from './components/form-medicamento/form-medicamento.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    CrudMedicamentoComponent,
    FormMedicamentoComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
