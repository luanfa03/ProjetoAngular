import { Component, Input } from '@angular/core';
import { PessoasService } from 'src/app/services/pessoas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  pessoa: any = {};

  constructor(private pessoasService: PessoasService) {}

  excluirPessoa(id: string) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Esta ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, excluir!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pessoasService.excluirPessoa(id).subscribe(() => {
          Swal.fire('Excluído!', 'A pessoa foi removida.', 'success');
        }, () => {
          Swal.fire('Erro', 'Não foi possível excluir a pessoa.', 'error');
        });
      }
    });
  }
}
