import React, { Fragment } from 'react'

import Head from 'flareact/head'

import '@styles/about.css'

const About = () => (
    <Fragment>
        <Head>
            <title>About</title>
        </Head>
        <main id="about">
            <h1 className="title">Cloudflare + React</h1>
            <p className="content">
                Cloudflare Worker is fast. Delivering from Edge network around
                the world, made the request arrived in just a matter of
                milli-second.
            </p>
            <p className="content">
                Imagine what if we take this benefit to serve frontend,
                especially with high performance frontend library like React?
                How fast can we go?
            </p>
            <h3 className="title">Flareact</h3>
            <p className="content">
                Flareact is a library made by Cloudflare, optimized to use with
                Cloudflare Worker, the Serverless Edge handler and one of the
                fastest serverless option available.
            </p>
            <p className="content">
                Flareact is inspired by Next.js, most API is almost the same
                made developers easy to switch between both to suit their need.
            </p>
            <h3 className="title">Preact + Flareact</h3>
            <p className="content">
                However, Flareact also provide the webpack configuration which
                allow devlopers to alias from React to Preact.
            </p>
            <p className="content">
                Preact is 3KB alternative to React with same modern API, so
                instead of using serving 40KB of React we only serve a very
                light weight version yet is production ready.
            </p>
            <p className="content">
                With the with well-crafted Frontend optimization the blazing
                fast connection of Cloudflare Edge, we're leveraging the next
                level performance of the web.
            </p>
        </main>
    </Fragment>
)

export default About
