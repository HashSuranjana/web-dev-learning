type numProp = {
    num : number
}

type positiveProp = numProp & {
    isPossitive : boolean
    isNegative? : never
    isZero? : never
}
type negativeProp = numProp & {
    isNegative : boolean
    isPossitive? : never
    isZero? : never
}
type zeroProp = numProp & {
    isZero : boolean
    isPossitive? : never
    isNegative? : never
    
}

type RandomNumberProps = positiveProp | negativeProp | zeroProp

export const RandomNumber = ({num, isPossitive,isNegative,isZero} : RandomNumberProps) => {

    let message 

    if (isPossitive ) {
        message = num + '> 0 '
    } else if (isNegative ) {
        message = num + '< 0'
    }else if (isZero) {
        message = num +'== 0'
    }
    return (
        <div>
            <h2>Random Number : {message} </h2>
        </div>
    )
}