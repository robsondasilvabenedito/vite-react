import { NavigateFunction, useNavigate } from "react-router-dom"
import { useAppContext } from "../../core/context"

interface HeaderProps {
    cargo: string,
    user: string,
}


export const Head = (props: HeaderProps) => {
    const { clenAll } = useAppContext()

    const navigate: NavigateFunction = useNavigate()

    const cargo = props.cargo
    const user = props.user

    const handleExit = () => {
        clenAll()

        navigate("/")
    }

    return <header className="pt-[3px] bg-[#6491BE] text-white">
        <div className="flex px-[10px] justify-between text-[40px] border-b-default">
            <div className="flex">
                <div>
                    {cargo.toUpperCase()}
                </div>
                <div className="ml-[20px]">
                    {user.toUpperCase()}
                </div>
            </div>
            <div onClick={handleExit} className="cursor-pointer hover:text-red-700">
                SAIR
            </div>
        </div>
    </header>
}