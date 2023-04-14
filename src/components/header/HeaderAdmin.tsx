import { NavigateFunction, useNavigate } from "react-router-dom"
import { LiHead } from "../li"
import { useAppContext } from "../../core/context"

type pagAtual =
    "home" |
    "cadProd" |
    "cadCat" |
    "cadUsu"

interface HeaderAdminProps {
    cargo: string,
    user: string,
    page: pagAtual
}

export const HeaderAdmin = (props: HeaderAdminProps) => {
    const { clenAll, logout } = useAppContext()

    const navigate: NavigateFunction = useNavigate()

    const cargo: string = props.cargo.toUpperCase()
    const user: string = props.user.toUpperCase()

    const handleClean = () => {
        clenAll()

        navigate("/")
    }

    const handleLogout = () => {
        logout()

        navigate("/")
    }

    const goToHome = () => {
        navigate("/home")
    }

    const goToCadProd = () => {
        navigate("/cad/prod")
    }

    const goToCadCat = () => {
        navigate("/cad/cat")
    }

    const goToCadUsu = () => {
        navigate("/cad/usu")
    }

    return <header className="pt-[3px] bg-[#6491BE] text-white">
        <div className="flex px-[10px] justify-between text-[40px] border-b-default">
            <div className="flex">
                <div>
                    {cargo}
                </div>
                <div className="ml-[20px]">
                    {user}
                </div>
            </div>
            <div className="flex">
                <div onClick={handleClean} className="cursor-pointer hover:text-red-700 mr-6">
                    CLEAN
                </div>
                <div onClick={handleLogout} className="cursor-pointer hover:text-red-700">
                    SAIR
                </div>
            </div>
        </div>
        <nav className="border-b-default text-[20px]">
            <ul className="flex">
                {(() => {
                    if (props.page != "home") {
                        return <LiHead text="HOME" onClick={goToHome} />
                    }
                })()}
                {(() => {
                    if (props.page != "cadProd") {
                        return <LiHead text="CAD. PROD." onClick={goToCadProd} />
                    }
                })()}
                {(() => {
                    if (props.page != "cadCat") {
                        return <LiHead text="CAD. CAT." onClick={goToCadCat} />
                    }
                })()}
                {(() => {
                    if (props.page != "cadUsu") {
                        return <LiHead text="CAD. USU." onClick={goToCadUsu} />
                    }
                })()}
            </ul>
        </nav>
    </header>
}