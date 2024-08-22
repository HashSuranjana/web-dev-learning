import React from "react"

type inputProp =  React.ComponentProps<'input'>

export const CustomInput = ({...rest}:inputProp) => {
    return (
        <input {...rest} />
    )
}