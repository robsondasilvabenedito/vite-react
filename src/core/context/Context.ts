import { createContext, useContext } from "react";
import { Produto, User } from "../model";
import { DataBase } from "../config";

export const INIT_CONTEXT = {
    isLogged: false,
    user: new User("", "", "", "user"),
    db: new DataBase()
}

export type InitContextType = typeof INIT_CONTEXT

export const AppContext = createContext({
    context: INIT_CONTEXT,
    saveUser: (user: User) => { },
    setLogged: (isLogged: boolean) => { },
    createUser: (user: User) => { },
    createProduto: (produto: Produto) => { },
    deleteProduto: (produto: Produto) => { },
    createCategoria: (categoria: string) => { },
    deleteCategoria: (categoria: string) => { },
    login: (nome: string, senha: string) => { },
    clenAll: () => { },
    logout: () => { },
})

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context
}