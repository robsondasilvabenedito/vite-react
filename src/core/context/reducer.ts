import { DataBase } from "../config"
import { Action, Actions, Produto, User } from "../model"
import { INIT_CONTEXT, InitContextType } from "./Context"

export const userContextReducer = (state = INIT_CONTEXT, action: Action): InitContextType => {
    const tempState = { ...state }

    //debugValue(action.value ?? "none")

    switch (action.key) {
        case Actions.SaveUser:
            tempState.user = action.value ?? tempState.user

            break
        case Actions.SetLogged:
            tempState.isLogged = action.value ?? false

            break
        case Actions.Logout:
            tempState.user = INIT_CONTEXT.user
            tempState.isLogged = INIT_CONTEXT.isLogged

            break
        case Actions.Clean:
            tempState.user = INIT_CONTEXT.user
            tempState.isLogged = INIT_CONTEXT.isLogged

            // Resetar DB
            tempState.db = setDefault()

            break
        case Actions.CreateProduto:
            tempState.db.produtos.push(action.value)

            break
        case Actions.CreateCategoria:
            tempState.db.categorias.push(action.value)

            break
        case Actions.Login:
            let nome = action.value.nome
            let senha = action.value.senha

            let users = tempState.db.users

            tempState.user = new User("", "", "", "user")
            tempState.isLogged = false

            users.forEach((user: User) => {
                if (user.login == nome && user.senha == senha) {
                    tempState.user = user
                    tempState.isLogged = true
                }
            })

            break
        case Actions.CreateUser:
            tempState.db.users.push(action.value)

            break
        default:
            throw new Error("Error")
    }

    localStorage.setItem("all", JSON.stringify(tempState))
    return tempState
}

const debugValue = (value: any) => {
    let cssText: string = "font-size: 15px; color: rgb(34, 197, 94)"
    let cssValue: string = "font-size: 15px; color: rgb(34, 197, 94)"

    console.log(`%cvalue: %c${value}`, cssText, cssValue)
}

const setDefault = (): DataBase => {
    let users: User[] = []
    let categorias: string[] = []
    let produtos: Produto[] = []

    users.push(admin())
    users.push(user())

    categorias = [...initCategorias()]
    produtos = [...iniProdutos()]

    return new DataBase(users, categorias, produtos)
}

const admin = (): User => {
    return { nome: "luan", login: "luan", senha: "admin", tipo: "user" }
}

const user = (): User => {
    return { nome: "maria", login: "maria", senha: "user", tipo: "admin" }
}

const initCategorias = (): string[] => {
    let categorias = ["enlatados", "higiene", "cosmeticos"]

    return categorias
}

const iniProdutos = (): Produto[] => {
    let sopa = new Produto("sopa", 22, 33.12, "enlatados")
    let feijao = new Produto("feijao", 22, 33, "enlatados")
    let sabao = new Produto("sabao", 33.88, 12, "higiene")
    let detergente = new Produto("detergente", 33, 12, "higiene")
    let perfume = new Produto("perfume", 12.32, 2, "cosmeticos")

    let produtos = [sopa, feijao, sabao, perfume, detergente]

    return produtos
}