import Document, { Html, Head, Main, NextScript } from "next/document";
import { readFileSync } from "fs";
import { join } from "path";


export default class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
