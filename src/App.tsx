import { useState, useEffect } from 'react';
import { QRCode } from './components/QRCode';
import { Upload } from './components/Upload';

export default function App(){

  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    //fetch
  })


  useEffect(() => {
    if(!isLogged){
      setIsLogged(false)
      return
    }

    setIsLogged(true)

  },[isLogged])


  return (
    <div>
      <h1>RPA Reten&ccedil;&atilde;o</h1>
      {
        isLogged
        ? <Upload />
        : <QRCode />
      }
    </div>
  )
}

