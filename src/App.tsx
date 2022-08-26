import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { QRCode } from './components/QRCode';
import { Upload } from './components/Upload';

export default function App(){

    const [cookie, setCookie] = useCookies()
    const [data, setData] = useState()
    // setar cookie para impedir requisições desnecessarias
    //1hr de cookie, reqs 10s pro qr

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch('http://localhost:3000/status', { signal })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => err.name === "AbortError" ? console.log('Cancelled') : console.log(err))
            
        return () => controller.abort()
    }, [])

    return (
        <div>
            <h1>RPA Reten&ccedil;&atilde;o</h1>
            <div>

            </div>
        </div>
    )
}

