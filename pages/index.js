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
      <div className={styles.title}>
        <h1>Ínicio da Página</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci impedit quibusdam, commodi quos illum tenetur fugiat autem consequuntur dolores provident similique, ipsum, architecto reiciendis nam perferendis eaque praesentium rerum sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quaerat ut fuga autem quos laborum deserunt vel sed aliquam doloribus? Placeat odio odit nesciunt laborum ducimus minus rerum sunt eveniet!</p>
        {/* <Image 
         src="/image/green.png" 
         width={400} 
         height={400} 
         alt="flowers"
        /> */}
      </div>
      </>
  )
}
