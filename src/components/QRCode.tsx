import { useState, useEffect } from 'react';

export function QRCode(){
    const [isLogged, setIsLogged] = useState()
    
    const handleQR = async () => {
        const res = await fetch('http://172.16.121.182/status')

    }
    useEffect(() => {

    },[isLogged])


    return(
        <div>

        </div>
    )
}