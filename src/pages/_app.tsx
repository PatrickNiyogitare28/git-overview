import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import './slides/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp