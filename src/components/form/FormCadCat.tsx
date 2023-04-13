import { useState } from "react"
import { GraficoCat } from "../graficos"
import { InputLabel, InputSubmit } from "../input"

export const FormCadCat = () => {
    const Cats: Map<string, number> = new Map()

    Cats.set("enlatados", 90)
    Cats.set("cosmeticos", 10)
    Cats.set("higiene", 33)

    const initForm = {
        nome: "",
    }

    const [form, setForm] = useState(initForm)

    const handleForm = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = event.target.value

        setForm({ ...form, [key]: [value] })
    }

    return <form>
        <InputLabel label="Nome" var="nome" value={form.nome} type="text" onChange={handleForm} />

        <GraficoCat cats={Cats} />

        <InputSubmit text="SALVAR" className="w-full h-[40px] bg-green-700 hover:bg-green-900 text-white font-bold text-[20px] mt-[30px]" />
    </form>
}