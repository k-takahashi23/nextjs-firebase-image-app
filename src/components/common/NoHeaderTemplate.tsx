import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

type Props = {
  title?: string
}

const NoHeaderTemplate: React.FC<Props> = ({
  children,
  title = 'nextjs-firebase-image-app',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <Footer />
  </div>
)

export default NoHeaderTemplate