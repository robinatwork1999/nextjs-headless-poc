/**
 * Article Listing Page
 * @author Robin Varshney (robinvarshn@adobe.com)
 */

import ArticleListing from "@/article/articlelisting";
import { aemHeadlessClient, queries } from "aemHeadless";
import Seo from "components/seo";
import Teaser from "components/teaser";
import React from "react";
import "../../styles/components/_article-layout.scss";

export default function Article({
  teaserData = {},
  articleListing = {},
  pageTitle = "",
  articleData = {},
  AEM_HOST_URI,
}) {
  return (
    <React.Fragment>
      <Seo pageTitle={pageTitle} />
      <Teaser teaserData={teaserData} AEM_HOST_URI={AEM_HOST_URI} />
      <div className="section-article">
        <div className="section-article__content">
          <h3 className="section-article__title">{articleData.title}</h3>
          <p className="section-article__description">
            {articleData.description}
          </p>
        </div>
        <ArticleListing
          articleListingData={articleListing}
          AEM_HOST_URI={AEM_HOST_URI}
        />
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  let ArticleJSONData = await aemHeadlessClient.runPersistedQuery(
    queries.articlePage
  );
  const {
    pageTitle,
    header,
    herobanner,
    articletitle,
    articledescription,
    articlelist,
    footer,
  } = ArticleJSONData.data.articlePageList.items[0];
  return {
    props: {
      AEM_HOST_URI: process.env.AEM_HOST_URI,
      pageTitle: pageTitle.description,
      teaserData: herobanner,
      articleData: {
        title: articletitle.description,
        description: articledescription.description,
      },
      headerData: header,
      footerData: footer,

      articleListing: articlelist.articleList,
    },
  };
}
