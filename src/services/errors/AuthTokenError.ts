export class AuthTokenError extends Error{
  constructor(){
    super('Erro com a autenticação do token')
  }
}