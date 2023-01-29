import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <div>
        <Head>
            <title>About page</title>
        </Head>
        <h1>About</h1>
        <p>This app helps you discover the latest DJ and other music events</p>
        <p>Version: 1.0</p>
    </div>
  )
}

export default about