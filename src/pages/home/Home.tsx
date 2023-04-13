import { Head } from "../../components/header"
import { MainHome } from "../../components/main"
import { useAppContext } from "../../core/context"

export const Home = () => {
    const {context} = useAppContext()

    const cargo = context.user.tipo
    const user = context.user.nome

    return <>
        <Head cargo={cargo} user={user}/>

        <MainHome />
    </>
}