import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPessoasComponent } from './pages/pessoas/listagem-pessoas/listagem-pessoas.component';
import { AddEditarPessoasComponent } from './pages/pessoas/add-editar-pessoas/add-editar-excluir-pessoas.component';

const routes: Routes = [
  {
    path: 'pessoas', component: ListagemPessoasComponent
  },
  {
    path: 'adicionar-pessoa', component: AddEditarPessoasComponent
  },
  {
    path: 'editar-pessoa/:id', component: AddEditarPessoasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
