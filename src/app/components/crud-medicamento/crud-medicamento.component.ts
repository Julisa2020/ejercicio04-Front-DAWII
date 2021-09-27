import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento';
import { MedicamentoService } from 'src/app/services/medicamento.service';

@Component({
  selector: 'app-crud-medicamento',
  templateUrl: './crud-medicamento.component.html',
  styleUrls: ['./crud-medicamento.component.css']
})
export class CrudMedicamentoComponent implements OnInit {

  medicamentos : Medicamento[] = [];
  
  constructor(private medicamentoService : MedicamentoService) { 
    
  }

  ngOnInit(): void {
    this.medicamentoService.ListarMedicamento().subscribe(medicamentos => {
      this.medicamentos = medicamentos
      console.log(medicamentos);
      
    })
  }

  eliminarMedicamento(medicamento: Medicamento): void {
    this.medicamentoService.EliminarMedicamento(medicamento.idMedicamento!).subscribe(()=>{
      this.medicamentos =  this.medicamentos?.filter(resp => resp !== medicamento);
      alert("Eliminado correctamente")
    })
  }


}
