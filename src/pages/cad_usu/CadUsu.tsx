import { FormCadUsu } from "../../components/form"
import { HeaderAdmin } from "../../components/header"
import { useAppContext } from "../../core/context"

export const CadUsu = () => {
    const { context } = useAppContext()

    const user = context.user.nome
    const cargo = context.user.tipo

    return <>
        <HeaderAdmin page="cadUsu" cargo={cargo} user={user} />

        <main className="flex justify-center">
            <section className="w-[90%] m-[20px] p-[9px] bg-[#6491BE] border-default">
                <FormCadUsu />
            </section>
        </main>
    </>
}