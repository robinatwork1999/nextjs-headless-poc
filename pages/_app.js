import React from "react";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import NextNProgress from "nextjs-progressbar";
import "../styles/globalLayout.scss";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { readFileSync } from "fs";
import { join } from "path";


class InlineStylesHead extends Head {
  getCssLinks = ({ allFiles }) => {
    const { assetPrefix } = this.context;
    if (!allFiles || allFiles.length === 0) return null;
  
    return allFiles
      .filter((file) => /\.css$/.test(file))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: readFileSync(join(process.cwd(), ".next", file), "utf-8"),
          }}
        />
      ));
  };
}

function MyApp({ Component, pageProps }) {
  const { headerData = {}, footerData = {} } = pageProps;
  return (
    <React.Fragment>
      <InlineStylesHead/>
      <Header headerData={headerData} />
      <main className="main-content">
        <NextNProgress color="#103be6" />
        <Component {...pageProps} />
      </main>
      <Footer footerData={footerData} />
    </React.Fragment>
  );
}

export default MyApp;
