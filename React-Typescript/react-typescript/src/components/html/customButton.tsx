import React from "react"

type buttonProps = {
    variant : 'primary' | 'secondary'
    children :string
} & Omit<React.ComponentProps <'button'>,'children'> 

export const CustomButton =({variant, children, ...rest} : buttonProps)=> {
    return ( 
        <button className={`bg-${variant}`} {...rest}>{children}</button>
    )
}