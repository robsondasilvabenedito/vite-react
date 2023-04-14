import React, { ReactNode, useState } from "react"
import { InputSubmit, InputLabel, InputErro } from "../input"
import { useAppContext } from "../../core/context"
import { DataBase } from "../../core/config"

export const FormLogin = () => {
    const { context, login } = useAppContext()

    const DB: DataBase = context.db

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

        login(form.user, form.password)

        if (context.user.login == "") {
            setError(true)
        }
    }

    return <form onSubmit={handleSubmit} className="w-full p-3">
        <InputLabel label="Usuario" placeholder="usuario" type="text"
            var="user" value={form.user} onChange={handleForm} />

        <InputLabel label="Senha" placeholder="senha" type="password"
            var="password" value={form.password} onChange={handleForm} />

        <InputErro show={error} text="Login ou Senha Inválido"/>

        <a> esqueci minha senha </a>

        <InputSubmit text="LOGIN"
            className="w-full h-[40px] bg-green-700 hover:bg-green-900 text-white font-bold text-[20px] mt-[30px]" />
    </form>
}