import React, { useState } from "react"
import { InputLabel, InputSubmit } from "../input"
import { Select } from "../select"
import { GraficoCat } from "../graficos"

export const FormCadProd = () => {
    const Cats: Map<string, number> = new Map()

    for (let x: number = 0; x < 90; x++) {
        Cats.set(`${x}`, x)
    }

    const initForm = {
        nome: "",
        valor: 0,
        estoque: 0
    }

    const [form, setForm] = useState(initForm)

    const handleForm = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
        let value: string | number

        let chars: string = event.target.value

        if (key === "valor") {
            let regex: RegExp = /^(\d*|\d*,|\d*,\d|\d*,\d{2})$/

            let result = chars.match(regex)

            console.log(result)

            if (result === null) {
                return
            }

            value = result[0]
        } else if (key === "estoque") {
            let regex: RegExp = /(\d*)$/

            let result = chars.match(regex)

            if (result == null) {
                return
            }

            value = Number(result[0])
        } else {
            value = event.target.value
        }

        setForm({ ...form, [key]: [value] })
    }

    return <form>
        <InputLabel label="Nome" var="nome" value={form.nome} type="text" onChange={handleForm} />

        <InputLabel label="Valor (R$)" var="valor" value={form.valor} type="text" onChange={handleForm} />

        <InputLabel label="Estoque" var="estoque" value={form.estoque} type="text" onChange={handleForm} />

        <Select label="Categorias" options={[...Cats.keys()]} />

        <GraficoCat cats={Cats}/>

        <InputSubmit text="SALVAR" className="w-full h-[40px] bg-green-700 hover:bg-green-900 text-white font-bold text-[20px] mt-[30px]" />
    </form>
}