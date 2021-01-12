import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {
    
    
    const estaMontado = useRef(true)
    
    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        
        return () => {
            estaMontado.current = false
        }
        
    }, [])

    

    useEffect(() => {
        
        setstate({ data:null, loading: true, error: null })

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                

                setTimeout(() => {

                    if( estaMontado.current ){
                        setstate({
                            loading: false,
                            error: null,
                            data
                        })
                    } else {
                        console.log("Funciono perfectamente")
                    }
                    
                }, 4000);
               
            });
    }, [url])

    return state;

}
