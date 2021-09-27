import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicamento } from 'src/app/models/medicamento';
import { MedicamentoService } from 'src/app/services/medicamento.service';

@Component({
  selector: 'app-form-medicamento',
  templateUrl: './form-medicamento.component.html',
  styleUrls: ['./form-medicamento.component.css']
})
export class FormMedicamentoComponent implements OnInit {

  public medicamento: Medicamento = {
    nombre: "",
    laboratorio: ""
  }


  constructor(private medicamentoService: MedicamentoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mostrarMedicamento();
  }

  mostrarMedicamento(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']; 
      if (id){
        this.medicamentoService.ListarMedicamentoXid(id).subscribe (resp => this.medicamento=resp)
      }
    })
  }
  
  crearMedicamento(): void{
    this.medicamentoService.GuardarMedicamento(this.medicamento).subscribe(()=>{
      this.router.navigate(["/crudMedicamento"]);
      alert("medicamento creado por fin!");
    })
  }

  actualizarMedicamento(){
    this.medicamentoService.ModificarMedicamento(this.medicamento).subscribe(()=>{
      this.router.navigate(["/crudMedicamento"]);
      alert("medicamento actualizado por fin!");
    })
  }

}
