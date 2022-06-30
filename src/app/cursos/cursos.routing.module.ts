import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CursosRoutingModule { }
