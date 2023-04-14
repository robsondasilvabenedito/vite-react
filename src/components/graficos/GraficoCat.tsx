import { ReactNode } from "react"

interface GraficoCatProps {
    cats: Map<string, number>
}

export const GraficoCat = (props: GraficoCatProps) => {
    const cats: Map<string, number> = props.cats

    const keys: string[] = []
    const values: number[] = []

    cats.forEach((value: number, key: string) => {
        keys.push(key)
        values.push(value)
    })

    const getLabels = (): ReactNode => {
        let max: number = 0

        values.forEach((value: number) => {
            if (max < value) {
                max = value
            }
        })

        let width: number = String(max).length * 8 + 20

        return keys.map((key: string) => {
            const uniqueKey = `${key}label`

            return <div key={uniqueKey} className="flex pb-1">
                <div style={{ width: `${width}px` }} className="flex items-center justify-center bg-blue-500 mr-2 p-1 border-default">
                    {cats.get(key)}
                </div>
                <div className="flex items-center text-[20px]">
                    <label> {(key[0].toUpperCase() + key.slice(1))} </label>
                </div>
            </div>
        })
    }

    const getGraphsB = () => {
        let max: number = 0

        values.forEach((value: number) => {
            if (max < value) {
                max = value
            }
        })

        return keys.map((key: string) => {
            const uniqueKey = `${key}graphB`

            let height: number = (cats.get(key)! * 90) / max

            return <th key={uniqueKey}>
                <div className="h-full text-center flex flex-col justify-end items-center">
                    <div className=""> {cats.get(key)} </div>
                    <div style={{ height: `${height}%` }} className="w-[60px] md:w-[100px] px-1">
                        <div className="w-full bg-[#0C7EAC] border-default h-full"> </div>
                    </div>
                </div>
            </th>
        })
    }

    const getGraphsH = () => {
        return keys.map((key: string) => {
            const uniqueKey = `${key}graphH`

            return <td key={uniqueKey} className="text-center bg-third">
                {key}
            </td>
        })
    }

    return <div className="min-h-[200px] flex mt-3 bg-blank border-default">
        <div className="hidden md:w-[70%] border-r-default md:flex md:items-end  overflow-x-auto">
            <table className="min-w-full h-full">
                <thead >
                    <tr className="h-[70%]">
                        {getGraphsB()}
                    </tr>
                </thead>
                <tbody className="border-t-default">
                    <tr className="h-[15%]">
                        {getGraphsH()}
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="w-full md:w-[30%] max-h-[300px] bg-second p-2 overflow-y-auto overflow-x-auto">
            {getLabels()}
        </div>
    </div>
}