import { FormCadProd } from "../../components/form"
import { HeaderAdmin } from "../../components/header"
import { useAppContext } from "../../core/context"

export const CadProd = () => {
    const { context } = useAppContext()

    const user = context.user.nome
    const cargo = context.user.tipo

    return <>
        <HeaderAdmin page="cadProd" cargo={cargo} user={user} />

        <main className="m-[20px] p-[9px] bg-[#6491BE] border-default">
            <section className="">
                <FormCadProd />
            </section>
        </main>
    </>
}