import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps):JSX.Element {
    return <>
        <Head>
            <title>AppSettings</title>
            <link key={1} rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
        </Head>
        <Component {...pageProps} />
    </>;
}
