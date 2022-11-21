import React from 'react'
import Head from 'next/head'
import Login from '../components/Account/Login' 
export default function account() {
  return (
    <>
     <Head>
        <title>Account</title>
      </Head>
    <Login />
    </>
  )
}
