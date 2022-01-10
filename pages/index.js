import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>car prev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Seja bem vindo motorista !!
      
        </h1>

        <p className={styles.description}>
          aqui voce faz o seu checklist antes de viajar {' '}
          
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>calibrar os pneus  &rarr;</h2>
            <p>seus pneus devem estar devidamente calibrados para dar aderencia nas curvas .</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>olhar a agua do motor  &rarr;</h2>
            <p>pra mais segurança na viagem verifique o nivel de agua no motor.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>oleo do motor  &rarr;</h2>
            <p>A validade do oleo no motor é muito importante para preservaçao da vida ultil do carro !</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Verifique se o carro esta alinhado e balançeado  &rarr;</h2>
            <p>o alinhamento e balançeamento sao essenciais para uma viagem segura!.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Limpe os parabrisas &rarr;</h2>
            <p>A visao é uma das mais importantes coisas numa estrada ,verifique se seus vidros estão limpos.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Encha o tanque &rarr;</h2>
            <p>
              Nunca se sabe se vai ter que passar por um caminho mais longo ou mudar a rota , se previna e coloque mais gasolina 
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Encha o tanque &rarr;</h2>
            <p>
              Nunca se sabe se vai ter que passar por um caminho mais longo ou mudar a rota , se previna e coloque mais gasolina 
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
