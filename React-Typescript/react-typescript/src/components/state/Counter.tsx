import {useReducer} from "react"

const initialState = {
    count : 0
}

type stateType = {
    count : number
}

type updateAction = {
    type : 'increment' | 'decrement'
    payload : number
}

type resetAction = {
    type : 'reset'
}

type actionType = updateAction | resetAction

const reducer = (state : stateType,action : actionType) => {
    switch(action.type) {
        case 'increment' :
            return {count : state.count + action.payload}
            
        case 'decrement' :
            return {count : state.count - action.payload}
        
        case 'reset' :
            return initialState
        default :
            return state
    }
}



export const Counter = () => {
    
    const [state,dispatch]= useReducer(reducer , initialState)

    
    

    return (
        <div>
            <h3>Counter : {state.count}</h3>
            <button onClick={() => dispatch({type : 'increment',payload : 10})}>Increment</button>
            <button onClick={() => dispatch({type : 'decrement',payload : 10})}>Decrement</button>
            <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
            
        </div>
    )
} 