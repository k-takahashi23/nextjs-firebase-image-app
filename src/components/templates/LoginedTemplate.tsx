import React from 'react'
import Head from 'next/head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

type Props = {
  title?: string
}

const LoginedTemplate: React.FC<Props> = ({
  children,
  title = 'nextjs-firebase-image-app',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

export default LoginedTemplate