import { ReactNode, useEffect, useState } from "react"
import { getCategorias, getProdutos } from "../../core/config"
import { Produto } from "../../core/model"

export const MainHome = () => {
    const categorias = getCategorias()
    const produtos = getProdutos()

    const [cat, setCat] = useState<string[]>([...categorias])
    const [reg, setReg] = useState<string>("")

    // Pegar a lista de Produtos baseado na pesquisa realizada
    const getProd = (filter: string): Produto[] => {
        let tempProdutos: Produto[] = []

        produtos.forEach((produto: Produto) => {
            if (filter != "") {
                let match = produto.nome.match(filter)

                if (match == null) {
                    return
                }
            }

            cat.forEach((categoria: string) => {
                if (produto.categoria == categoria) {
                    tempProdutos.push(produto)
                }
            })
        })

        return tempProdutos
    }

    // JSX.Element da barra de pesquisa
    const searchLabel = (): ReactNode => {
        const [search, setSearch] = useState("")

        useEffect(() => {
            setReg(search)
        })

        return <>
            <input className="w-full p-2 bg-blank border-default" type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} />
        </>
    }

    // JSX.Element do filtro das categorias
    const createFilter = (categorias: string[]): ReactNode => {
        return categorias.map((value: string, index: number): JSX.Element => {
            const [isChecked, setIsChecked] = useState(true)

            const addCat = (value: string) => {
                setCat([...cat, value])
            }
        
            const removeCat = (value: string) => {
                let tempCat: string[] = []
        
                cat.forEach((cat: string) => {
                    if (cat != value) {
                        tempCat.push(cat)
                    }
                })
        
                setCat([...tempCat])
            }

            const toggle = () => {
                if (isChecked) {
                    removeCat(value)
                } else {
                    addCat(value)
                }

                setIsChecked(!isChecked)
            }

            return <div className="flex items-center">
                <input className="w-[20px] h-[20px]" type="checkbox" value={value} defaultChecked={isChecked} onClick={() => { toggle() }} />
                <label className="text-[30px] ml-2"> {`${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`} </label>
            </div>
        })
    }

    const createProduto = (nome: string, valor: number, estoque: number, categoria: string, key: number): JSX.Element => {
        let preco = valor.toString()

        let decimal = preco.split(".")

        if (decimal.length > 1) {
            preco = `${decimal[0]},${decimal[1]}`
        } else {
            preco = `${decimal[0]},00`
        }

        return <div key={key} className="h-[200px] bg-form m-1 p-2 border-default">
            <div className="h-[20%] text-[30px] font-medium flex items-center justify-center"> {nome.toUpperCase()} </div>
            <div className="h-[80%] flex flex-col justify-between pt-3">
                <div>
                    <div> VALOR: R${preco}  </div>
                    <div> ESTOQUE: {estoque} </div>
                </div>

                <div> categoria: {categoria.toLowerCase()} </div>
            </div>
        </div>
    }

    const createProdutos = (produtos: Produto[]): ReactNode => {
        return produtos.map((value: Produto, index: number): JSX.Element => {
            return createProduto(value.nome, value.valor, value.estoque, value.categoria, index)
        })
    }

    return <main className="m-[20px] p-[9px] bg-main border-default">
        <section className="border-default p-2">
            {searchLabel()}
        </section>
        <section className="mt-2 grid grid-cols-1 md:grid-cols-3">
            <article className="w-full md:pr-1">
                <div className="md:min-h-full border-default p-2">
                    <form className="flex flex-col">
                        {createFilter(categorias)}
                    </form>
                </div>
            </article>
            <article className="w-full mt-2 md:col-span-2 md:pr-0 md:mt-0 md:pl-1">
                <div className="min-h-full border-default grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {createProdutos(getProd(reg))}
                </div>
            </article>
        </section>
    </main>
}