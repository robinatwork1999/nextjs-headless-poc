import Head from "next/head";
import React from "react";

export default function Seo({ pageTitle = "" }) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
    </React.Fragment>
  );
}
