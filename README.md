# Agenda de pessoas e contatos

## Descrição
Este projeto é uma aplicação web para **gerenciamento de pessoas e contatos**, desenvolvida utilizando **Angular 16** no frontend e **Spring Boot (Java 21)** no backend. A aplicação permite realizar operações CRUD (
Criar, Ler, Atualizar e Deletar) de pessoas, com integração à API **ViaCEP** para preenchimento automático do endereço a partir do CEP.

## Funcionalidades
- 📌 **Listar** todas as pessoas cadastradas.
- ✏️ **Adicionar** uma nova pessoa ao sistema.
- 🔄 **Editar** informações de uma pessoa já cadastrada.
- 🗑️ **Excluir** uma pessoa do sistema.
- 🌍 **Integração com a API ViaCEP** para obter automaticamente o endereço com base no CEP informado.
- 🚀 **Notificações com SweetAlert2** para informações e confirmação de ações.

## Tecnologias Utilizadas
### **Frontend:**
- Angular 16
- TypeScript
- Bootstrap 5
- SweetAlert2 (para alertas e confirmações)
- Consumo de API REST com HttpClient

### **Backend:**
- Spring Boot (Java 21)
- Spring Web (para criação da API REST)
- Banco de Dados **H2**

## Como Executar o Projeto
### **Backend (Spring Boot)**
1. Certifique-se de ter **Java 21** instalado.
2. Clone o repositório 'AppPessoas'.
3. No ECLIPSE, dê 'run' no projeto.
4. A API estará disponível em: `http://localhost:8080/api/pessoas`

### **Frontend (Angular 16)**
1. Certifique-se de ter o **Node.js** e o **Angular CLI** instalados.
2. No terminal, acesse a pasta do projeto frontend e instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   ng serve
   ```
4. Acesse a aplicação no navegador em: `http://localhost:4200`

## Endpoints da API
- `GET /api/pessoas` → Retorna todas as pessoas cadastradas.
- `GET /api/pessoas/{id}` → Retorna uma pessoa pelo ID.
- `POST /api/pessoas` → Adiciona uma nova pessoa.
- `PUT /api/pessoas/{id}` → Atualiza os dados de uma pessoa pelo ID.
- `DELETE /api/pessoas/{id}` → Exclui uma pessoa pelo ID.

## Melhorias Futuras
- 📊 Implementar paginação na listagem de pessoas.
- 🔍 Adicionar busca e filtros para facilitar a localização de registros.
- 🛡️ Implementar autenticação e autorização de usuários.
- 📁 Permitir upload de imagem para perfil de cada pessoa.

## Contribuição
Sinta-se à vontade para abrir **issues** ou enviar **pull requests** para melhorias!

---

Projeto desenvolvido para fins de aprendizado e aprimoramento de tecnologias modernas. 🚀

