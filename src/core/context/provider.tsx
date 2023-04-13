import { ReactNode, useCallback, useReducer } from "react"
import { AppContext, INIT_CONTEXT, InitContextType } from "./Context"
import { userContextReducer } from "./reducer"
import { Actions, User } from "../model"

interface AppContextProviderProps {
    children: ReactNode
}

export const AppContextProvider = (props: AppContextProviderProps) => {
    const persistUser = localStorage.getItem("all")

    console.log(persistUser)

    const init: InitContextType = persistUser ? JSON.parse(persistUser) as InitContextType : INIT_CONTEXT

    const [user, dispatch] = useReducer(userContextReducer, init)

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

    return <AppContext.Provider value={{
        context: user,
        saveUser: saveUser,
        setLogged: setLogged,
        clenAll: cleanAll
    }}>
        {props.children}
    </AppContext.Provider>
}