import React, { Fragment, FunctionComponent } from 'react'

import Link from 'flareact/link'

import './app-layout.css'

const AppLayout: FunctionComponent = ({ children }) => (
    <Fragment>
        <nav id="nav">
            <Link href="/">
                <a className="link" role="heading" aria-label="1">Home</a>
            </Link>
            <Link href="/about">
                <a className="link" role="heading" aria-label="2">About</a>
            </Link>
        </nav>
        <section id="app">
            {children}
        </section>
    </Fragment>
)

export default AppLayout
