import { useEffect, useRef } from "react"

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect (()=>{

        inputRef.current.focus ()

    },[])

    const handleValidation = () => {
        
        if (parseInt(inputRef.current.value) > 15) {

            alert ('success')

        }else if (parseInt(inputRef.current.value) <=15){
            alert ('unsuccessful')
        }else if (inputRef.current.value === '') {
            inputRef.current.focus () ;
        }
    }


    return (
        <div>
            <input type="number" ref={inputRef} />
            <button onClick={handleValidation}>Validate</button>
        </div>
    )
}