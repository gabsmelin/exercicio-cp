import Image from "next/image"
import '../../../components/ScssProdutos/produtos.scss'

export default function Tenis({params}) {
    return(
        <div>
            <Image src='/img/codigoFonte.png' alt="codigo fonte" width={200} height={400}/>
        </div>
    )
}