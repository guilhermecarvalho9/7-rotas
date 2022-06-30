import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {
  aluno: any;
  inscricao: Subscription = new Subscription();

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => { 
        let id =  params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }

  ngOnDetroy(): void {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

}
