import { Navigate, Route, Routes } from "react-router-dom"

import Login from "../pages/login"

import CadProd from "../pages/cad_prod"
import CadUsu from "../pages/cad_usu"
import CadCat from "../pages/cad_cat"

import HomeAdmin from "../pages/home_admin"
import Home from "../pages/home"
import { useAppContext } from "../core/context"
import { ReactNode } from "react"

export const AppRoutes = () => {
    //return routeDebug()

    return <Routes>
        <Route path="/" element={routeLogin()} />

        <Route path="/home" element={routeBody(getHome())} />

        <Route path="/cad/prod" element={getAdmin(<CadProd />)}>
            <Route path="*" element={getAdmin(<CadProd />)} />
        </Route>
        <Route path="/cad/cat" element={getAdmin(<CadCat />)} >
            <Route path="*" element={getAdmin(<CadCat />)} />
        </Route>
        <Route path="/cad/usu" element={getAdmin(<CadUsu />)}>
            <Route path="*" element={getAdmin(<CadUsu />)} />s
        </Route>

        <Route path="*" element={routeBody(getHome())} />
    </Routes>
}

const routeDebug = () => {
    return <Routes>
        <Route path="*" element={<HomeAdmin />} />
    </Routes>
}

const routeLogin = () => {
    const { context } = useAppContext()

    const isLogged = context.isLogged

    return isLogged ? <Navigate to={"/home"} /> : <Login />
}

const routeBody = (yes: ReactNode) => {
    const { context } = useAppContext()

    const isLogged = context.isLogged

    return isLogged ? yes : <Navigate to={"/"} />
}

const getAdmin = (admin: ReactNode) => {
    const { context } = useAppContext()

    const isLogged = context.isLogged

    if (isLogged) {
        let tipo = context.user.tipo

        if (tipo == "admin") {
            return admin
        } else {
            return <Navigate to={"/home"} />
        }
    }

    return <Navigate to={"/"} />
}

const getHome = () => {
    const { context } = useAppContext()

    const user = context.user

    if (user.tipo == "admin") {
        return <HomeAdmin />
    } else {
        return <Home />
    }
}