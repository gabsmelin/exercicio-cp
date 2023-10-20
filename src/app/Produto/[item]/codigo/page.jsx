import Image from "next/image"
import '../../produtos.scss'

export default function Tenis({params}) {
    return(
        <div>
            <Image src='/img/codigoFonte.png' alt="codigo fonte" width={300} height={400}/>
        </div>
    )
}