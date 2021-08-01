import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Nota} from '../../nota'
import { ServicioNotasService } from 'src/servicio-notas.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { v4 } from 'uuid';


@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {
  data:any;
  formulario:FormGroup;
  titulo:any;
  estado:any;
  descripcion:any;

  constructor(public builder:FormBuilder, public servicio:ServicioNotasService, private route:Router, private activateR:ActivatedRoute) {
    this.formulario=this.builder.group({
        titulo:['', Validators.required],
        estado:['', Validators.required],
        descripcion:['',[ Validators.maxLength(150), Validators.required]]
    });
  }

  ngOnInit(): void {
    this.titulo=this.formulario.get("titulo");
    this.estado=this.formulario.get("estado");
    this.descripcion=this.formulario.get("descripcion");

    if (location.pathname != '/') {
      this.servicio.getNota(this.activateR.snapshot.params.id).subscribe(dato => {
        this.data = dato
        this.formulario.get('titulo')?.setValue(this.data.titulo)
        this.formulario.get('estado')?.setValue(this.data.estado)
        this.formulario.get('descripcion')?.setValue(this.data.descripcion)
      })
    }
  }

  crear() {
    if (location.pathname == '/') {
      let datos:Nota = {
        id: v4(),
        titulo:this.titulo.value,
        estado:this.estado.value,
        descripcion:this.descripcion.value
      }
      this.servicio.guardarDatos(datos).subscribe();
      this.route.navigate(['/listarnotas']);
      return ;
    } else {
      this.modificar()
      this.route.navigate(['/listarnotas']);
    }
      
  }  

  modificar() {
    let datos:Nota = {
      id: this.activateR.snapshot.params.id,
      titulo:this.titulo.value,
      estado:this.estado.value,
      descripcion:this.descripcion.value
    }

    this.servicio.eliminar(this.data).subscribe();
    this.servicio.guardarDatos(datos).subscribe();

    this.route.navigate(['/listarnotas']);
  }
}
