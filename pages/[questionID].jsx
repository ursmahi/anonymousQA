import React from 'react'
import Head from 'next/head'
import axios from 'axios';
import Notfound from './../components/Data/public/Notfound'
import Askanything from './../components/Data/public/Askanything'

export default function question({ uniqueID, question }) {
    return (
        <div>
            <Head>
                <title>Anonymous Question </title>
            </Head>
            {
                question === null ? <Notfound /> : <Askanything uniqueID={uniqueID} question={question} />
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const { req,params } = context;
    let axios_url =' '
    if (req) {
      let host = req.headers.host // will give you localhost:3000
      if (host.startsWith("localhost")){
        axios_url = `http://${host}`
      }
      else{
        axios_url = `https://${host}`
  
      }
    }
    const { questionID } = context.query;
    const res = await axios.get(`${axios_url}/api/qid`)
    const data = await res.data;

    if (data.includes(questionID)) {
        const response = await axios.get(`${axios_url}/api/question?qid=${questionID}`)
        const question = await response.data.question;
        const uniqueID = await response.data.uniqueID;
        return { props: { uniqueID: uniqueID, question: question } }
    }
    else {
        return { props: { uniqueID: null, question: null } }
    }
}