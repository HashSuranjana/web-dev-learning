import { Name } from "./props.type"
type personObj = {
    name : Name
}


export const Person = (props :personObj) => {
    return <div>{props.name.firstName +' '+ props.name.lastName}</div>
}