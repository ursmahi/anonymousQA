import React from 'react'
import Head from 'next/head'
import Layout from './../components/Data/private/Layout'
import Loader from './../components/Animation/Loader'
export default function response() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
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
        <title>Responses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading ? <Loader /> : <Layout active={true} />
      }
    </div>
  )
}
