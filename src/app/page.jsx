import Image from "next/image"
import './page.scss'

export default function Home() {
  return (
    <div className="container-home">
      <h1>Home</h1>
      <Image src='/img/home.jpg' alt="promoção dia dos pais" width={700} height={750}/>
    </div>
  )
}