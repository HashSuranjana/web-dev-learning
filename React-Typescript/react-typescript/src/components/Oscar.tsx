type oscarProps = {
    children : React.ReactNode
}

export const Oscar = (props : oscarProps) => {
    return (
        <h2>{props.children}</h2>
    ) ;
}