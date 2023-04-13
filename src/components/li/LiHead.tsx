interface LiHeadProps {
    text: string
    onClick: () => void
}

export const LiHead = (props: LiHeadProps) => {
    return <li className="min-w-[120px] px-[10px] text-center border-r-default cursor-pointer hover:text-blue-800" onClick={props.onClick}>
        {props.text}
    </li>
}