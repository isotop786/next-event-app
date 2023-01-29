import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'


const PageLayout = ({title,keywords,description,children}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>

    <Header/>
      <main className={styles.container}>
        {children}
      </main>
    <Footer/>
    </div>
  )
}

PageLayout.defaultProps={
    title:'DJ Events | Find the latest events',
    description: 'Find the latest DJ and other events',
    keywords:'music, dj, edm, events'
}

export default PageLayout