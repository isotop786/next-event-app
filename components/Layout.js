import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import { useRouter } from 'next/router'


const PageLayout = ({title,keywords,description,children}) => {
  const router = useRouter();
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>

    <Header/>
    {router.pathname=="/" && (
      <Showcase/>
    )}
    
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