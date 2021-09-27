import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumnoComponent} from './components/add-alumno/add-alumno.component';
import { CrudMedicamentoComponent } from './components/crud-medicamento/crud-medicamento.component';
import { FormMedicamentoComponent } from './components/form-medicamento/form-medicamento.component';

const routes: Routes = [
  {
    path:"addAlumno", component:AddAlumnoComponent 
  },
  {
    path:"crudMedicamento", component: CrudMedicamentoComponent
  },
  { 
    path: "formMedicamento/:id", component: FormMedicamentoComponent 
  },
  { 
    path: "formMedicamento", component: FormMedicamentoComponent 
  },
  { 
    path:"",redirectTo:"crudMedicamento", pathMatch: "full"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
