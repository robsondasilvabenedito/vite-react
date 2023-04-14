import { NavigateFunction, useNavigate } from "react-router-dom"
import { useAppContext } from "../../core/context"

interface HeaderProps {
    cargo: string,
    user: string,
}


export const Head = (props: HeaderProps) => {
    const { logout } = useAppContext()

    const navigate: NavigateFunction = useNavigate()

    const cargo = props.cargo
    const user = props.user

    const handleLogout = () => {
        logout()

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
            <div className="flex">
                <div onClick={handleLogout} className="cursor-pointer hover:text-red-700">
                    SAIR
                </div>
            </div>
        </div>
    </header>
}