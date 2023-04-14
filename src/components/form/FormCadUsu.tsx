import { useEffect, useState } from "react"
import { InputErro, InputLabel, InputSubmit } from "../input"
import { Select } from "../select"
import { useAppContext } from "../../core/context"
import { User, UserType } from "../../core/model"

export const FormCadUsu = () => {
    const { context, createUser } = useAppContext()

    const tipo: string[] = []

    context.db.users.forEach((user: User) => {
        let found = tipo.find(value => value == user.tipo)

        if (found == undefined) {
            tipo.push(user.tipo)
        }
    })

    const initForm = {
        nome: "",
        login: "",
        senha: "",
        confSenha: "",
        email: "",
        tipo: tipo[0]
    }

    const [form, setForm] = useState(initForm)

    const [erroNome, setErroNome] = useState(false)
    const [erroLogin, setErroLogin] = useState(false)
    const [erroSenha, setErroSenha] = useState(false)
    const [erroEmail, setErroEmail] = useState(false)

    const handleForm = (key: string, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let value: string = event.target.value

        setForm({ ...form, [key]: value })
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()

        let resul: User | null

        if (verifyInputs()) {
            let user = new User(form.nome, form.login, form.senha, form.tipo as UserType)

            createUser(user)

            setForm(initForm)
        }
    }

    const verifyInputs = (): boolean => {
        let result: boolean = true

        let isNome: boolean = false
        let isLogin: boolean = false
        let isSenha: boolean = false
        let isEmail: boolean = false

        let senha: String = form.senha.toString()
        let confSenha: String = form.confSenha.toString()

        if (form.nome == "") {
            isNome = true
        }

        if (form.login == "") {
            isLogin = true
        }

        if (senha == "" || senha != confSenha) {
            isSenha = true
        }

        if (form.email == "") {
            isEmail = true
        }

        setErroNome(isNome)
        setErroLogin(isLogin)
        setErroSenha(isSenha)
        setErroEmail(isEmail)

        if (isNome == true ||
            isLogin == true ||
            isSenha == true ||
            isEmail == true) {
            result = false
        }

        return result
    }

    return <form onSubmit={handleSubmit}>
        <InputLabel label="Nome" var="nome" value={form.nome} type="text" onChange={handleForm} />
        <InputErro text="Nome Invalido" show={erroNome} />

        <InputLabel label="Login" var="login" value={form.login} type="text" onChange={handleForm} />
        <InputErro text="Login Invalido" show={erroLogin} />

        <InputLabel label="Senha" var="senha" value={form.senha} type="password" onChange={handleForm} />
        <InputErro text="Senha Invalido" show={false} />

        <InputLabel label="Confirmar Senha" var="confSenha" value={form.confSenha} type="password" onChange={handleForm} />
        <InputErro text="Senhas devem ser Iguais" show={erroSenha} />

        <InputLabel label="Email" var="email" value={form.email} type="text" onChange={handleForm} />
        <InputErro text="Email Invalido" show={erroEmail} />

        <Select label="Tipos" options={tipo} handle={handleForm} var="tipo" />

        <InputSubmit text="SALVAR" className="w-full h-[40px] bg-green-700 hover:bg-green-900 text-white font-bold text-[20px] mt-[30px]" />
    </form>
}