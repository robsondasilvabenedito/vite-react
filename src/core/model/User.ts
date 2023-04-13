import { UserType } from "./UserType"

/**
 * User
 * 
 * @class User
 */
export class User {
    nome: string
    login: string
    senha: string
    tipo: UserType

    constructor(
        nome: string,
        login: string,
        senha: string,
        tipo: UserType
    ) {
        this.nome = nome
        this.login = login
        this.senha = senha
        this.tipo = tipo
    }
}