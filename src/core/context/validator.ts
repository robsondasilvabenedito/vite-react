import { DataBase } from "../config"
import { Produto, User } from "../model"
import { InitContextType } from "./Context"

export const contextValidator = (context: InitContextType | null): boolean => {
    try {
        if (context == null) return false
        
        if (!validateUser(context.user)) return false
        if (!validateDB(context.db)) return false
        if (!validateIsLogged(context.isLogged)) return false
    } catch (error) {
        return false
    }

    return true
}

const validateDB = (db: DataBase | null): boolean => {
    let result = true

    if (db == null) return false

    if (db.categorias == null) return false
    if (db.produtos == null) return false
    if (db.users == null) return false

    db.categorias.forEach((value: string) => {
        if (value == null) result = false
    })
    db.produtos.forEach((produto: Produto) => {
        if (produto.categoria == null) result = false
        if (produto.estoque == null) result = false
        if (produto.nome == null) result = false
        if (produto.valor == null) result = false
    })
    db.users.forEach((user: User) => {
        if (user.login == null) result = false
        if (user.nome == null) result = false
        if (user.senha == null) result = false
        if (user.tipo == null) result = false
    })

    return result
}

const validateIsLogged = (isLogged: boolean | null): boolean => {
    if (isLogged == null) return false

    return true
}

const validateUser = (user: User | null): boolean => {
    if (user == null) return false

    if (user.login == null) return false
    if (user.nome == null) return false
    if (user.senha == null) return false
    if (user.tipo == null) return false

    return true
}