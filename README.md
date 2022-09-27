# API Register Me

## Cadastro de contatos.
### Autenticação:
#### Essa aplicação utiliza JSON Web Token (JWT) para lidar com a autenticação. O token é passado com cada solicitação usando o cabeçalho Authorization com esquema Token. O middleware de autenticação JWT trata da validação e autenticação do token. Verifique as seguintes fontes para saber mais sobre o JWT.
### Intenção do projeto:
#### A ideia do projeto é criar um site onde o usuário pode realizar todo o CRUD dos seus contatos pessoais, assim tendo um backup em um lugar de fácil acesso para caso perca os seus contatos.
##### Todas as rotas do usuário:
* POST /registers
* POST /login
* GET /registers
* PATCH /registers/:id
* DELETE /registers/:id
##### Todas as rotas dos contatos:
* POST /associate
* PATCH /associate/:associate_id
* DELETE /associate/:associate_id
* GET /associate/:associate_id
* GET /associate
##### Deploy https://kregister.herokuapp.com/

