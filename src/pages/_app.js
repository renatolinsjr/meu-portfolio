import Head from 'next/head'

import './styles.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
