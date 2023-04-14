import React, { useState } from "react"
import { InputErro, InputLabel, InputSubmit } from "../input"
import { Select } from "../select"
import { GraficoCat } from "../graficos"
import { useAppContext } from "../../core/context"
import { Produto, User } from "../../core/model"

export const FormCadProd = () => {
    const { context, createProduto } = useAppContext()

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
        nome: "",
        valor: 0,
        estoque: 0,
        categoria: categorias[0]
    }

    const [form, setForm] = useState(initForm)
    const [erroNome, setErroNome] = useState(false)
    const [erroValor, setErroValor] = useState(false)

    const handleForm = (key: string, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let value: string | number

        let chars: string = event.target.value

        if (key === "valor") {
            let regex: RegExp = /^(\d*|\d*,|\d*,\d|\d*,\d{2})$/

            let result = chars.match(regex)

            if (result === null) {
                return
            }

            value = Number(result[0])
        } else if (key === "estoque") {
            let regex: RegExp = /(\d*)$/

            let result = chars.match(regex)

            if (result == null) {
                return
            }

            value = Number(result[0])
        } else {
            value = event.target.value as string
        }

        setForm({ ...form, [key]: value })
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()

        const nome: String = form.nome.toString()
        const categoria: String = form.categoria.toString()

        let result = false

        if (form.nome == "") {
            result = true

            setErroNome(true)
        } else {
            setErroNome(false)
        }

        context.db.produtos.forEach((value: Produto) => {
            if (value.nome == nome.toLowerCase() && value.categoria == categoria.toLowerCase()) {
                setErroNome(true)

                result = true
            }
        })

        if (form.valor == 0) {
            result = true

            setErroValor(true)
        } else {
            setErroValor(false)
        }

        if (result) return

        let produto = new Produto(nome.toLowerCase(), form.valor, form.estoque, categoria.toLowerCase())

        createProduto(produto)
        setForm(initForm)
    }

    return <form onSubmit={handleSubmit}>
        <InputLabel label="Nome" var="nome" value={form.nome} type="text" onChange={handleForm} />
        <InputErro show={erroNome} text="Nome inválido" />

        <InputLabel label="Valor (R$)" var="valor" value={form.valor} type="text" onChange={handleForm} />
        <InputErro show={erroValor} text="Valor inválido" />

        <InputLabel label="Estoque" var="estoque" value={form.estoque} type="text" onChange={handleForm} />
        <InputErro show={false} text="Estoque inválido" />

        <Select label="Categorias" options={[...categorias]} handle={handleForm} var="categoria" />

        <GraficoCat cats={mapProdutos} />

        <InputSubmit text="SALVAR" className="w-full h-[40px] bg-green-700 hover:bg-green-900 text-white font-bold text-[20px] mt-[30px]" />
    </form>
}