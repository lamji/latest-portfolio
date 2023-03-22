import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import HomePage from '@/components/Home';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jick Lampago || Info</title>
        <meta name="description" content="Jick Lampago" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <HomePage />

    </>
  )
}
