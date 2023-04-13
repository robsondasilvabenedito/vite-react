import { useState } from "react"
import { InputLabel, InputSubmit } from "../input"
import { Select } from "../select"

export const FormCadUsu = () => {
    const Cats: Map<string, number> = new Map()

    Cats.set("enlatados", 90)
    Cats.set("cosmeticos", 10)
    Cats.set("higiene", 33)

    const initForm = {
        nome: "",
        login: "",
        senha: "",
        confSenha: "",
        email: "",
        tipo: ""
    }

    const [form, setForm] = useState(initForm)

    const handleForm = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = event.target.value

        setForm({ ...form, [key]: [value] })
    }

    return <form>
        <InputLabel label="Nome" var="nome" value={form.nome} type="text" onChange={handleForm} />

        <InputLabel label="Login" var="login" value={form.login} type="text" onChange={handleForm} />

        <InputLabel label="Senha" var="senha" value={form.senha} type="password" onChange={handleForm} />

        <InputLabel label="Confirmar Senha" var="confSenha" value={form.confSenha} type="password" onChange={handleForm} />

        <InputLabel label="Email" var="email" value={form.email} type="text" onChange={handleForm} />

        <Select label="Tipos" options={[...Cats.keys()]} />

        <InputSubmit text="SALVAR" className="w-full h-[40px] bg-green-700 hover:bg-green-900 text-white font-bold text-[20px] mt-[30px]" />
    </form>
}