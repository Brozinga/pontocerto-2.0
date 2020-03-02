# Projeto de Treinamento

## Ponto Certo - 2.0

Sistema produzido com uma API Node.js, MongoDB como banco de dados, REACT JS no Front e REACT NATIVE no Mobile.

### API NodeJS

A API foi feita, em NodeJS, com Driving Domain Design (DDD) e os principios de SOLID.
Conta com as seguintes Features:

- Depuração de código com refresh automático após atualização (visual studio code).
- ESLint Standard para manter o padrão da escrita do código.
- CrossEnv para carregamento das variáveis de Ambiente independente do SO usado.
- Envirement para Desenvolvimento e Produção.
- Dominio fabricado com a biblioteca JOI, para ser independente do Banco de dados usados.
- Log de Erros em arquivos .LOG usando a biblioteca WinstonJS para erros não tratados.
- API criada com o Framework EpressJS com CommonJS.
- Autenticação por Json Web Token (JWT).
- Sistema de Permissionamento "ADMIN", "USUARIO" para acesso a cada rota da API.
- Express-Status para acompanhamento em tempo real de consumo de CPU, RAM, requisições etc.
- Documentação interativa com Swagger.
- Modulo Cluster nativo (multithreading).
- Melhorias de performance como compressão de dados, todos os processos assíncronos, sem logs de console em produção.
- Protocolo HTTP2.

#### DESENVOLVIMENTO

        Para usar a API em desenvolvimento é necessário ter o node 10.16.0 ou maior.
        O Modo Cluster não funciona no Depurador do VISUAL STUDIO CODE.

### CheckList

- Criar a estrutura do Banco de Dados (Tabelas, relacionamentos).

- Criar tabela de Usuários - (Banco).

- Criar tabela de Niveis de Acesso - (Banco).

- Criar uma tabela de lançamentos - (Banco).

- Criar uma tabela de Banco de Horas - (Banco).

---

- Criar o Logo.

- Criar identidade Visual do sistema.

---

- Criar a estrutura do Banco de Dados (Mongoose).

> Models ========================================

- Criar tabela de Usuários - (Model). - OK

- Criar uma tabela de lançamentos - (Model).

- Criar uma tabela de Banco de Horas - (Model).

> Models ========================================

- Criar rota de criação de Usuarios - Admin (Back).

- Criar rota de edição de Usuarios - Admin (Back).

- Criar rota de delecao de Usuarios - Admin (Back).

- Criar rota de listagem de Usuarios - Admin (Back).

- Criar rota de edição de Usuarios - Persona (Back).

- Criar rota de login (Back).

- Criar rota de recuperação de senha (Back).

- Criar rota de criação de lançamentos (Back).

- Criar rota de edição de lançamentos (Back).

- Criar rota de delecao de lançamentos (Back).

- Criar rota de listagem de lançamentos (Back).

- Criar rota de listagem do Dashboard (Back).

- Criar rota de criação de Banco de Horas (Back).

- Criar rota de edição de Banco de Horas (Back).

---

- Criar a tela de Login (Front).

- Criar a tela de Bater ponto (Front).

- Criar a tela de Dashboard (Front).

---
