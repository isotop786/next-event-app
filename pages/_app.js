import '../styles/globals.css'
import PageLayout from "../components/Layout"


function MyApp({ Component, pageProps }) {
  return(
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default MyApp
