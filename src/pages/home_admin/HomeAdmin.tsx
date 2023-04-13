import { ReactNode } from "react"
import { HeaderAdmin } from "../../components/header"
import { useAppContext } from "../../core/context"
import { MainHome } from "../../components/main"

export const HomeAdmin = () => {
    const { context } = useAppContext()

    const user = context.user.nome
    const cargo = context.user.tipo

    return <>
        <HeaderAdmin user={user} cargo={cargo} page="home" />

        <MainHome />
    </>
}