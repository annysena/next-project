import Head from "next/head"
import styles from "../styles/Home.module.css"
import Image from "next/image"

export default function Home() {
  return (
      <>
      <Head>
        <title>Página Principal</title>
        <meta name="keyworks" content="Roupas, Calçados, Boné"></meta>
        <meta name="description" content="Encontre a melhor roupa para você"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Ínicio da Página</h1>
        {/* <Image 
         src="/image/img2.jpg" 
         width="200px" 
         height="200px" 
         alt="Cidade Noturna"
        /> */}
      </div>
      </>
  )
}
