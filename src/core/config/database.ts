import { DataBase, User } from "../model"
import { Produto } from "../model/Produto"

const DB: DataBase = new DataBase()

export const loginDB = (login: string, password: string): User | null => {
    let result: User | null = null

    DB.users.map((user: User) => {
        if (user.login == login && user.senha == password) {
            result = user
        }
    })

    return result
}

export const getCategorias = (): string[] => {
    let result: string[]

    result = DB.categorias

    return result
}

export const getProdutos = (): Produto[] => {
    let result: Produto[]

    result = DB.produtos

    return result
}

export const createUser = (user: User): boolean => {
    DB.users.map((user: User) => {
        if (user.login === user.login) {
            return false
        }
    })

    DB.users.push(user)
    return true
}