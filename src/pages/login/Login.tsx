import { FormLogin } from "../../components/form"

export const Login = () => {
    return <>
        <main className="w-screen h-screen flex justify-center items-center">
            <section className="w-[80%] md:w-[600px]  bg-[#6491BE] border-default">
                <article className="text-center py-2 bg-blue-400 border-b-default p-1">
                    <h1 className="text-[30px]"> ENTRAR NO SISTEMA </h1>
                </article>
                <article className="my-2 mx-1">
                    <FormLogin />
                </article>
            </section>
        </main>
    </>
}