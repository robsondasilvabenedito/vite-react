interface InputErroProps {
    text: string
    show: boolean
}

export const InputErro = (props: InputErroProps) => {
    const text = props.text
    const show = props.show

    if (show) {
        return <p id="erro" className="text-red-600 animate-bounce"> {text} </p>
    } else {
        return <></>
    }
}