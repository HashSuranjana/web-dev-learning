type personObj = {
    name : {
        firstName :string
        lastName :string
    }
}


export const Person = (props :personObj) => {
    return <div>{props.name.firstName +' '+ props.name.lastName}</div>
}