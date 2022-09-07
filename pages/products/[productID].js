/**
 * Product Page Dynamic Routes
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import PDetails from "@/product/productdetail";
import { aemHeadlessClient, queries } from "aemHeadless";
import { useRouter } from "next/router";
import React from "react";

export default function ProductDetails({ productDetail = {}, AEM_HOST_URI }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <React.Fragment>
      <PDetails productDetails={productDetail} AEM_HOST_URI={AEM_HOST_URI} />
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  let productListJSON = await aemHeadlessClient.runPersistedQuery(
    queries.productList
  );
  const { productDetailList, headerList, footerModelList } =
    productListJSON.data;

  const _productJSON = productDetailList.items.filter(
    (ele) => ele.id === params.productID
  );

  if (_productJSON.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productDetail: _productJSON[0],
      headerData: { ...headerList.items[0] },
      footerData: { ...footerModelList.items[0] },
      AEM_HOST_URI: process.env.AEM_HOST_URI,
    },
    revalidate: 10,
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { productID: "acr" } }],
    fallback: "blocking",
  };
}
