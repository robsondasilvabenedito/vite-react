import { ReactNode, useCallback, useReducer } from "react"
import { AppContext, INIT_CONTEXT, InitContextType } from "./Context"
import { userContextReducer } from "./reducer"
import { Actions, Produto, User } from "../model"
import { contextValidator } from "./validator"

interface AppContextProviderProps {
    children: ReactNode
}

export const AppContextProvider = (props: AppContextProviderProps) => {
    const persistContext = localStorage.getItem("all")

    let init

    // Check DB
    let reset = false

    if (reset) {
        init = INIT_CONTEXT
    } else {
        if (persistContext) {
            const context = JSON.parse(persistContext) as InitContextType

            if (contextValidator(context)) {
                init = context
            } else {
                init = INIT_CONTEXT
            }
        } else {
            init = INIT_CONTEXT
        }
    }

    localStorage.setItem("all", JSON.stringify(init))

    const [user, dispatch] = useReducer(userContextReducer, init)

    // User
    const saveUser = useCallback((user: User) => {
        dispatch({
            key: Actions.SaveUser,
            value: user
        })
    }, [dispatch])

    const setLogged = useCallback((isLogged: boolean) => {
        dispatch({
            key: Actions.SetLogged,
            value: isLogged
        })
    }, [dispatch])

    const cleanAll = useCallback(() => {
        dispatch({
            key: Actions.Clean
        })
    }, [dispatch])

    const createUser = useCallback((user: User) => {
        dispatch({
            key: Actions.CreateUser,
            value: user
        })
    }, [dispatch])

    // Sessão
    const userLogin = useCallback((nome: string, senha: string) => {
        dispatch({
            key: Actions.Login,
            value: { nome: nome, senha: senha }
        })
    }, [dispatch])

    const userLogout = useCallback(() => {
        dispatch({
            key: Actions.Logout
        })
    }, [dispatch])

    // Produto
    const createProduto = useCallback((produto: Produto) => {
        dispatch({
            key: Actions.CreateProduto,
            value: produto
        })
    }, [dispatch])

    const deleteProduto = useCallback(() => {
        dispatch({
            key: Actions.CreateProduto
        })
    }, [dispatch])

    // Categoria
    const createCategoria = useCallback((categoria: string) => {
        dispatch({
            key: Actions.CreateCategoria,
            value: categoria
        })
    }, [dispatch])

    const deleteCategoria = useCallback(() => {
        dispatch({
            key: Actions.CreateProduto,
        })
    }, [dispatch])

    // Provider
    return <AppContext.Provider value={{
        context: user,
        saveUser: saveUser,
        setLogged: setLogged,
        clenAll: cleanAll,
        createUser: createUser,
        createProduto: createProduto,
        deleteProduto: deleteProduto,
        createCategoria: createCategoria,
        deleteCategoria: deleteCategoria,
        login: userLogin,
        logout: userLogout
    }}>
        {props.children}
    </AppContext.Provider>
}