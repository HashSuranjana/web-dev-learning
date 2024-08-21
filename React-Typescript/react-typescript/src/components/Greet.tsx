type propsType = {
    name :string,
    age : number
}

export const Greet = (props : propsType) => {
    return (
        <div>
            <h2>Hello {props.name} ! You are {props.age} years old.</h2>
        </div>
    );
}