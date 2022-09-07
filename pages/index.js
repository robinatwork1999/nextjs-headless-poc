/**
 * Home Page
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import ProductListing from "@/product/productlisting";
import { aemHeadlessClient, queries } from "aemHeadless";
import Seo from "components/seo";
import Teaser from "components/teaser";
import Text from "components/text";
import React from "react";

export default function Home({
  teaserData = {},
  bannerTextData = {},
  productTextData = {},
  productListing = [],
  pageTitle = "",
  AEM_HOST_URI,
}) {
  return (
    <React.Fragment>
      <Seo pageTitle={pageTitle} />
      <Text text={bannerTextData} />
      <Teaser teaserData={teaserData} AEM_HOST_URI={AEM_HOST_URI} />
      <Text text={productTextData}></Text>
      <ProductListing
        productListingData={productListing}
        AEM_HOST_URI={AEM_HOST_URI}
      />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  let HomeJSONData = await aemHeadlessClient.runPersistedQuery(
    queries.homePage
  );
  let {
    footer,
    header,
    herobanner,
    herotitle,
    pageTitle,
    producttitle,
    trendingProducts,
  } = HomeJSONData.data.homePageList.items[0];
  return {
    props: {
      pageTitle: pageTitle.description,
      teaserData: { ...herobanner },
      bannerTextData: { ...herotitle },
      headerData: { ...header },
      footerData: { ...footer },
      productTextData: producttitle,
      productListing: trendingProducts.productList.filter((x) => x.isTrending),
      AEM_HOST_URI: process.env.AEM_HOST_URI,
    },
  };
}
