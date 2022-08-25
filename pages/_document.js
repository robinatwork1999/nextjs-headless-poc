import Document, { Html, Head, Main, NextScript } from "next/document";
import { readFileSync } from "fs";
import { join } from "path";

class InlineStylesHead extends Head {
  getCssLinks = ({ allFiles }) => {
    const { assetPrefix } = this.context;
    if (!allFiles || allFiles.length === 0) return null;
    console.log(process.cwd())
    
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

export default class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <InlineStylesHead />
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
