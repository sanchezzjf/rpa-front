import { useState, useEffect } from 'react';
import { QRCode } from './components/QRCode';
import { Upload } from './components/Upload';

export default function App(){

  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [error, setError] = useState()
  const [qr_data, setQr_data] = useState("")

  // setar cookie para impedir requisições desnecessarias
  //1hr de cookie, reqs 10s pro qr

  const handleConnection = (data: any) => {
    data.connected ? setIsLogged(true) : setIsLogged(false)
    if(!data.qr_code) return
    setQr_data(data.qr_code.base64Qr)
  }

  useEffect(() => {

    const timer = setInterval(() => {
      fetch('http://172.16.121.182:22000/status')
      .then((res) => {
        if(res.ok) return res.json()
        throw new Error('Something went wrong')
      })
      .then((data) => {
        handleConnection(data)
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
        setError(err)})
    }, 5000)

    return () => clearInterval(timer)
  },[])

  return (
    <div>
      <h1>RPA Reten&ccedil;&atilde;o</h1>
      {
        error && <h3>Something went wrong</h3>
      }
      {
        isLogged && <Upload />
      }
      {
        qr_data && <QRCode qr_data={qr_data} />
      }
      <div>
        <button onClick={() => setIsLogged(true)}>True</button>
        <button onClick={() => setIsLogged(false)}>False</button>
      </div>
    </div>
  )
}

