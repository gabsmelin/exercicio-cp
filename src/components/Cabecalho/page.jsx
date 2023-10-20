import Link from "next/link"
import './cabecalho.scss'

export default function Cabecalho() {
    return (
        <div className="container-cab">
            <p><Link href="/">Home</Link></p>
            <p><Link href="/Produto/item/calca">Calças</Link></p>
            <p><Link  href="/Produto/item/oculos">Ôculos</Link></p>
            <p><Link  href="/Produto/item/camisa">Camisetas</Link></p>
            <p><Link  href="/Produto/item/tenis">Tênis</Link></p>
            <p><Link  href="/Produto/item/bone">Boné</Link></p>
            <p><Link  href="/Produto/item/codigo">Código Fonte</Link></p>
        </div>
    )
  }