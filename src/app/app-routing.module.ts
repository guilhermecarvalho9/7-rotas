import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosModule } from './cursos/cursos.module';

// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: 'cursos', loadChildren: () => CursosModule},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
