import { Component, OnInit } from '@angular/core';
import { IPessoa } from 'src/app/interfaces/pessoa';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.scss']
})
export class ListagemPessoasComponent implements OnInit {

  pessoas: IPessoa[] = [];

  constructor(private pessoasService: PessoasService) {}

  ngOnInit() {
    this.pessoasService.buscarTodasPessoas().subscribe((response: IPessoa[]) => {
      this.pessoas = response;
    });
  }
}
