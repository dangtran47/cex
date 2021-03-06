import type { NextPage } from 'next'
import Head from 'next/head'
import Button from 'components/Button'

const Home: NextPage = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="text-5xl font-bold">Hello world</h1>
    <Button>Hello</Button>
  </div>
)

export default Home
