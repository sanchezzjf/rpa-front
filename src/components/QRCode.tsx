type Props = {
    qr_data: string
}

export function QRCode(props: Props){
   

    return(
        <div>
            <img src={props.qr_data} height='250px' width='250px'/>
        </div>
    )
}