import { ReactNode } from "react"

interface SelectProps {
    label: string
    options: string[]
}

export const Select = (props: SelectProps) => {
    const label: string = props.label
    const options: string[] = props.options

    const getOptions = (): ReactNode => {
        return options.map((value: string, index: number): JSX.Element => {
            let nome: string = value[0].toUpperCase() + value.slice(1)

            return <option value={value} key={index}> {nome} </option>
        })
    }

    return <>
        <label className=""> {label} </label>
        <select className="w-full mt-1 p-2 border-default text-[20px] bg-blank">
            {getOptions()}
        </select>
    </>
}