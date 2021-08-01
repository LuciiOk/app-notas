import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearNotaComponent} from './pages/crear-nota/crear-nota.component'
import {ListarNotasComponent} from './pages/listar-notas/listar-notas.component'

const routes: Routes = [
  {path:'', component:CrearNotaComponent},
  {path:'listarnotas', component:ListarNotasComponent},
  {path:'modificar/:id/:titulo', component:CrearNotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
