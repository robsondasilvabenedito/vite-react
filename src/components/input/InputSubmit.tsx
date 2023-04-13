interface InputSubmitProps {
    text: string
    className: string
}

export const InputSubmit = (props: InputSubmitProps) => {
    return <input type="submit" value={props.text} className={props.className}/>
}