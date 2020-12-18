import React, { Fragment } from 'react'

import Head from 'flareact/head'

import '@styles/landing.css'

const Landing = () => (
    <Fragment>
        <Head>
            <title>Preact on Cloudflare</title>
        </Head>
        <main id="landing">
            <h1 className="title">Preact on Cloudflare</h1>
            <p className="detail">Running with Flareact and Preact on Cloudflare Worker</p>
        </main>
    </Fragment>
)

export default Landing
