import React, { Fragment } from 'react'

import Head from 'flareact/head'

// @ts-nocheck
import AppLayout from '@layouts/app'

import '@styles/index.css'

const title = 'Preact on Cloudflare',
    description = 'Using Flareact with Preact alias running on Cloudflare Worker',
    author = 'SaltyAom',
    image = 'https://hello-flareact.saltyai.workers.dev/preview.jpg'

const App = ({ Component, pageProps }) => (
    <Fragment>
        <Head>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="article:author" content={author} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content={2560} />
            <meta property="og:image:height" content={1440} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    </Fragment>
)

export default App
