import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicamento } from '../models/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  API = "http://localhost:7070/api";
  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  ListarMedicamento() : Observable<Medicamento[]> {//http://localhost:7070/api/medicamentos
    return this.http.get<Medicamento[]> (`${this.API}/medicamentos`)
  }

  ListarMedicamentoXid(id:number) : Observable<Medicamento>{
    return this.http.get<Medicamento> (`${this.API}/medicamento/${id}`)
  }  

  GuardarMedicamento(medicamento: Medicamento) : Observable<Medicamento>{
    return this.http.post<Medicamento> (`${this.API}/medicamento`, medicamento, {headers:this.httpHeader})
  }

  ModificarMedicamento(medicamento:Medicamento) : Observable<Medicamento>{
    return this.http.put<Medicamento> (`${this.API}/medicamento/${medicamento.idMedicamento}` , medicamento,  {headers:this.httpHeader})
  }

  EliminarMedicamento(id:number) : Observable<Medicamento>{
    return this.http.delete<Medicamento> (`${this.API}/medicamento/${id}`, {headers:this.httpHeader})
  }

}
