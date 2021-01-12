import { useState } from 'react'

export const useCounter = ( initialState = 10) => {
    
    const [counter, setcounter] = useState(initialState)

    const incremennt = () => {
        setcounter( counter + 1 )
    }

    const decremennt = () => {
        setcounter( counter - 1 )
    }

    const reset = () => {
        setcounter( initialState )
    }

    return {
        counter,
        incremennt,
        decremennt,
        reset
    }
}
