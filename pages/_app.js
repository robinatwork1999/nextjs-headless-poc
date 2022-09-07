/**
 * Wrapper for each route
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import React from "react";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import "../styles/globalLayout.scss";

function MyApp({ Component, pageProps }) {
  const { headerData = {}, footerData = {}, AEM_HOST_URI } = pageProps;
  return (
    <React.Fragment>
      <Head>
        <meta name="description" content="Put your description here." />
      </Head>
      <Header headerData={headerData} AEM_HOST_URI={AEM_HOST_URI} />
      <main className="main-content">
        <NextNProgress color="#103be6" />
        <Component {...pageProps} />
      </main>
      <Footer footerData={footerData} AEM_HOST_URI={AEM_HOST_URI} />
    </React.Fragment>
  );
}

export default MyApp;
