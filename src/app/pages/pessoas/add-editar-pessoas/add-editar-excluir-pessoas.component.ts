import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IPessoa } from 'src/app/interfaces/pessoa';
import { PessoasService } from 'src/app/services/pessoas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-editar-pessoas',
  templateUrl: './add-editar-excluir-pessoas.component.html',
  styleUrls: ['./add-editar-excluir-pessoas.component.scss']
})
export class AddEditarPessoasComponent implements OnInit {
  id: string = '';
  formGroupPessoa: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required, Validators.minLength(8)]),
    endereco: new FormControl('',[Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
  });

  constructor(private route: ActivatedRoute, private http: HttpClient, private pessoasService: PessoasService, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // busca o endereço quando o CEP for digitado
    this.formGroupPessoa.get('cep')?.valueChanges.subscribe(cep => {
      if (cep && cep.length === 8) {
        this.buscarEndereco(cep);
      }
    });

    // Se houver um ID, buscar os dados da pessoa para edição
    if (this.id) {
      this.pessoasService.buscarPessoaPorId(this.id).subscribe(response => {
        if (response) {
          this.formGroupPessoa.patchValue({
            nome: response.nome,
            cep: response.cep
          });
        }
      });
    }
  }

  buscarEndereco(cep: string) {
    this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`).subscribe(dados => {
      if (!dados.erro) {
        const enderecoCompleto = `${dados.logradouro}, ${dados.bairro}, ${dados.localidade} - ${dados.uf}`;
        this.formGroupPessoa.patchValue({
          endereco: enderecoCompleto,
          cidade: dados.localidade,
          uf: dados.uf
        });
      }
    });
  }

  salvarPessoa() {
    if (this.id) {
      const pessoa: IPessoa = this.formGroupPessoa.value;
      this.pessoasService.atualizarPessoa(this.id, pessoa).subscribe(response => {
        Swal.fire('Sucesso', 'Pessoa Atualizada!', 'success');
        this.router.navigate(['/pessoas']);
      }, error => {
        Swal.fire('Erro', 'Não foi possível atualizar a pessoa.', 'error');
      });
    } else {
      const pessoa: IPessoa = this.formGroupPessoa.value;
      this.pessoasService.adicionarPessoa(pessoa).subscribe(response => {
        Swal.fire('Sucesso', 'Pessoa Adicionada!', 'success');
        this.router.navigate(['/pessoas']);
      }, error => {
        Swal.fire('Erro', 'Não foi possível adicionar a pessoa.', 'error');
      });
    }
  }
}

