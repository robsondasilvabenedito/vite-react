import { createContext, useContext } from "react";
import { User } from "../model";

export const INIT_CONTEXT = {
    isLogged: false,
    user: new User("", "", "", "user")
}

export type InitContextType = typeof INIT_CONTEXT

export const AppContext = createContext({
    context: INIT_CONTEXT,
    saveUser: (user: User) => { },
    setLogged: (isLogged: boolean) => { },
    clenAll: () => { }
})

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context
}