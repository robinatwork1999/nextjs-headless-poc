/**
 * Product Listing Page
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import ProductListing from "@/product/productlisting";
import { aemHeadlessClient, queries } from "aemHeadless";
import Seo from "components/seo";
import Teaser from "components/teaser";
import Text from "components/text";
import React from "react";

export default function Product({
  teaserData = {},
  bannerTextData = {},
  productListing = {},
  pageTitle = "",
  AEM_HOST_URI,
}) {
  return (
    <React.Fragment>
      <Seo pageTitle={pageTitle} />
      <Teaser teaserData={teaserData} AEM_HOST_URI={AEM_HOST_URI} />
      <Text text={bannerTextData} />
      <ProductListing
        productListingData={productListing}
        AEM_HOST_URI={AEM_HOST_URI}
      />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  let ProductJSONData = await aemHeadlessClient.runPersistedQuery(
    queries.productPage
  );
  let { footer, header, herobanner, herotitle, pageTitle, products } =
    ProductJSONData.data.productPageList.items[0];
  return {
    props: {
      ProductJSONData,
      AEM_HOST_URI: process.env.AEM_HOST_URI,
      pageTitle: pageTitle.description,
      teaserData: herobanner,
      bannerTextData: herotitle,
      headerData: header,
      footerData: footer,
      productListing: products.productList,
    },
  };
}
