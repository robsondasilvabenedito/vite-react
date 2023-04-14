import { useState } from "react"
import { GraficoCat } from "../graficos"
import { InputErro, InputLabel, InputSubmit } from "../input"
import { useAppContext } from "../../core/context"
import { Produto } from "../../core/model"

export const FormCadCat = () => {
    const { context, createCategoria } = useAppContext()

    const produtos = context.db.produtos
    const categorias = context.db.categorias

    const mapProdutos: Map<string, number> = new Map()

    categorias.forEach((categoria: string) => {
        let qtd: number = 0

        mapProdutos.set(categoria, qtd)

        produtos.forEach((produto: Produto) => {
            if (produto.categoria == categoria) {
                qtd++

                mapProdutos.set(categoria, qtd)
            }
        })
    })

    const initForm = {
        categoria: "",
    }

    const [form, setForm] = useState(initForm)
    const [erro, setErro] = useState(false)

    const handleForm = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = event.target.value

        setForm({ ...form, [key]: [value] })
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()

        let result = false

        if (form.categoria == "") result = true

        let categoria: String = form.categoria.toString()

        context.db.categorias.forEach((value: string) => {
            if (value == categoria.toLowerCase()) {
                result = true
            }
        })

        setErro(result)

        if (result) return

        createCategoria(categoria.toLowerCase())
        setForm(initForm)
    }

    return <form onSubmit={handleSubmit}>
        <InputLabel label="Categoria" var="categoria" value={form.categoria} type="text" onChange={handleForm} />

        <InputErro show={erro} text="Categoria inválida" />

        <GraficoCat cats={mapProdutos} />

        <InputSubmit text="SALVAR" className="w-full h-[40px] bg-green-700 hover:bg-green-900 text-white font-bold text-[20px] mt-[30px]" />
    </form>
}