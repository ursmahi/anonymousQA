import Head from 'next/head'
import Landingpage from '../components/Data/public/Landingpage'
const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Anonymous Q/A</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landingpage />
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
     
      </footer> */}
    </div>
  )
}

export default Home
