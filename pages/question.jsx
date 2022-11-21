import { React, useEffect,useState } from 'react'
import Head from 'next/head'
import Layout from './../components/Data/private/Layout'
import Loader from './../components/Animation/Loader'
export default function question() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loginString = localStorage.getItem('loginString');
    const pin = sessionStorage.getItem('userpin');
    if (loginString === null || pin === null) {
      window.location.replace('/account')
    }
    else {
      setLoading(false);
    }

  }, [])
  return (
    <div>
      <Head>
        <title>Your Question</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading ? <Loader /> : <Layout active={false} />
      }
    </div>
  )
}
