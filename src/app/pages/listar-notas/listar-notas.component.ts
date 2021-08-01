import { Component, OnInit } from '@angular/core';
import {Nota} from '../../nota';
import { ServicioNotasService } from 'src/servicio-notas.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.scss']
})
export class ListarNotasComponent implements OnInit {
  lista:Array<Nota>=[];
  abierto:Array<Nota>=[];
  enCurso:Array<Nota>=[];
  cerrado:Array<Nota>=[];

  constructor(private servicio:ServicioNotasService) { }

  ngOnInit(): void {
    this.servicio.consultarNotas().subscribe(datos=>{
      console.log(datos)
      this.lista = datos;
      this.separar();
    })
  }

  separar():void {
    this.abierto=[];
    this.enCurso=[];
    this.cerrado=[];
      for (let index = 0; index < this.lista.length; index++) {
        if (this.lista[index].estado == 1) {
          this.abierto.push(this.lista[index]);
        }
        if (this.lista[index].estado == 2) {
          this.enCurso.push(this.lista[index]);
        }
        if (this.lista[index].estado == 3) {
          this.cerrado.push(this.lista[index]);
        }
      }
  }

  eliminar(item:Nota) {
    const index:number = this.lista.indexOf(item);
    this.servicio.eliminar(item).subscribe();
    this.lista.splice(index, 1);
    this.separar();
  }
}
