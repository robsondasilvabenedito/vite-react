import { Action, Actions } from "../model"
import { INIT_CONTEXT, InitContextType } from "./Context"

export const userContextReducer = (state = INIT_CONTEXT, action: Action): InitContextType => {
    const tempState = { ...state }

    //debugValue(action.value)

    switch (action.key) {
        case Actions.SaveUser:
            tempState.user = action.value ?? tempState.user

            break
        case Actions.SetLogged:
            tempState.isLogged = action.value ?? false

            break
        case Actions.Clean:
            tempState.isLogged = INIT_CONTEXT.isLogged
            tempState.user = INIT_CONTEXT.user

            break
        case Actions.SetAll:
            tempState.user = action.value.user ?? tempState.user
            tempState.isLogged = action.value.isLogged ?? tempState.isLogged

            break
        default:
            throw new Error("Error")
    }

    localStorage.setItem("all", JSON.stringify(tempState))
    return tempState
}

const debugValue = (value: any) => {
    let cssText: string = "font-size: 15px; color: rgb(34, 197, 94)"
    let cssValue: string = "font-size: 15px; color: rgb(34, 197, 94)"

    console.log(`%cvalue: %c${value}`, cssText, cssValue)
}