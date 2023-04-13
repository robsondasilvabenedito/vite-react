import React, { ReactNode, useState } from "react"
import { InputSubmit, InputLabel } from "../input"
import { loginDB } from "../../core/config"
import { useAppContext } from "../../core/context"

export const FormLogin = () => {
    const { saveUser, setLogged } = useAppContext()

    const initForm = {
        user: "",
        password: ""
    }

    const [form, setForm] = useState(initForm)
    const [error, setError] = useState(false)

    const handleForm = (key: string, event: React.ChangeEvent<HTMLInputElement> | string) => {
        let value: string

        if (typeof (event) === "string") {
            value = event
        } else {
            value = (event as React.ChangeEvent<HTMLInputElement>).target.value
        }

        setForm({ ...form, [key]: [value] })
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()

        let result = loginDB(form.user, form.password)

        if (result === null) {
            setLogged(false)

            setError(true)
        } else {
            saveUser(result)
            setLogged(true)
        }
    }

    const getError = (): ReactNode => {
        if (error) {
            return <p className="text-red-600 animate-bounce"> SENHA OU USUARIO ERRADO </p>
        } else {
            return <></>
        }
    }

    return <form onSubmit={handleSubmit} className="w-full p-3">
        <InputLabel label="Usuario" placeholder="usuario" type="text"
            var="user" value={form.user} onChange={handleForm} />

        <InputLabel label="Senha" placeholder="senha" type="password"
            var="password" value={form.password} onChange={handleForm} />

        {getError()}

        <a> esqueci minha senha </a>

        <InputSubmit text="LOGIN"
            className="w-full h-[40px] bg-green-700 hover:bg-green-900 text-white font-bold text-[20px] mt-[30px]" />
    </form>
}