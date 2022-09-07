/**
 * Article Page Dynamic Routes
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import ADetails from "@/article/articledetail";
import { aemHeadlessClient, queries } from "aemHeadless";
import { useRouter } from "next/router";
import React from "react";

export default function ArticleDetails({ articleDetail = {}, AEM_HOST_URI }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <React.Fragment>
      <ADetails articleDetails={articleDetail} AEM_HOST_URI={AEM_HOST_URI} />
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  let articleListJSON = await aemHeadlessClient.runPersistedQuery(
    queries.articleList
  );
  const { articleDetailsList, headerList, footerModelList } =
    articleListJSON.data;

  const articleDetailsJSON = articleDetailsList.items;

  const _articleJSON = articleDetailsJSON.filter(
    (ele) => ele.id === params.articleID
  );

  if (_articleJSON.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articleDetail: _articleJSON[0],
      AEM_HOST_URI: process.env.AEM_HOST_URI,
      headerData: { ...headerList.items[0] },
      footerData: { ...footerModelList.items[0] },
    },
    revalidate: 10,
  };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { articleID: "acr" } },
      { params: { articleID: "cre" } },
      { params: { articleID: "met" } },
      { params: { articleID: "news" } },
    ],
    fallback: "blocking",
  };
}
