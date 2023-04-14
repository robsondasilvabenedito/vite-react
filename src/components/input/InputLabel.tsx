import React, { useState } from "react"
import * as bs from "react-icons/bs"

interface InputLabelProps {
    label: string
    placeholder?: string
    heigh?: string
    var: string
    value: string | number
    onChange: (key: string, event: React.ChangeEvent<HTMLInputElement>) => void
    type: React.HTMLInputTypeAttribute
}

export const InputLabel = (props: InputLabelProps) => {
    const label: string = props.label
    const placeholder: string = props.placeholder ?? ""
    const heigh: string = props.heigh ?? "40px"
    const value: string | number = props.value
    const onChange = props.onChange

    const [toggle, setToggle] = useState(false)
    const [type, setType] = useState(props.type)

    const showPass = () => {
        setToggle(!toggle)

        if (toggle) {
            setType("password")
        } else {
            setType("text")
        }
    }

    switch (props.type) {
        case "text":
            return <>
                <label> {label} </label> <br />
                <input type={type} placeholder={placeholder} style={{ height: `${heigh}` }}
                    className="w-full h-[40px] pl-[10px] mt-[5px] mb-[10px] border-default bg-blank"
                    onChange={(event) => { onChange(props.var, event) }} value={value} /> <br />
            </>

        case "password":
            return <>
                <label> {label} </label> <br />
                <div className="flex border-default mt-[5px] mb-[10px]">
                    <input type={type} placeholder={placeholder} style={{ height: `${heigh}` }}
                        className="w-[calc(100%-45px)] h-[40px] pl-[10px] bg-blank"
                        onChange={(event) => { onChange(props.var, event) }} value={value} />
                    <div style={{ height: `${heigh}` }} onClick={showPass}
                        className="w-[45px] cursor-pointer bg-blank flex justify-center items-center">
                        {(() => {
                            if (toggle) {
                                return <>
                                    <bs.BsEyeFill size={28} />
                                </>
                            } else {
                                return <>
                                    <bs.BsEyeSlashFill size={28} />
                                </>
                            }
                        })()}
                    </div>
                </div>
            </>

        default:
            return <>
            </>
    }
}